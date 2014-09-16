/*
    This file is part of hidedit.
    (C) Copyright 2012 Ilan Tayari

    hidedit is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    hidedit is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with hidedit.  If not, see http://www.gnu.org/licenses/
*/

// Special values:
var HID_LONG_ITEM_TAG = 15;
var HID_LONG_ITEM_SIZE = 2;

// HID Descriptor Main Item Tag
var HIDItemMainTag = {
    Input:          { value: 8,  name: "Input",    reportType: HIDReportType.Input },
    Output:         { value: 9,  name: "Output",   reportType: HIDReportType.Output },
    Feature:        { value: 11, name: "Feature",  reportType: HIDReportType.Feature },
    Collection:     { value: 10, name: "Collection" },
    EndCollection:  { value: 12, name: "End Collection" },
    name: "HIDItemMainTag"
};

// HID Descriptor Global Item Tag
var HIDItemGlobalTag = {
    UsagePage:      { value: 0, name: "Usage Page" },
    LogicalMinimum: { value: 1, name: "Logical Minimum" },
    LogicalMaximum: { value: 2, name: "Logical Maximum" },
    PhysicalMinimum:{ value: 3, name: "Physical Minimum" },
    PhysicalMaximum:{ value: 4, name: "Physical Maximum" },
    UnitExponent:   { value: 5, name: "Unit Exponent" },
    Unit:           { value: 6, name: "Unit" },
    ReportSize:     { value: 7, name: "Report Size" },
    ReportID:       { value: 8, name: "Report ID" },
    ReportCount:    { value: 9, name: "Report Count" },
    Push:           { value: 10, name: "Push" },
    Pop:            { value: 11, name: "Pop" },
    name: "HIDItemGlobalTag"
};

// HID Descriptor Local Item Tag
var HIDItemLocalTag = {
    Usage:              { value: 0, name: "Usage" },
    UsageMinimum:       { value: 1, name: "Usage Minimum" },
    UsageMaximum:       { value: 2, name: "Usage Maximum" },
    DesignatorIndex:    { value: 3, name: "Designator Index" },
    DesignatorMinimum:  { value: 4, name: "Designator Minimum" },
    DesignatorMaximum:  { value: 5, name: "Designator Maximum" },
    StringIndex:        { value: 7, name: "String Index" },
    StringMinimum:      { value: 8, name: "String Minimum" },
    StringMaximum:      { value: 9, name: "String Maximum" },
    Delimiter:          { value: 10, name: "Delimiter" },
    name: "HIDItemLocalTag"
};

// HID Descriptor Item Type
var HIDItemType = {
   	Global: { value: 1, name: "Global", tags: HIDItemGlobalTag },
   	Local:  { value: 2, name: "Local",  tags: HIDItemLocalTag  },
   	Main:   { value: 0, name: "Main",   tags: HIDItemMainTag   },
   	name: "HIDItemType"
};

// Collection Item Type
var HIDItemCollectionType = {
    Physical:       { value: 0, name: "Physical" },
    Application:    { value: 1, name: "Application" },
    Logical:        { value: 2, name: "Logical" },
    Report:         { value: 3, name: "Report" },
    NamedArray:     { value: 4, name: "Named Array" },
    UsageSwitch:    { value: 5, name: "Usage Switch" },
    UsageModifier:  { value: 6, name: "Usage Modifier" },
    VendorDefined:  { value: [0x80, 0xff], name: "Vendor defined" },
    name: "HIDItemCollectionType"
};

var HIDUnitSystem = {
   	SILinear:        { value: 0, name: "SI Linear",        units: { 1: "Centimeter", 2: "Gram", 3: "Seconds", 4: "Kelvin",     5: "Ampere", 6: "Candela"} },
   	SIRotation:      { value: 1, name: "SI Rotation",      units: { 1: "Radians",    2: "Gram", 3: "Seconds", 4: "Kelvin",     5: "Ampere", 6: "Candela"} },
   	EnglishLinear:   { value: 2, name: "English Linear",   units: { 1: "Inch",       2: "Slug", 3: "Seconds", 4: "Fahrenheit", 5: "Ampere", 6: "Candela"} },
   	EnglishRotation: { value: 3, name: "English Rotation", units: { 1: "Degrees",    2: "Slug", 3: "Seconds", 4: "Fahrenheit", 5: "Ampere", 6: "Candela"} },
   	name: "HIDUnitSystem"
};

// Object for parsed HID Descriptor Item Prefix
var HIDItemPrefix = makeStruct("tag type size");

// Parse a HID Item Prefix's size field
function parseHIDItemSize(size) {
    if (size == 3)
        return 4;
    return size;
}

function sizeForData(data) {
    if (data < 0)
        throw "Negative data";
    if (data == 0)
        return 0;
    if (data < 256)
        return 1;
    if (data < 65536)
        return 2;
    return 4;
}

function packSize(size) {
    if ((size > 4) || (size == 3))
        throw "Long item packing is not yet supported";
    if (size < 0)
        throw "Negative size";

    if (size == 4)
        return 3;
    return size;
}

// Parse a HID Item prefix byte
function parseHIDItemPrefix(byte) {
    var tag = (byte >> 4) & 15;
    var type = parseEnum((byte >> 2) & 3, HIDItemType);
    var size = parseHIDItemSize(byte & 3);
    return new HIDItemPrefix(tag, type, size);
}

function packHIDItemPrefix(tag, type, size) {
    return ((tag & 15) << 4) |
           ((type & 3) << 2) |
           packSize(size);
}

function HIDItem() {
    // Parsed members
    this.type = null;
    this.tag = null;
    this.data = 0;
    // Members filled by run
    this.dataDesc = "";
    this.indent = 0;
}

// Read and parse a HID Item from the stream
HIDItem.prototype.parse = function (stream) {
    var prefix = parseHIDItemPrefix(stream.getByte());
    this.type = prefix.type;

    if (prefix.tag == HID_LONG_ITEM_TAG) {
        if (prefix.size == HID_LONG_ITEM_SIZE) {
            // Long items are blobs for us - not defined in the spec, so can only be vendor-defined
            var size = stream.getByte();
            this.tag = stream.getByte();
            this.data = stream.getBuffer(size);
        }
        else
            throw "Unknown item: Special item tag, but not long-item size";
    } else {
        // Parse short item
        switch (prefix.type) {
            case HIDItemType.Main:
                this.tag = parseEnum(prefix.tag, HIDItemMainTag);
                break;
            case HIDItemType.Global:
                this.tag = parseEnum(prefix.tag, HIDItemGlobalTag);
                break;
            case HIDItemType.Local:
                this.tag = parseEnum(prefix.tag, HIDItemLocalTag);
                break;
            case HIDItemType.Reserved:
                throw "Reserved item type encountered";
        }

        var size = prefix.size;
        if (size > 0)
            this.data = hex2dec(stream.getBuffer(size));
        else
            this.data = 0;
    }
};

HIDItem.prototype.pack = function (stream) {
    var size = sizeForData(this.data);
    var prefix = packHIDItemPrefix(this.tag.value, this.type.value, size);
    stream.writeByte(prefix);
    stream.writeData(this.data, size);
};

function i2h(x,size){
  var result = "";
  var r = "";
  
  for(var j=0;j<size;j++){
    var i = (x >> j) & 0xFF;
    r = i.toString(16);
    r =  r.length == 1 ? "0" + r :r;
    result +=  "0x" + r + ",";
  }
  
  return result;
}

HIDItem.prototype.toString = function () {
    var result = "";
    var size = sizeForData(this.data);
    var prefix = packHIDItemPrefix(this.tag.value, this.type.value, size);
    
    result += i2h(prefix,1);
    result += i2h(this.data,size);
    result += "\t\t/* " + this.elem.textContent + " */\n";
    return result
};

function HIDDescriptor() {
    this.items = new Array();
}

HIDDescriptor.prototype.parse = function (stream) {
    this.items = new Array();

    while (!stream.atEnd())
    {
        var item = new HIDItem();
        item.parse(stream);
        this.items.push(item);
    }
};

HIDDescriptor.prototype.toString = function () {
    var result = "";
    for (var index in this.items)
    {
        var item = this.items[index];
        result += item.toString();
    }
    return result;
};

HIDDescriptor.prototype.pack = function () {
    var stream = new WriteStream();
    for (var index in this.items)
    {
        var item = this.items[index];
        item.pack(stream);
    }
    return stream.getData();
};
