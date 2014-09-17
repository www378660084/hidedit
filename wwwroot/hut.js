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

var NameReserved = "Reserved";

var HIDUsageGenericDevice={
"Unidentified":{value:0x00,name:"Unidentified"}	,
//01-1F	Reserved	
"Battery Strength":{value:0x20,name:"Battery Strength"},
"Wireless Channel":{value:0x21,name:"Wireless Channel"},
"Wireless ID":{value:0x22,name:"Wireless ID"},
"Discover Wireless Control":{value:0x23,name:"Discover Wireless Control"},
"Security Code Character Entered":{value:0x24,name:"Security Code Character Entered"},
"Security Code Character Erased":{value:0x25,name:"Security Code Character Erased"},
"Security Code Cleared":{value:0x26,name:"Security Code Cleared"},
//27-FFFF	Reserved	
};
var HIDUsageGenericDesktop = {
    Undefined:  { value: 0x00, name: "Undefined" },
    Pointer:    { value: 0x01, name: "Pointer" },
    Mouse:      { value: 0x02, name: "Mouse" },
    Joystick:   { value: 0x04, name: "Joystick" },
    GamePad:    { value: 0x05, name: "Game Pad" },
    Keyboard:   { value: 0x06, name: "Keyboard" },
    KeyPad:     { value: 0x07, name: "Keypad" },
    MultiAxis:  { value: 0x08, name: "Multi-axis Controller" },
    Tablet:     { value: 0x09, name: "Tablet PC" },
    X:          { value: 0x30, name: "X" },
    Y:          { value: 0x31, name: "Y" },
    Z:          { value: 0x32, name: "Z" },
    RX:         { value: 0x33, name: "Rx" },
    RY:         { value: 0x34, name: "Ry" },
    RZ:         { value: 0x35, name: "Rz" },
    Slider:     { value: 0x36, name: "Slider" },
    Dial:       { value: 0x37, name: "Dial" },
    Wheel:      { value: 0x38, name: "Wheel" },
    HatSwitch:  { value: 0x39, name: "Hat Switch" },
    CountedBuf: { value: 0x3A, name: "Counted Buffer" },
    byteCount:  { value: 0x3B, name: "Byte Count" },
    MotionWake: { value: 0x3C, name: "Motion Wakeup" },
    Start:      { value: 0x3D, name: "Start" },
    Select:     { value: 0x3E, name: "Select" },
    VX:         { value: 0x40, name: "Vx" },
    VY:         { value: 0x41, name: "Vy" },
    VZ:         { value: 0x42, name: "Vz" },
    VBRX:       { value: 0x43, name: "Vbrx" },
    VBRY:       { value: 0x44, name: "Vbry" },
    VBRZ:       { value: 0x45, name: "Vbrz" },
    Vno:        { value: 0x46, name: "Vno" },
    FeatureNot: { value: 0x47, name: "Feature Notification" },
    ResMulti:   { value: 0x48, name: "Resolution Multiplier" },
    SysCtrl:    { value: 0x80, name: "System Control" },
    SysPwrDn:   { value: 0x81, name: "System Power Down" },
    SysSleep:   { value: 0x82, name: "System Sleep" },
    SysWakeUp:  { value: 0x83, name: "System Wake Up" },
    SysCntxMenu:{ value: 0x84, name: "System Context Menu" },
    SysMainMenu:{ value: 0x85, name: "System Main Menu" },
    SysAppMenu: { value: 0x86, name: "System App Menu" },
    SysMnuHelp: { value: 0x87, name: "System Menu Help" },
    SysMnuExit: { value: 0x88, name: "System Menu Exit" },
    SysMnuSlct: { value: 0x89, name: "System Menu Select" },
    SysMnuRight:{ value: 0x8A, name: "System Menu Right" },
    SysMnuLeft: { value: 0x8B, name: "System Menu Left" },
    SysMnuUp:   { value: 0x8C, name: "System Menu Up" },
    SysMnuDown: { value: 0x8D, name: "System Menu Down" },
    SysColdRst: { value: 0x8E, name: "System Cold Restart" },
    SysWarmRst: { value: 0x8F, name: "System Warn Restart" },
    DPadUp:     { value: 0x90, name: "D-pad Up" },
    DPadDown:   { value: 0x91, name: "D-pad Down" },
    DPadRight:  { value: 0x92, name: "D-pad Right" },
    DPadLeft:   { value: 0x93, name: "D-pad Left" },
    SysDock:    { value: 0xA0, name: "System Dock" },
    SysUndock:  { value: 0xA1, name: "System Undock" },
    SysSetup:   { value: 0xA2, name: "System Setup" },
    SysBreak:   { value: 0xA3, name: "System Break" },
    SysDbgBreak:{ value: 0xA4, name: "System Debugger Break" },
    AppBreak:   { value: 0xA5, name: "Application Break" },
    AppDbgBreak:{ value: 0xA6, name: "Application Debugger Break" },
    SysSpkMute: { value: 0xA7, name: "System Speaker Mute" },
    SysHibernt: { value: 0xA8, name: "System Hibernate" },
    DispInvert: { value: 0xB0, name: "System Display Invert" },
    DispInt:    { value: 0xB1, name: "System Display Internal" },
    DispExt:    { value: 0xB2, name: "System Display External" },
    DispBoth:   { value: 0xB3, name: "System Display Both" },
    DispDual:   { value: 0xB4, name: "System Display Dual" },
    DispToggle: { value: 0xB5, name: "System Display Toggle Int/Ext" },
    DispSwap:   { value: 0xB6, name: "System Display Swap Primary/Secondary" },
    DispAutoScl:{ value: 0xB7, name: "System Display LCD Autoscale" },
	Reserved:   { value: [0xB8, 0xFFFF], name: NameReserved },
    name: "HIDUsageGenericDesktop"
};

var HIDUsageButton = {
    NoButton:   { value: 0, name: "No Button" },
    name: "HIDUsageButton"
};
for (var button = 1; button <= 65535; button++)
    HIDUsageButton["Button" + button] = {value: button, name: "Button " + button};

var HIDUsageVendor = {
    name: "HIDUsageVendor"
};
for (var vendor = 0; vendor <= 65535; vendor++)
	HIDUsageVendor["Vendor" + dec2hex(vendor, 4)] = { value: vendor, name: "Vendor " + dec2hex(vendor, 4) };

var HIDUsageLED = {
    Undefined: { value: 0x00, name: "Undefined" },
    NumLock: { value: 0x01, name: "Num Lock" },
    CapsLock: { value: 0x02, name: "Caps Lock" },
    ScrollLock: { value: 0x03, name: "Scroll Lock" },
    Compose: { value: 0x04, name: "Compose" },
    Kana: { value: 0x05, name: "Kana" },
    Power: { value: 0x06, name: "Power" },
    Shift: { value: 0x07, name: "Shift" },
    DoNotDisturb: { value: 0x08, name: "Do Not Disturb" },
    Mute: { value: 0x09, name: "Mute" },
    ToneEnable: { value: 0x0A, name: "Tone Enable" },
    HighCutFilter: { value: 0x0B, name: "High Cut Filter" },
    LowCutFilter: { value: 0x0C, name: "Low Cut Filter" },
    EqualizerEnable: { value: 0x0D, name: "Equalizer Enable" },
    SoundFieldOn: { value: 0x0E, name: "Sound Field On" },
    SurroundOn: { value: 0x0F, name: "Surround On" },
    Repeat: { value: 0x10, name: "Repeat" },
    Stereo: { value: 0x11, name: "Stereo" },
    SamplingRateDetect: { value: 0x12, name: "Sampling Rate Detect" },
    Spinning: { value: 0x13, name: "Spinning" },
    CAV: { value: 0x14, name: "CAV" },
    CLV: { value: 0x15, name: "CLV" },
    RecordingFormatDetect: { value: 0x16, name: "Recording Format Detect" },
    OffHook: { value: 0x17, name: "Off-Hook" },
    Ring: { value: 0x18, name: "Ring" },
    MessageWaiting: { value: 0x19, name: "Message Waiting" },
    DataMode: { value: 0x1A, name: "Data Mode" },
    BatteryOperation: { value: 0x1B, name: "Battery Operation" },
    BatteryOk: { value: 0x1C, name: "Battery OK" },
    BatteryLow: { value: 0x1D, name: "Battery Low" },
    Speaker: { value: 0x1E, name: "Speaker" },
    HeadSet: { value: 0x1F, name: "Head Set" },
    Hold: { value: 0x20, name: "Hold" },
    Microphone: { value: 0x21, name: "Microphone" },
    Coverage: { value: 0x22, name: "Coverage" },
    NightMode: { value: 0x23, name: "Night Mode" },
    SendCalls: { value: 0x24, name: "Send Calls" },
    CallPickup: { value: 0x25, name: "Call Pickup" },
    Conference: { value: 0x26, name: "Conference" },
    StandBy: { value: 0x27, name: "Stand-by" },
    CameraOn: { value: 0x28, name: "Camera On" },
    CameraOff: { value: 0x29, name: "Camera Off" },
    OnLine: { value: 0x2A, name: "On-Line" },
    OffLine: { value: 0x2B, name: "Off-Line" },
    Busy: { value: 0x2C, name: "Busy" },
    Ready: { value: 0x2D, name: "Ready" },
    PaperOut: { value: 0x2E, name: "Paper-Out" },
    PaperJam: { value: 0x2F, name: "Paper-Jam" },
    Remote: { value: 0x30, name: "Remote" },
    Forward: { value: 0x31, name: "Forward" },
    Reverse: { value: 0x32, name: "Reverse" },
    Stop: { value: 0x33, name: "Stop" },
    Rewind: { value: 0x34, name: "Rewind" },
    FastForward: { value: 0x35, name: "Fast Forward" },
    Play: { value: 0x36, name: "Play" },
    Pause: { value: 0x37, name: "Pause" },
    Record: { value: 0x38, name: "Record" },
    Error: { value: 0x39, name: "Error" },
    Selected: { value: 0x3A, name: "Usage Selected Indicator" },
    InUse: { value: 0x3B, name: "Usage In Use Indicator" },
    MultiMode: { value: 0x3C, name: "Usage Multi Mode Indicator" },
    On: { value: 0x3D, name: "Indicator On" },
    Flash: { value: 0x3E, name: "Indicator Flash" },
    SlowBlink: { value: 0x3F, name: "Indicator Slow Blink" },
    FastBlink: { value: 0x40, name: "Indicator Fast Blink" },
    Off: { value: 0x41, name: "Indicator Off" },
    FlashOnTime: { value: 0x42, name: "Flash On Time" },
    SlowBlinkOnTime: { value: 0x43, name: "Slow Blink On Time" },
    SlowBlinkOffTime: { value: 0x44, name: "Slow Blink Off Time" },
    FastBlinkOnTime: { value: 0x45, name: "Fast Blink On Time" },
    FastBlinkOffTime: { value: 0x46, name: "Fast Blink Off Time" },
    Color: { value: 0x47, name: "Usage Indicator Color" },
    Red: { value: 0x48, name: "Indicator Red" },
    Green: { value: 0x49, name: "Indicator Green" },
    Amber: { value: 0x4A, name: "Indicator Amber" },
    Generic: { value: 0x4B, name: "Generic Indicator" },
    SystemSuspend: { value: 0x4C, name: "System Suspend" },
    ExternalPower: { value: 0x4D, name: "External Power Connected" },
    name: "HIDUsageLED"
};

var HIDUsageSimulation = {
    Undefined: { value: 0x00, name: "Undefined" },
    FlightSim: { value: 0x01, name: "Flight Simulation Device" },
    AutomobileSim: { value: 0x02, name: "Automobile Simulation Device" },
    TankSim: { value: 0x03, name: "Tank Simulation Device" },
    SpaceshipSim: { value: 0x04, name: "Spaceship Simulation Device" },
    SubmarineSim: { value: 0x05, name: "Submarine Simulation Device" },
    SailingSim: { value: 0x06, name: "Sailing Simulation Device" },
    MotorcycleSim: { value: 0x07, name: "Motorcycle Simulation Device" },
    SportsSim: { value: 0x08, name: "Sports Simulation Device" },
    AirplaneSim: { value: 0x09, name: "Airplane Simulation Device" },
    HelicopterSim: { value: 0x0A, name: "Helicopter Simulation Device" },
    MagicCarpetSim: { value: 0x0B, name: "Magic Carpet Simulation Device" },
    BicycleSim: { value: 0x0C, name: "Bicycle Simulation Device" },
    FlightCtrlStick: { value: 0x20, name: "Flight Control Stick" },
    FlightStick: { value: 0x21, name: "Flight Stick" },
    CyclicCtrl: { value: 0x22, name: "Cyclic Control" },
    CyclicTrim: { value: 0x23, name: "Cyclic Trim" },
    FlightYoke: { value: 0x24, name: "Flight Yoke" },
    Aileron: { value: 0xB0, name: "Aileron" },
    AileronTrim: { value: 0xB1, name: "Aileron Trim" },
    AntiTorqueCtrl: { value: 0xB2, name: "Anti-Torque Control" },
    AutoPiletEn: { value: 0xB3, name: "Autopilot Enable" },
    ChaffRelease: { value: 0xB4, name: "Chaff Release" },
    CollectiveCtrl: { value: 0xB5, name: "Collective Control" },
    DiveBrake: { value: 0xB6, name: "Dive Brake" },
    ElecCounterMeasures: { value: 0xB7, name: "Electronic Countermeasures" },
    Elevator: { value: 0xB8, name: "Elevator" },
    ElevatorTrim: { value: 0xB9, name: "Elevator Trim" },
    Rudder: { value: 0xBA, name: "Rudder" },
    Throttle: { value: 0xBB, name: "Throttle" },
    FlightComm: { value: 0xBC, name: "Flight Communications" },
    FlareRelease: { value: 0xBD, name: "Flare Release" },
    LandingGear: { value: 0xBE, name: "Landing Gear" },
    ToeBrake: { value: 0xBF, name: "Toe Brake" },
    Trigger: { value: 0xC0, name: "Trigger" },
    WeaponsArm: { value: 0xC1, name: "Weapons Arm" },
    WeaponsSelect: { value: 0xC2, name: "Weapons Select" },
    WingFlaps: { value: 0xC3, name: "Wing Flaps" },
    Accelerator: { value: 0xC4, name: "Accelerator" },
    Brake: { value: 0xC5, name: "Brake" },
    Clutch: { value: 0xC6, name: "Clutch" },
    Shifter: { value: 0xC7, name: "Shifter" },
    Steering: { value: 0xC8, name: "Steering" },
    TurretDirection: { value: 0xC9, name: "Turret Direction" },
    BarrelElevation: { value: 0xCA, name: "Barrel Elevation" },
    DivePlane: { value: 0xCB, name: "Dive Plane" },
    Ballast: { value: 0xCC, name: "Ballast" },
    BicycleCrank: { value: 0xCD, name: "Bicycle Crank" },
    HandleBars: { value: 0xCE, name: "Handle Bars" },
    FrontBrake: { value: 0xCF, name: "Front Brake" },
    RearBrake: { value: 0xD0, name: "Rear Brake" },
    name: "HIDUsageSimulation"
};

var HIDUsageKeypad = {
name:"HIDUsageKeypad",
"Undefined":{value:0x00,name:"Undefined"},
"Keyboard ErrorRollOver9":{value:0x01,name:"Keyboard ErrorRollOver9"},
"Keyboard POSTFail9":{value:0x02,name:"Keyboard POSTFail9"},
"Keyboard ErrorUndefined9":{value:0x03,name:"Keyboard ErrorUndefined9"},
"Keyboard a and A4":{value:0x04,name:"Keyboard a and A4"},
"Keyboard b and B":{value:0x05,name:"Keyboard b and B"},
"Keyboard c and C4":{value:0x06,name:"Keyboard c and C4"},
"Keyboard d and D":{value:0x07,name:"Keyboard d and D"},
"Keyboard e and E":{value:0x08,name:"Keyboard e and E"},
"Keyboard f and F":{value:0x09,name:"Keyboard f and F"},
"Keyboard g and G":{value:0x0A,name:"Keyboard g and G"},
"Keyboard h and H":{value:0x0B,name:"Keyboard h and H"},
"Keyboard i and I":{value:0x0C,name:"Keyboard i and I"},
"Keyboard j and J":{value:0x0D,name:"Keyboard j and J"},
"Keyboard k and K":{value:0x0E,name:"Keyboard k and K"},
"Keyboard l and L":{value:0x0F,name:"Keyboard l and L"},
"Keyboard m and M4":{value:0x10,name:"Keyboard m and M4"},
"Keyboard n and N":{value:0x11,name:"Keyboard n and N"},
"Keyboard o and O4":{value:0x12,name:"Keyboard o and O4"},
"Keyboard p and P4":{value:0x13,name:"Keyboard p and P4"},
"Keyboard q and Q4":{value:0x14,name:"Keyboard q and Q4"},
"Keyboard r and R":{value:0x15,name:"Keyboard r and R"},
"Keyboard s and S4":{value:0x16,name:"Keyboard s and S4"},
"Keyboard t and T":{value:0x17,name:"Keyboard t and T"},
"Keyboard u and U":{value:0x18,name:"Keyboard u and U"},
"Keyboard v and V":{value:0x19,name:"Keyboard v and V"},
"Keyboard w and W4":{value:0x1A,name:"Keyboard w and W4"},
"Keyboard x and X4":{value:0x1B,name:"Keyboard x and X4"},
"Keyboard y and Y4":{value:0x1C,name:"Keyboard y and Y4"},
"Keyboard z and Z4":{value:0x1D,name:"Keyboard z and Z4"},
"Keyboard 1 and !4":{value:0x1E,name:"Keyboard 1 and !4"},
"Keyboard 2 and @4":{value:0x1F,name:"Keyboard 2 and @4"},
"Keyboard 3 and #4":{value:0x20,name:"Keyboard 3 and #4"},
"Keyboard 4 and $4":{value:0x21,name:"Keyboard 4 and $4"},
"Keyboard 5 and %4":{value:0x22,name:"Keyboard 5 and %4"},
"Keyboard 6 and ^4":{value:0x23,name:"Keyboard 6 and ^4"},
"Keyboard 7 and &4":{value:0x24,name:"Keyboard 7 and &4"},
"Keyboard 8 and *4":{value:0x25,name:"Keyboard 8 and *4"},
"Keyboard 9 and (4":{value:0x26,name:"Keyboard 9 and (4"},
"Keyboard 0 and )4":{value:0x27,name:"Keyboard 0 and )4"},
"Keyboard Return (ENTER)5":{value:0x28,name:"Keyboard Return (ENTER)5"},
"Keyboard ESCAPE":{value:0x29,name:"Keyboard ESCAPE"},
"Keyboard DELETE (Backspace)13":{value:0x2A,name:"Keyboard DELETE (Backspace)13"},
"Keyboard Tab":{value:0x2B,name:"Keyboard Tab"},
"Keyboard Spacebar":{value:0x2C,name:"Keyboard Spacebar"},
"Keyboard - and (underscore)4":{value:0x2D,name:"Keyboard - and (underscore)4"},
"Keyboard = and +4":{value:0x2E,name:"Keyboard = and +4"},
"Keyboard [ and {4":{value:0x2F,name:"Keyboard [ and {4"},
"Keyboard ] and }4":{value:0x30,name:"Keyboard ] and }4"},
"Keyboard \ and |":{value:0x31,name:"Keyboard \ and |"},
"Keyboard Non-US # and ~2":{value:0x32,name:"Keyboard Non-US # and ~2"},
"Keyboard ; and :4":{value:0x33,name:"Keyboard ; and :4"},
"Keyboard ‘ and “4":{value:0x34,name:"Keyboard ‘ and “4"},
"Keyboard Grave Accent and Tilde4":{value:0x35,name:"Keyboard Grave Accent and Tilde4"},
"Keyboard, and <4":{value:0x36,name:"Keyboard, and <4"},
"Keyboard . and >4":{value:0x37,name:"Keyboard . and >4"},
"Keyboard / and ?4":{value:0x38,name:"Keyboard / and ?4"},
"Keyboard Caps Lock11":{value:0x39,name:"Keyboard Caps Lock11"},
"Keyboard F1":{value:0x3A,name:"Keyboard F1"},
"Keyboard F2":{value:0x3B,name:"Keyboard F2"},
"Keyboard F3":{value:0x3C,name:"Keyboard F3"},
"Keyboard F4":{value:0x3D,name:"Keyboard F4"},
"Keyboard F5":{value:0x3E,name:"Keyboard F5"},
"Keyboard F6":{value:0x3F,name:"Keyboard F6"},
"Keyboard F7":{value:0x40,name:"Keyboard F7"},
"Keyboard F8":{value:0x41,name:"Keyboard F8"},
"Keyboard F9":{value:0x42,name:"Keyboard F9"},
"Keyboard F10":{value:0x43,name:"Keyboard F10"},
"Keyboard F11":{value:0x44,name:"Keyboard F11"},
"Keyboard F12":{value:0x45,name:"Keyboard F12"},
"Keyboard PrintScreen1":{value:0x46,name:"Keyboard PrintScreen1"},
"Keyboard Scroll Lock11":{value:0x47,name:"Keyboard Scroll Lock11"},
"Keyboard Pause1":{value:0x48,name:"Keyboard Pause1"},
"Keyboard Insert1":{value:0x49,name:"Keyboard Insert1"},
"Keyboard Home1":{value:0x4A,name:"Keyboard Home1"},
"Keyboard PageUp1":{value:0x4B,name:"Keyboard PageUp1"},
"Keyboard Delete Forward1;14":{value:0x4C,name:"Keyboard Delete Forward1;14"},
"Keyboard End1":{value:0x4D,name:"Keyboard End1"},
"Keyboard PageDown1":{value:0x4E,name:"Keyboard PageDown1"},
"Keyboard RightArrow1":{value:0x4F,name:"Keyboard RightArrow1"},
"Keyboard LeftArrow1":{value:0x50,name:"Keyboard LeftArrow1"},
"Keyboard DownArrow1":{value:0x51,name:"Keyboard DownArrow1"},
"Keyboard UpArrow1":{value:0x52,name:"Keyboard UpArrow1"},
"Keypad Num Lock and Clear11":{value:0x53,name:"Keypad Num Lock and Clear11"},
"Keypad /1":{value:0x54,name:"Keypad /1"},
"Keypad *":{value:0x55,name:"Keypad *"},
"Keypad -":{value:0x56,name:"Keypad -"},
"Keypad +":{value:0x57,name:"Keypad +"},
"Keypad ENTER5":{value:0x58,name:"Keypad ENTER5"},
"Keypad 1 and End":{value:0x59,name:"Keypad 1 and End"},
"Keypad 2 and Down Arrow":{value:0x5A,name:"Keypad 2 and Down Arrow"},
"Keypad 3 and PageDn":{value:0x5B,name:"Keypad 3 and PageDn"},
"Keypad 4 and Left Arrow":{value:0x5C,name:"Keypad 4 and Left Arrow"},
"Keypad 5":{value:0x5D,name:"Keypad 5"},
"Keypad 6 and Right Arrow":{value:0x5E,name:"Keypad 6 and Right Arrow"},
"Keypad 7 and Home":{value:0x5F,name:"Keypad 7 and Home"},
"Keypad 8 and Up Arrow":{value:0x60,name:"Keypad 8 and Up Arrow"},
"Keypad 9 and PageUp":{value:0x61,name:"Keypad 9 and PageUp"},
"Keypad 0 and Insert":{value:0x62,name:"Keypad 0 and Insert"},
"Keypad . and Delete":{value:0x63,name:"Keypad . and Delete"},
"Keyboard Non-US \ and |3;6":{value:0x64,name:"Keyboard Non-US \ and |3;6"},
"Keyboard Application10":{value:0x65,name:"Keyboard Application10"},
"Keyboard":{value:0x66,name:"Keyboard"},
"Keypad =":{value:0x67,name:"Keypad ="},
"Keyboard F13":{value:0x68,name:"Keyboard F13"},
"Keyboard F14":{value:0x69,name:"Keyboard F14"},
"Keyboard F15":{value:0x6A,name:"Keyboard F15"},
"Keyboard F16":{value:0x6B,name:"Keyboard F16"},
"Keyboard F17":{value:0x6C,name:"Keyboard F17"},
"Keyboard F18":{value:0x6D,name:"Keyboard F18"},
"Keyboard F19":{value:0x6E,name:"Keyboard F19"},
"Keyboard F20":{value:0x6F,name:"Keyboard F20"},
"Keyboard F21":{value:0x70,name:"Keyboard F21"},
"Keyboard F22":{value:0x71,name:"Keyboard F22"},
"Keyboard F23":{value:0x72,name:"Keyboard F23"},
"Keyboard F24":{value:0x73,name:"Keyboard F24"},
"Keyboard Execute":{value:0x74,name:"Keyboard Execute"},
"Keyboard Help":{value:0x75,name:"Keyboard Help"},
"Keyboard Menu":{value:0x76,name:"Keyboard Menu"},
"Keyboard Select":{value:0x77,name:"Keyboard Select"},
"Keyboard Stop":{value:0x78,name:"Keyboard Stop"},
"Keyboard Again":{value:0x79,name:"Keyboard Again"},
"Keyboard Undo":{value:0x7A,name:"Keyboard Undo"},
"Keyboard Cut":{value:0x7B,name:"Keyboard Cut"},
"Keyboard Copy":{value:0x7C,name:"Keyboard Copy"},
"Keyboard Paste":{value:0x7D,name:"Keyboard Paste"},
"Keyboard Find":{value:0x7E,name:"Keyboard Find"},
"Keyboard Mute":{value:0x7F,name:"Keyboard Mute"},
"Keyboard Volume Up":{value:0x80,name:"Keyboard Volume Up"},
"Keyboard Volume Down":{value:0x81,name:"Keyboard Volume Down"},
"Keyboard Locking Caps Lock12":{value:0x82,name:"Keyboard Locking Caps Lock12"},
"Keyboard Locking Num Lock12":{value:0x83,name:"Keyboard Locking Num Lock12"},
"Keyboard Locking Scroll Lock12":{value:0x84,name:"Keyboard Locking Scroll Lock12"},
"Keypad Comma27":{value:0x85,name:"Keypad Comma27"},
"Keypad Equal Sign29":{value:0x86,name:"Keypad Equal Sign29"},
"Keyboard International115,28":{value:0x87,name:"Keyboard International115,28"},
"Keyboard International216":{value:0x88,name:"Keyboard International216"},
"Keyboard International317":{value:0x89,name:"Keyboard International317"},
"Keyboard International418":{value:0x8A,name:"Keyboard International418"},
"Keyboard International519":{value:0x8B,name:"Keyboard International519"},
"Keyboard International620":{value:0x8C,name:"Keyboard International620"},
"Keyboard International721":{value:0x8D,name:"Keyboard International721"},
"Keyboard International822":{value:0x8E,name:"Keyboard International822"},
"Keyboard International922":{value:0x8F,name:"Keyboard International922"},
"Keyboard LANG125":{value:0x90,name:"Keyboard LANG125"},
"Keyboard LANG226":{value:0x91,name:"Keyboard LANG226"},
"Keyboard LANG330":{value:0x92,name:"Keyboard LANG330"},
"Keyboard LANG431":{value:0x93,name:"Keyboard LANG431"},
"Keyboard LANG532":{value:0x94,name:"Keyboard LANG532"},
"Keyboard LANG68":{value:0x95,name:"Keyboard LANG68"},
"Keyboard LANG78":{value:0x96,name:"Keyboard LANG78"},
"Keyboard LANG88":{value:0x97,name:"Keyboard LANG88"},
"Keyboard LANG98":{value:0x98,name:"Keyboard LANG98"},
"Keyboard Alternate Erase7":{value:0x99,name:"Keyboard Alternate Erase7"},
"Keyboard SysReq/Attention1":{value:0x9A,name:"Keyboard SysReq/Attention1"},
"Keyboard Cancel":{value:0x9B,name:"Keyboard Cancel"},
"Keyboard Clear":{value:0x9C,name:"Keyboard Clear"},
"Keyboard Prior":{value:0x9D,name:"Keyboard Prior"},
"Keyboard Return":{value:0x9E,name:"Keyboard Return"},
"Keyboard Separator":{value:0x9F,name:"Keyboard Separator"},
"Keyboard Out":{value:0xA0,name:"Keyboard Out"},
"Keyboard Oper":{value:0xA1,name:"Keyboard Oper"},
"Keyboard Clear/Again":{value:0xA2,name:"Keyboard Clear/Again"},
"Keyboard CrSel/Props":{value:0xA3,name:"Keyboard CrSel/Props"},
"Keyboard ExSel":{value:0xA4,name:"Keyboard ExSel"},
"reservedA5":{value:0xA5,name:"reserved"},
"reservedA6":{value:0xA6,name:"reserved"},
"reservedA7":{value:0xA7,name:"reserved"},
"reservedA8":{value:0xA8,name:"reserved"},
"reservedA9":{value:0xA9,name:"reserved"},
"reservedAA":{value:0xAA,name:"reserved"},
"reservedAB":{value:0xAB,name:"reserved"},
"reservedAC":{value:0xAC,name:"reserved"},
"reservedAD":{value:0xAD,name:"reserved"},
"reservedAE":{value:0xAE,name:"reserved"},
"reservedAF":{value:0xAF,name:"reserved"},
"Keypad 00":{value:0xB0,name:"Keypad 00"},
"Keypad 000":{value:0xB1,name:"Keypad 000"},
"Thousands Separator 33":{value:0xB2,name:"Thousands Separator 33"},
"Decimal Separator 33":{value:0xB3,name:"Decimal Separator 33"},
"Currency Unit 34":{value:0xB4,name:"Currency Unit 34"},
"Currency Sub-unit 34":{value:0xB5,name:"Currency Sub-unit 34"},
"Keypad (":{value:0xB6,name:"Keypad ("},
"Keypad )":{value:0xB7,name:"Keypad )"},
"Keypad {":{value:0xB8,name:"Keypad {"},
"Keypad }":{value:0xB9,name:"Keypad }"},
"Keypad Tab":{value:0xBA,name:"Keypad Tab"},
"Keypad Backspace":{value:0xBB,name:"Keypad Backspace"},
"Keypad A":{value:0xBC,name:"Keypad A"},
"Keypad B":{value:0xBD,name:"Keypad B"},
"Keypad C":{value:0xBE,name:"Keypad C"},
"Keypad D":{value:0xBF,name:"Keypad D"},
"Keypad E":{value:0xC0,name:"Keypad E"},
"Keypad F":{value:0xC1,name:"Keypad F"},
"Keypad XOR":{value:0xC2,name:"Keypad XOR"},
"Keypad ^":{value:0xC3,name:"Keypad ^"},
"Keypad %":{value:0xC4,name:"Keypad %"},
"Keypad <":{value:0xC5,name:"Keypad <"},
"Keypad >":{value:0xC6,name:"Keypad >"},
"Keypad &":{value:0xC7,name:"Keypad &"},
"Keypad &&":{value:0xC8,name:"Keypad &&"},
"Keypad |":{value:0xC9,name:"Keypad |"},
"Keypad ||":{value:0xCA,name:"Keypad ||"},
"Keypad :":{value:0xCB,name:"Keypad :"},
"Keypad #":{value:0xCC,name:"Keypad #"},
"Keypad Space":{value:0xCD,name:"Keypad Space"},
"Keypad @":{value:0xCE,name:"Keypad @"},
"Keypad !":{value:0xCF,name:"Keypad !"},
"Keypad Memory Store":{value:0xD0,name:"Keypad Memory Store"},
"Keypad Memory Recall":{value:0xD1,name:"Keypad Memory Recall"},
"Keypad Memory Clear":{value:0xD2,name:"Keypad Memory Clear"},
"Keypad Memory Add":{value:0xD3,name:"Keypad Memory Add"},
"Keypad Memory Subtract":{value:0xD4,name:"Keypad Memory Subtract"},
"Keypad Memory Multiply":{value:0xD5,name:"Keypad Memory Multiply"},
"Keypad Memory Divide":{value:0xD6,name:"Keypad Memory Divide"},
"Keypad +/-":{value:0xD7,name:"Keypad +/-"},
"Keypad Clear":{value:0xD8,name:"Keypad Clear"},
"Keypad Clear Entry":{value:0xD9,name:"Keypad Clear Entry"},
"Keypad Binary":{value:0xDA,name:"Keypad Binary"},
"Keypad Octal":{value:0xDB,name:"Keypad Octal"},
"Keypad Decimal":{value:0xDC,name:"Keypad Decimal"},
"Keypad Hexadecimal":{value:0xDD,name:"Keypad Hexadecimal"},
"Keyboard LeftControl":{value:0xE0,name:"Keyboard LeftControl"},
"Keyboard LeftShift":{value:0xE1,name:"Keyboard LeftShift"},
"Keyboard LeftAlt":{value:0xE2,name:"Keyboard LeftAlt"},
"Keyboard Left GUI10;23":{value:0xE3,name:"Keyboard Left GUI10;23"},
"Keyboard RightControl":{value:0xE4,name:"Keyboard RightControl"},
"Keyboard RightShift":{value:0xE5,name:"Keyboard RightShift"},
"Keyboard RightAlt":{value:0xE6,name:"Keyboard RightAlt"},
"Keyboard Right GUI10;24":{value:0xE7,name:"Keyboard Right GUI10;24"},
"MAX":{value:0xFF,name:"Max"}
}
var HIDUsageConsumer = {
	"Unassigned":{value:0x00,name:"Unassigned"},
	"Consumer Control":{value:0x01,name:"Consumer Control"},
	"Numeric Key Pad":{value:0x02,name:"Numeric Key Pad"},
	"Programmable Buttons":{value:0x03,name:"Programmable Buttons"},
	"Microphone":{value:0x04,name:"Microphone"},
	"Headphone":{value:0x05,name:"Headphone"},
	"Graphic Equalizer":{value:0x06,name:"Graphic Equalizer"},

	"+10":{value:0x20,name:"+10"},
	"+100":{value:0x21,name:"+100"},
	"AM/PM":{value:0x22,name:"AM/PM"},

	"Power":{value:0x30,name:"Power"},
	"Reset":{value:0x31,name:"Reset"},
	"Sleep":{value:0x32,name:"Sleep"},
	"Sleep After":{value:0x33,name:"Sleep After"},
	"Sleep Mode":{value:0x34,name:"Sleep Mode"},
	"Illumination":{value:0x35,name:"Illumination"},
	"Function Buttons":{value:0x36,name:"Function Buttons"},

	"Menu":{value:0x40,name:"Menu"},
	"Menu Pick":{value:0x41,name:"Menu Pick"},
	"Menu Up":{value:0x42,name:"Menu Up"},
	"Menu Down":{value:0x43,name:"Menu Down"},
	"Menu Left":{value:0x44,name:"Menu Left"},
	"Menu Right":{value:0x45,name:"Menu Right"},
	"Menu Escape":{value:0x46,name:"Menu Escape"},
	"Menu Value Increase":{value:0x47,name:"Menu Value Increase"},
	"Menu Value Decrease":{value:0x48,name:"Menu Value Decrease"},

	"Data On Screen":{value:0x60,name:"Data On Screen"},
	"Closed Caption":{value:0x61,name:"Closed Caption"},
	"Closed Caption Select":{value:0x62,name:"Closed Caption Select"},
	"VCR/TV":{value:0x63,name:"VCR/TV"},
"Broadcast Mode":{value:0x64,name:"Broadcast Mode"},
"Snapshot":{value:0x65,name:"Snapshot"},
"Still":{value:0x66,name:"Still"},

"Selection":{value:0x80,name:"Selection"},
"Assign Selection":{value:0x81,name:"Assign Selection"},
"Mode Step":{value:0x82,name:"Mode Step"},
"Recall Last":{value:0x83,name:"Recall Last"},
"Enter Channel":{value:0x84,name:"Enter Channel"},
"Order Movie":{value:0x85,name:"Order Movie"},
"Channel":{value:0x86,name:"Channel"},
"Media Selection":{value:0x87,name:"Media Selection"},
"Media Select Computer":{value:0x88,name:"Media Select Computer"},
"Media Select TV":{value:0x89,name:"Media Select TV"},
"Media Select WWW":{value:0x8A,name:"Media Select WWW"},
"Media Select DVD":{value:0x8B,name:"Media Select DVD"},
"Media Select Telephone":{value:0x8C,name:"Media Select Telephone"},
"Media Select Program Guide":{value:0x8D,name:"Media Select Program Guide"},
"Media Select Video Phone":{value:0x8E,name:"Media Select Video Phone"},
"Media Select Games":{value:0x8F,name:"Media Select Games"},
"Media Select Messages":{value:0x90,name:"Media Select Messages"},
"Media Select CD":{value:0x91,name:"Media Select CD"},
"Media Select VCR":{value:0x92,name:"Media Select VCR"},
"Media Select Tuner":{value:0x93,name:"Media Select Tuner"},
"Quit":{value:0x94,name:"Quit"},
"Help":{value:0x95,name:"Help"},
"Media Select Tape":{value:0x96,name:"Media Select Tape"},
"Media Select Cable":{value:0x97,name:"Media Select Cable"},
"Media Select Satellite":{value:0x98,name:"Media Select Satellite"},
"Media Select Security":{value:0x99,name:"Media Select Security"},
"Media Select Home":{value:0x9A,name:"Media Select Home"},
"Media Select Call":{value:0x9B,name:"Media Select Call"},
"Channel Increment":{value:0x9C,name:"Channel Increment"},
"Channel Decrement":{value:0x9D,name:"Channel Decrement"},
"Media Select SAP":{value:0x9E,name:"Media Select SAP"},

"VCR Plus":{value:0xA0,name:"VCR Plus"},
"Once":{value:0xA1,name:"Once"},
"Daily":{value:0xA2,name:"Daily"},
	"Weekly":{value:0xA3,name:"Weekly"},
	"Monthly":{value:0xA4,name:"Monthly"},

	"Play":{value:0xB0,name:"Play"},
	"Pause":{value:0xB1,name:"Pause"},
	"Record":{value:0xB2,name:"Record"},
	"Fast Forward":{value:0xB3,name:"Fast Forward"},
	"Rewind":{value:0xB4,name:"Rewind"},
	"Scan Next Track":{value:0xB5,name:"Scan Next Track"},
	"Scan Previous Track":{value:0xB6,name:"Scan Previous Track"},
	"Stop":{value:0xB7,name:"Stop"},
	"Eject":{value:0xB8,name:"Eject"},
	"Random Play":{value:0xB9,name:"Random Play"},
	"Select Disc":{value:0xBA,name:"Select Disc"},
	"Enter Disc":{value:0xBB,name:"Enter Disc"},
	"Repeat":{value:0xBC,name:"Repeat"},
	"Tracking":{value:0xBD,name:"Tracking"},
	"Track Normal":{value:0xBE,name:"Track Normal"},
	"Slow Tracking":{value:0xBF,name:"Slow Tracking"},
	"Frame Forward":{value:0xC0,name:"Frame Forward"},
	"Frame Back":{value:0xC1,name:"Frame Back"},
	"Mark":{value:0xC2,name:"Mark"},
	"Clear Mark":{value:0xC3,name:"Clear Mark"},
	"Repeat From Mark":{value:0xC4,name:"Repeat From Mark"},
	"Return To Mark":{value:0xC5,name:"Return To Mark"},
	"Search Mark Forward":{value:0xC6,name:"Search Mark Forward"},
	"Search Mark Backwards":{value:0xC7,name:"Search Mark Backwards"},
	"Counter Reset":{value:0xC8,name:"Counter Reset"},
	"Show Counter":{value:0xC9,name:"Show Counter"},
	"Tracking Increment":{value:0xCA,name:"Tracking Increment"},
	"Tracking Decrement":{value:0xCB,name:"Tracking Decrement"},
	"Stop/Eject":{value:0xCC,name:"Stop/Eject"},
	"Play/Pause":{value:0xCD,name:"Play/Pause"},
	"Play/Skip":{value:0xCE,name:"Play/Skip"},

	"Volume":{value:0xE0,name:"Volume"},
	"Balance":{value:0xE1,name:"Balance"},
	"Mute":{value:0xE2,name:"Mute"},
	"Bass":{value:0xE3,name:"Bass"},
"Treble":{value:0xE4,name:"Treble"},
"Bass Boost":{value:0xE5,name:"Bass Boost"},
"Surround Mode":{value:0xE6,name:"Surround Mode"},
"Loudness":{value:0xE7,name:"Loudness"},
"MPX":{value:0xE8,name:"MPX"},
"Volume Increment":{value:0xE9,name:"Volume Increment"},
"Volume Decrement":{value:0xEA,name:"Volume Decrement"},

"Speed Select":{value:0xF0,name:"Speed Select"},
"Playback Speed":{value:0xF1,name:"Playback Speed"},
"Standard Play":{value:0xF2,name:"Standard Play"},
"Long Play":{value:0xF3,name:"Long Play"},
"Extended Play":{value:0xF4,name:"Extended Play"},
"Slow":{value:0xF5,name:"Slow"},

"Fan Enable":{value:0x100,name:"Fan Enable"},
"Fan Speed":{value:0x101,name:"Fan Speed"},
"Light Enable":{value:0x102,name:"Light Enable"},
"Light Illumination Level":{value:0x103,name:"Light Illumination Level"},
"Climate Control Enable":{value:0x104,name:"Climate Control Enable"},
"Room Temperature":{value:0x105,name:"Room Temperature"},
"Security Enable":{value:0x106,name:"Security Enable"},
"Fire Alarm":{value:0x107,name:"Fire Alarm"},
"Police Alarm":{value:0x108,name:"Police Alarm"},
"Proximity":{value:0x109,name:"Proximity"},
"Motion":{value:0x10A,name:"Motion"},
"Duress Alarm":{value:0x10B,name:"Duress Alarm"},
"Holdup Alarm":{value:0x10C,name:"Holdup Alarm"},
"Medical Alarm":{value:0x10D,name:"Medical Alarm"},

"Balance Right":{value:0x150,name:"Balance Right"},
"Balance Left":{value:0x151,name:"Balance Left"},
"Bass Increment":{value:0x152,name:"Bass Increment"},
"Bass Decrement":{value:0x153,name:"Bass Decrement"},
"Treble Increment":{value:0x154,name:"Treble Increment"},
"Treble Decrement":{value:0x155,name:"Treble Decrement"},

"Speaker System":{value:0x160,name:"Speaker System"},
"Channel Left":{value:0x161,name:"Channel Left"},
	"Channel Right":{value:0x162,name:"Channel Right"},
	"Channel Center":{value:0x163,name:"Channel Center"},
	"Channel Front":{value:0x164,name:"Channel Front"},
	"Channel Center Front":{value:0x165,name:"Channel Center Front"},
	"Channel Side":{value:0x166,name:"Channel Side"},
	"Channel Surround":{value:0x167,name:"Channel Surround"},
	"Channel Low Frequency Enhancement":{value:0x168,name:"Channel Low Frequency Enhancement"},
	"Channel Top":{value:0x169,name:"Channel Top"},
	"Channel Unknown":{value:0x16A,name:"Channel Unknown"},

	"Sub-channel":{value:0x170,name:"Sub-channel"},
	"Sub-channel Increment":{value:0x171,name:"Sub-channel Increment"},
	"Sub-channel Decrement":{value:0x172,name:"Sub-channel Decrement"},
	"Alternate Audio Increment":{value:0x173,name:"Alternate Audio Increment"},
	"Alternate Audio Decrement":{value:0x174,name:"Alternate Audio Decrement"},

	"Application Launch Buttons":{value:0x180,name:"Application Launch Buttons"},
	"AL Launch Button Configuration Tool":{value:0x181,name:"AL Launch Button Configuration Tool"},
	"AL Programmable Button Configuration":{value:0x182,name:"AL Programmable Button Configuration"},
	"AL Consumer Control Configuration":{value:0x183,name:"AL Consumer Control Configuration"},
	"AL Word Processor":{value:0x184,name:"AL Word Processor"},
	"AL Text Editor":{value:0x185,name:"AL Text Editor"},
	"AL Spreadsheet":{value:0x186,name:"AL Spreadsheet"},
	"AL Graphics Editor":{value:0x187,name:"AL Graphics Editor"},
	"AL Presentation App":{value:0x188,name:"AL Presentation App"},
	"AL Database App":{value:0x189,name:"AL Database App"},
	"AL Email Reader":{value:0x18A,name:"AL Email Reader"},
	"AL Newsreader":{value:0x18B,name:"AL Newsreader"},
	"AL Voicemail":{value:0x18C,name:"AL Voicemail"},
	"AL Contacts/Address Book":{value:0x18D,name:"AL Contacts/Address Book"},
	"AL Calendar/Schedule":{value:0x18E,name:"AL Calendar/Schedule"},
	"AL Task/Project Manager":{value:0x18F,name:"AL Task/Project Manager"},
	"AL Log/Journal/Timecard":{value:0x190,name:"AL Log/Journal/Timecard"},
	"AL Checkbook/Finance":{value:0x191,name:"AL Checkbook/Finance"},
	"AL Calculator":{value:0x192,name:"AL Calculator"},
	"AL A/V Capture/Playback":{value:0x193,name:"AL A/V Capture/Playback"},
"AL Local Machine Browser":{value:0x194,name:"AL Local Machine Browser"},
"AL LAN/WAN Browser":{value:0x195,name:"AL LAN/WAN Browser"},
"AL Internet Browser":{value:0x196,name:"AL Internet Browser"},
"AL Remote Networking/ISP Connect":{value:0x197,name:"AL Remote Networking/ISP Connect"},
"AL Network Conference":{value:0x198,name:"AL Network Conference"},
"AL Network Chat":{value:0x199,name:"AL Network Chat"},
"AL Telephony/Dialer":{value:0x19A,name:"AL Telephony/Dialer"},
"AL Logon":{value:0x19B,name:"AL Logon"},
"AL Logoff":{value:0x19C,name:"AL Logoff"},
"AL Logon/Logoff":{value:0x19D,name:"AL Logon/Logoff"},
"AL Terminal Lock/Screensaver":{value:0x19E,name:"AL Terminal Lock/Screensaver"},
"AL Control Panel":{value:0x19F,name:"AL Control Panel"},
"AL Command Line Processor/Run":{value:0x1A0,name:"AL Command Line Processor/Run"},
"AL Process/Task Manager":{value:0x1A1,name:"AL Process/Task Manager"},
"AL Select Task/Application":{value:0x1A2,name:"AL Select Task/Application"},
"AL Next Task/Application":{value:0x1A3,name:"AL Next Task/Application"},
"AL Previous Task/Application":{value:0x1A4,name:"AL Previous Task/Application"},
"AL Preemptive Halt Task/Application":{value:0x1A5,name:"AL Preemptive Halt Task/Application"},
"AL Integrated Help Center":{value:0x1A6,name:"AL Integrated Help Center"},
"AL Documents":{value:0x1A7,name:"AL Documents"},
"AL Thesaurus":{value:0x1A8,name:"AL Thesaurus"},
"AL Dictionary":{value:0x1A9,name:"AL Dictionary"},
"AL Desktop":{value:0x1AA,name:"AL Desktop"},
"AL Spell Check":{value:0x1AB,name:"AL Spell Check"},
"AL Grammar Check":{value:0x1AC,name:"AL Grammar Check"},
"AL Wireless Status":{value:0x1AD,name:"AL Wireless Status"},
"AL Keyboard Layout":{value:0x1AE,name:"AL Keyboard Layout"},
"AL Virus Protection":{value:0x1AF,name:"AL Virus Protection"},
"AL Encryption":{value:0x1B0,name:"AL Encryption"},
"AL Screen Saver":{value:0x1B1,name:"AL Screen Saver"},
"AL Alarms":{value:0x1B2,name:"AL Alarms"},
"AL Clock":{value:0x1B3,name:"AL Clock"},
"AL File Browser":{value:0x1B4,name:"AL File Browser"},
"AL Power Status":{value:0x1B5,name:"AL Power Status"},
"AL Image Browser":{value:0x1B6,name:"AL Image Browser"},
"AL Audio Browser":{value:0x1B7,name:"AL Audio Browser"},
"AL Movie Browser":{value:0x1B8,name:"AL Movie Browser"},
"AL Digital Rights Manager":{value:0x1B9,name:"AL Digital Rights Manager"},
	"AL Digital Wallet":{value:0x1BA,name:"AL Digital Wallet"},

	"AL Instant Messaging":{value:0x1BC,name:"AL Instant Messaging"},
	"AL OEM Features/ Tips/Tutorial Browser":{value:0x1BD,name:"AL OEM Features/ Tips/Tutorial Browser"},
	"AL OEM Help":{value:0x1BE,name:"AL OEM Help"},
	"AL Online Community":{value:0x1BF,name:"AL Online Community"},
	"AL Entertainment Content Browser":{value:0x1C0,name:"AL Entertainment Content Browser"},
	"AL Online Shopping Browser":{value:0x1C1,name:"AL Online Shopping Browser"},
	"AL SmartCard Information/Help":{value:0x1C2,name:"AL SmartCard Information/Help"},
	"AL Market Monitor/Finance Browser":{value:0x1C3,name:"AL Market Monitor/Finance Browser"},
	"AL Customized Corporate News Browser":{value:0x1C4,name:"AL Customized Corporate News Browser"},
	"AL Online Activity Browser":{value:0x1C5,name:"AL Online Activity Browser"},
	"AL Research/Search Browser":{value:0x1C6,name:"AL Research/Search Browser"},
	"AL Audio Player":{value:0x1C7,name:"AL Audio Player"},

	"Generic GUI Application Controls":{value:0x200,name:"Generic GUI Application Controls"},
	"AC New":{value:0x201,name:"AC New"},
	"AC Open":{value:0x202,name:"AC Open"},
	"AC Close":{value:0x203,name:"AC Close"},
	"AC Exit":{value:0x204,name:"AC Exit"},
	"AC Maximize":{value:0x205,name:"AC Maximize"},
	"AC Minimize":{value:0x206,name:"AC Minimize"},
	"AC Save":{value:0x207,name:"AC Save"},
	"AC Print":{value:0x208,name:"AC Print"},
	"AC Properties":{value:0x209,name:"AC Properties"},
	"AC Undo":{value:0x21A,name:"AC Undo"},
	"AC Copy":{value:0x21B,name:"AC Copy"},
	"AC Cut":{value:0x21C,name:"AC Cut"},
	"AC Paste":{value:0x21D,name:"AC Paste"},
	"AC Select All":{value:0x21E,name:"AC Select All"},
	"AC Find":{value:0x21F,name:"AC Find"},
	"AC Find and Replace":{value:0x220,name:"AC Find and Replace"},
	"AC Search":{value:0x221,name:"AC Search"},
	"AC Go To":{value:0x222,name:"AC Go To"},
	"AC Home":{value:0x223,name:"AC Home"},
	"AC Back":{value:0x224,name:"AC Back"},
"AC Forward":{value:0x225,name:"AC Forward"},
"AC Stop":{value:0x226,name:"AC Stop"},
"AC Refresh":{value:0x227,name:"AC Refresh"},
"AC Previous Link":{value:0x228,name:"AC Previous Link"},
"AC Next Link":{value:0x229,name:"AC Next Link"},
"AC Bookmarks":{value:0x22A,name:"AC Bookmarks"},
"AC History":{value:0x22B,name:"AC History"},
"AC Subscriptions":{value:0x22C,name:"AC Subscriptions"},
"AC Zoom In":{value:0x22D,name:"AC Zoom In"},
"AC Zoom Out":{value:0x22E,name:"AC Zoom Out"},
"AC Zoom":{value:0x22F,name:"AC Zoom"},
"AC Full Screen View":{value:0x230,name:"AC Full Screen View"},
"AC Normal View":{value:0x231,name:"AC Normal View"},
"AC View Toggle":{value:0x232,name:"AC View Toggle"},
"AC Scroll Up":{value:0x233,name:"AC Scroll Up"},
"AC Scroll Down":{value:0x234,name:"AC Scroll Down"},
"AC Scroll":{value:0x235,name:"AC Scroll"},
"AC Pan Left":{value:0x236,name:"AC Pan Left"},
"AC Pan Right":{value:0x237,name:"AC Pan Right"},
"AC Pan":{value:0x238,name:"AC Pan"},
"AC New Window":{value:0x239,name:"AC New Window"},
"AC Tile Horizontally":{value:0x23A,name:"AC Tile Horizontally"},
"AC Tile Vertically":{value:0x23B,name:"AC Tile Vertically"},
"AC Format":{value:0x23C,name:"AC Format"},
"AC Edit":{value:0x23D,name:"AC Edit"},
"AC Bold":{value:0x23E,name:"AC Bold"},
"AC Italics":{value:0x23F,name:"AC Italics"},
"AC Underline":{value:0x240,name:"AC Underline"},
"AC Strikethrough":{value:0x241,name:"AC Strikethrough"},
"AC Subscript":{value:0x242,name:"AC Subscript"},
"AC Superscript":{value:0x243,name:"AC Superscript"},
"AC All Caps":{value:0x244,name:"AC All Caps"},
"AC Rotate":{value:0x245,name:"AC Rotate"},
"AC Resize":{value:0x246,name:"AC Resize"},
"AC Flip horizontal":{value:0x247,name:"AC Flip horizontal"},
"AC Flip Vertical":{value:0x248,name:"AC Flip Vertical"},
"AC Mirror Horizontal":{value:0x249,name:"AC Mirror Horizontal"},
"AC Mirror Vertical":{value:0x24A,name:"AC Mirror Vertical"},
"AC Font Select":{value:0x24B,name:"AC Font Select"},
	"AC Font Color":{value:0x24C,name:"AC Font Color"},
	"AC Font Size":{value:0x24D,name:"AC Font Size"},
	"AC Justify Left":{value:0x24E,name:"AC Justify Left"},
	"AC Justify Center H":{value:0x24F,name:"AC Justify Center H"},
	"AC Justify Right":{value:0x250,name:"AC Justify Right"},
	"AC Justify Block H":{value:0x251,name:"AC Justify Block H"},
	"AC Justify Top":{value:0x252,name:"AC Justify Top"},
	"AC Justify Center V":{value:0x253,name:"AC Justify Center V"},
	"AC Justify Bottom":{value:0x254,name:"AC Justify Bottom"},
	"AC Justify Block V":{value:0x255,name:"AC Justify Block V"},
	"AC Indent Decrease":{value:0x256,name:"AC Indent Decrease"},
	"AC Indent Increase":{value:0x257,name:"AC Indent Increase"},
	"AC Numbered List":{value:0x258,name:"AC Numbered List"},
	"AC Restart Numbering":{value:0x259,name:"AC Restart Numbering"},
	"AC Bulleted List":{value:0x25A,name:"AC Bulleted List"},
	"AC Promote":{value:0x25B,name:"AC Promote"},
	"AC Demote":{value:0x25C,name:"AC Demote"},
	"AC Yes":{value:0x25D,name:"AC Yes"},
	"AC No":{value:0x25E,name:"AC No"},
	"AC Cancel":{value:0x25F,name:"AC Cancel"},
	"AC Catalog":{value:0x260,name:"AC Catalog"},
	"AC Buy/Checkout":{value:0x261,name:"AC Buy/Checkout"},
	"AC Add to Cart":{value:0x262,name:"AC Add to Cart"},
	"AC Expand":{value:0x263,name:"AC Expand"},
	"AC Expand All":{value:0x264,name:"AC Expand All"},
	"AC Collapse":{value:0x265,name:"AC Collapse"},
	"AC Collapse All":{value:0x266,name:"AC Collapse All"},
	"AC Print Preview":{value:0x267,name:"AC Print Preview"},
	"AC Paste Special":{value:0x268,name:"AC Paste Special"},
	"AC Insert Mode":{value:0x269,name:"AC Insert Mode"},
	"AC Delete":{value:0x26A,name:"AC Delete"},
	"AC Lock":{value:0x26B,name:"AC Lock"},
	"AC Unlock":{value:0x26C,name:"AC Unlock"},
	"AC Protect":{value:0x26D,name:"AC Protect"},
	"AC Unprotect":{value:0x26E,name:"AC Unprotect"},
	"AC Attach Comment":{value:0x26F,name:"AC Attach Comment"},
	"AC Delete Comment":{value:0x270,name:"AC Delete Comment"},
	"AC View Comment":{value:0x271,name:"AC View Comment"},
	"AC Select Word":{value:0x272,name:"AC Select Word"},
	"AC Select Sentence":{value:0x273,name:"AC Select Sentence"},
"AC Select Paragraph":{value:0x274,name:"AC Select Paragraph"},
"AC Select Column":{value:0x275,name:"AC Select Column"},
"AC Select Row":{value:0x276,name:"AC Select Row"},
"AC Select Table":{value:0x277,name:"AC Select Table"},
"AC Select Object":{value:0x278,name:"AC Select Object"},
"AC Redo/Repeat":{value:0x279,name:"AC Redo/Repeat"},
"AC Sort":{value:0x27A,name:"AC Sort"},
"AC Sort Ascending":{value:0x27B,name:"AC Sort Ascending"},
"AC Sort Descending":{value:0x27C,name:"AC Sort Descending"},
"AC Filter":{value:0x27D,name:"AC Filter"},
"AC Set Clock":{value:0x27E,name:"AC Set Clock"},
"AC View Clock":{value:0x27F,name:"AC View Clock"},
"AC Select Time Zone":{value:0x280,name:"AC Select Time Zone"},
"AC Edit Time Zones":{value:0x281,name:"AC Edit Time Zones"},
"AC Set Alarm":{value:0x282,name:"AC Set Alarm"},
"AC Clear Alarm":{value:0x283,name:"AC Clear Alarm"},
"AC Snooze Alarm":{value:0x284,name:"AC Snooze Alarm"},
"AC Reset Alarm":{value:0x285,name:"AC Reset Alarm"},
"AC Synchronize":{value:0x286,name:"AC Synchronize"},
"AC Send/Receive":{value:0x287,name:"AC Send/Receive"},
"AC Send To":{value:0x288,name:"AC Send To"},
"AC Reply":{value:0x289,name:"AC Reply"},
"AC Reply All":{value:0x28A,name:"AC Reply All"},
"AC Forward Msg":{value:0x28B,name:"AC Forward Msg"},
"AC Send":{value:0x28C,name:"AC Send"},
"AC Attach File":{value:0x28D,name:"AC Attach File"},
"AC Upload":{value:0x28E,name:"AC Upload"},
"AC Download (Save Target As)":{value:0x28F,name:"AC Download (Save Target As)"},
"AC Set Borders":{value:0x290,name:"AC Set Borders"},
"AC Insert Row":{value:0x291,name:"AC Insert Row"},
"AC Insert Column":{value:0x292,name:"AC Insert Column"},
"AC Insert File":{value:0x293,name:"AC Insert File"},
"AC Insert Picture":{value:0x294,name:"AC Insert Picture"},
"AC Insert Object":{value:0x295,name:"AC Insert Object"},
"AC Insert Symbol":{value:0x296,name:"AC Insert Symbol"},
"AC Save and Close":{value:0x297,name:"AC Save and Close"},
"AC Rename":{value:0x298,name:"AC Rename"},
"AC Merge":{value:0x299,name:"AC Merge"},
"AC Split":{value:0x29A,name:"AC Split"},
"AC Disribute Horizontally":{value:0x29B,name:"AC Disribute Horizontally"},
	"AC Distribute Vertically":{value:0x29C,name:"AC Distribute Vertically"},
	name:"HIDUsageConsumer"
};
var HIDUsageDigitizer = {
   "Undefined":{value:0x00,name:"Undefined"},
	"Digitizer":{value:0x01,name:"Digitizer"},
	"Pen":{value:0x02,name:"Pen"},
	"Light Pen":{value:0x03,name:"Light Pen"},
	"Touch Screen":{value:0x04,name:"Touch Screen"},
	"Touch Pad":{value:0x05,name:"Touch Pad"},
	"White Board":{value:0x06,name:"White Board"},
	"Coordinate Measuring Machine":{value:0x07,name:"Coordinate Measuring Machine"},
	"3D Digitizer":{value:0x08,name:"3D Digitizer"},
	"Stereo Plotter":{value:0x09,name:"Stereo Plotter"},
	"Articulated Arm":{value:0x0A,name:"Articulated Arm"},
	"Armature":{value:0x0B,name:"Armature"},
	"Multiple Point Digitizer":{value:0x0C,name:"Multiple Point Digitizer"},
	"Free Space Wand":{value:0x0D,name:"Free Space Wand"},
	"Stylus":{value:0x20,name:"Stylus"},
	"Puck":{value:0x21,name:"Puck"},
	"Finger":{value:0x22,name:"Finger"},
	"Tip Pressure":{value:0x30,name:"Tip Pressure"},
	"Barrel Pressure":{value:0x31,name:"Barrel Pressure"},
	"In Range":{value:0x32,name:"In Range"},
	"Touch":{value:0x33,name:"Touch"},
	"Untouch":{value:0x34,name:"Untouch"},
	"Tap":{value:0x35,name:"Tap"},
	"Quality":{value:0x36,name:"Quality"},
	"Data Valid":{value:0x37,name:"Data Valid"},
	"Transducer Index":{value:0x38,name:"Transducer Index"},
	"Tablet Function Keys":{value:0x39,name:"Tablet Function Keys"},
	"Program Change Keys":{value:0x3A,name:"Program Change Keys"},
	"Battery Strength":{value:0x3B,name:"Battery Strength"},
	"Invert":{value:0x3C,name:"Invert"},
	"X Tilt":{value:0x3D,name:"X Tilt"},
	"Y Tilt":{value:0x3E,name:"Y Tilt"},
	"Azimuth":{value:0x3F,name:"Azimuth"},
	"Altitude":{value:0x40,name:"Altitude"},
	"Twist":{value:0x41,name:"Twist"},
	"Tip Switch":{value:0x42,name:"Tip Switch"},
	"Secondary Tip Switch":{value:0x43,name:"Secondary Tip Switch"},
	"Barrel Switch":{value:0x44,name:"Barrel Switch"},
	"Eraser":{value:0x45,name:"Eraser"},
	"Tablet Pick":{value:0x46,name:"Tablet Pick"},
	"Contact Identifier":{value:0x51,name:"Contact Identifier"},
	"Device configuration":{value:0x0E,name:"Device configuration"},
	"Device mode":{value:0x52,name:"Device mode"},
	"Device identifier":{value:0x53,name:"Device identifier"},
	"Contact count":{value:0x54,name:"Contact count"},
	"Contact count maximum":{value:0x55,name:"Contact count maximum"},
	"Device settings":{value:0x23,name:"Device settings"},
	name:"HIDUsageDigitizer"
};

var HIDUsageSport = {
name:"HIDUsageSport",
"Unidentified":{value:0x00,name:"Unidentified"},
"Baseball Bat":{value:0x01,name:"Baseball Bat"},
"Golf Club":{value:0x02,name:"Golf Club"},
"Rowing Machine":{value:0x03,name:"Rowing Machine"},
"Treadmill":{value:0x04,name:"Treadmill"},
"Oar":{value:0x30,name:"Oar"},
"Slope":{value:0x31,name:"Slope"},
"Rate":{value:0x32,name:"Rate"},
"Stick Speed":{value:0x33,name:"Stick Speed"},
"Stick Face Angle":{value:0x34,name:"Stick Face Angle"},
"Stick Heel/Toe":{value:0x35,name:"Stick Heel/Toe"},
"Stick Follow Through":{value:0x36,name:"Stick Follow Through"},
"Stick Tempo":{value:0x37,name:"Stick Tempo"},
"Stick Type	NAry":{value:0x38,name:"Stick Type	NAry"},
"Stick Height":{value:0x39,name:"Stick Height"},
"Putter	Sel":{value:0x50,name:"Putter	Sel"},
"1 Iron	Sel":{value:0x51,name:"1 Iron	Sel"},
"2 Iron	Sel":{value:0x52,name:"2 Iron	Sel"},
"3 Iron	Sel":{value:0x53,name:"3 Iron	Sel"},
"4 Iron	Sel":{value:0x54,name:"4 Iron	Sel"},
"5 Iron	Sel":{value:0x55,name:"5 Iron	Sel"},
"6 Iron	Sel":{value:0x56,name:"6 Iron	Sel"},
"7 Iron	Sel":{value:0x57,name:"7 Iron	Sel"},
"8 Iron	Sel":{value:0x58,name:"8 Iron	Sel"},
"9 Iron	Sel":{value:0x59,name:"9 Iron	Sel"},
"10 Iron	Sel":{value:0x5A,name:"10 Iron	Sel"},
"11 Iron	Sel":{value:0x5B,name:"11 Iron	Sel"},
"Sand Wedge	Sel":{value:0x5C,name:"Sand Wedge	Sel"},
"Loft Wedge	Sel":{value:0x5D,name:"Loft Wedge	Sel"},
"Power Wedge	Sel":{value:0x5E,name:"Power Wedge	Sel"},
"1 Wood	Sel":{value:0x5F,name:"1 Wood	Sel"},
"3 Wood	Sel":{value:0x60,name:"3 Wood	Sel"},
"5 Wood	Sel":{value:0x61,name:"5 Wood	Sel"},
"7 Wood	Sel":{value:0x62,name:"7 Wood	Sel"},
"9 Wood	Sel":{value:0x63,name:"9 Wood	Sel"},
};

var HIDUsageGame = {
name:"HIDUsageGame",
"Undefined":{value:0x00,name:"Undefined"},
"3D Game Controller":{value:0x01,name:"3D Game Controller"},
"Pinball Device":{value:0x02,name:"Pinball Device"},
"Gun Device":{value:0x03,name:"Gun Device"},
"Point of View	CP":{value:0x20,name:"Point of View	CP"},
"Turn Right/Left":{value:0x21,name:"Turn Right/Left"},
"Pitch Forward/Backward":{value:0x22,name:"Pitch Forward/Backward"},
"Roll Right/Left":{value:0x23,name:"Roll Right/Left"},
"Move Right/Left":{value:0x24,name:"Move Right/Left"},
"Move Forward/Backward":{value:0x25,name:"Move Forward/Backward"},
"Move Up/Down":{value:0x26,name:"Move Up/Down"},
"Lean Right/Left":{value:0x27,name:"Lean Right/Left"},
"Lean Forward/Backward":{value:0x28,name:"Lean Forward/Backward"},
"Height of POV":{value:0x29,name:"Height of POV"},
"Flipper	MC":{value:0x2A,name:"Flipper	MC"},
"Secondary Flipper	MC":{value:0x2B,name:"Secondary Flipper	MC"},
"Bump	MC":{value:0x2C,name:"Bump	MC"},
"New Game	OSC":{value:0x2D,name:"New Game	OSC"},
"Shoot Ball	OSC":{value:0x2E,name:"Shoot Ball	OSC"},
"Player	OSC":{value:0x2F,name:"Player	OSC"},
"Gun Bolt	OOC":{value:0x30,name:"Gun Bolt	OOC"},
"Gun Clip	OOC":{value:0x31,name:"Gun Clip	OOC"},
"Gun Selector	NAry":{value:0x32,name:"Gun Selector	NAry"},
"Gun Single Shot	Sel":{value:0x33,name:"Gun Single Shot	Sel"},
"Gun Burst	Sel":{value:0x34,name:"Gun Burst	Sel"},
"Gun Automatic	Sel":{value:0x35,name:"Gun Automatic	Sel"},
"Gun Safety	OOC":{value:0x36,name:"Gun Safety	OOC"},
"Gamepad Fire/Jump	CL":{value:0x37,name:"Gamepad Fire/Jump	CL"},
"Gamepad Trigger	CL":{value:0x39,name:"Gamepad Trigger	CL"},
};

var HIDUsageOrdinal = {
name:"HIDUsageOrdinal",
"Reserved":{value:0x00,name:"Reserved"},
"Instance 1	UM":{value:0x01,name:"Instance 1	UM"},
"Instance 2	UM":{value:0x02,name:"Instance 2	UM"},
"Instance 3	UM":{value:0x03,name:"Instance 3	UM"},
"Instance 4	UM":{value:0x04,name:"Instance 4	UM"},
};

var HIDUsageTelephony = {
name:"HIDUsageTelephony",
"Reserved":{value:0x00,name:"Reserved"},
"Instance 1":{value:0x01,name:"Instance 1"},
"Instance 2":{value:0x02,name:"Instance 2"},
"Instance 3":{value:0x03,name:"Instance 3"},
"Instance 4":{value:0x04,name:"Instance 4"},
"Phone":{value:0x01,name:"Phone"},
"Answering Machine":{value:0x02,name:"Answering Machine"},
"Message Controls":{value:0x03,name:"Message Controls"},
"Handset":{value:0x04,name:"Handset"},
"Headset":{value:0x05,name:"Headset"},
"Telephony Key Pad":{value:0x06,name:"Telephony Key Pad"},
"Programmable Button":{value:0x07,name:"Programmable Button"},
"Hook Switch":{value:0x20,name:"Hook Switch"},
"Flash":{value:0x21,name:"Flash"},
"Feature":{value:0x22,name:"Feature"},
"Hold":{value:0x23,name:"Hold"},
"Redial":{value:0x24,name:"Redial"},
"Transfer":{value:0x25,name:"Transfer"},
"Drop":{value:0x26,name:"Drop"},
"Park":{value:0x27,name:"Park"},
"Forward Calls":{value:0x28,name:"Forward Calls"},
"Alternate Function":{value:0x29,name:"Alternate Function"},
"Line":{value:0x2A,name:"Line"},
"Speaker Phone":{value:0x2B,name:"Speaker Phone"},
"Conference":{value:0x2C,name:"Conference"},
"Ring Enable":{value:0x2D,name:"Ring Enable"},
"Ring Select":{value:0x2E,name:"Ring Select"},
"Phone Mute":{value:0x2F,name:"Phone Mute"},
"Caller ID":{value:0x30,name:"Caller ID"},
"Send":{value:0x31,name:"Send"},
"Speed Dial":{value:0x50,name:"Speed Dial"},
"Store Number":{value:0x51,name:"Store Number"},
"Recall Number":{value:0x52,name:"Recall Number"},
"Phone Directory":{value:0x53,name:"Phone Directory"},
"Voice Mail":{value:0x70,name:"Voice Mail"},
"Screen Calls":{value:0x71,name:"Screen Calls"},
"Do Not Disturb":{value:0x72,name:"Do Not Disturb"},
"Message":{value:0x73,name:"Message"},
"Answer On/Off":{value:0x74,name:"Answer On/Off"},
"Inside Dial Tone":{value:0x90,name:"Inside Dial Tone"},
"Outside Dial Tone":{value:0x91,name:"Outside Dial Tone"},
"Inside Ring Tone":{value:0x92,name:"Inside Ring Tone"},
"Outside Ring Tone":{value:0x93,name:"Outside Ring Tone"},
"Priority Ring Tone":{value:0x94,name:"Priority Ring Tone"},
"Inside Ringback":{value:0x95,name:"Inside Ringback"},
"Priority Ringback":{value:0x96,name:"Priority Ringback"},
"Line Busy Tone":{value:0x97,name:"Line Busy Tone"},
"Reorder Tone":{value:0x98,name:"Reorder Tone"},
"Call Waiting Tone":{value:0x99,name:"Call Waiting Tone"},
"Confirmation Tone 1":{value:0x9A,name:"Confirmation Tone 1"},
"Confirmation Tone 2":{value:0x9B,name:"Confirmation Tone 2"},
"Tones Off":{value:0x9C,name:"Tones Off"},
"Outside Ringback":{value:0x9D,name:"Outside Ringback"},
"Ringer":{value:0x9E,name:"Ringer"},
"Phone Key 0":{value:0xB0,name:"Phone Key 0"},
"Phone Key 1":{value:0xB1,name:"Phone Key 1"},
"Phone Key 2":{value:0xB2,name:"Phone Key 2"},
"Phone Key 3":{value:0xB3,name:"Phone Key 3"},
"Phone Key 4":{value:0xB4,name:"Phone Key 4"},
"Phone Key 5":{value:0xB5,name:"Phone Key 5"},
"Phone Key 6":{value:0xB6,name:"Phone Key 6"},
"Phone Key 7":{value:0xB7,name:"Phone Key 7"},
"Phone Key 8":{value:0xB8,name:"Phone Key 8"},
"Phone Key 9":{value:0xB9,name:"Phone Key 9"},
"Phone Key Star":{value:0xBA,name:"Phone Key Star"},
"Phone Key Pound":{value:0xBB,name:"Phone Key Pound"},
"Phone Key A":{value:0xBC,name:"Phone Key A"},
"Phone Key B":{value:0xBD,name:"Phone Key B"},
"Phone Key C":{value:0xBE,name:"Phone Key C"},
"Phone Key D":{value:0xBF,name:"Phone Key D"},
};

var HIDUsageMedical = {
name:"HIDUsageMedical",
"Undefined":{value:0x00,name:"Undefined"},
"Medical Ultrasound":{value:0x01,name:"Medical Ultrasound"},
"VCR/Acquisition":{value:0x20,name:"VCR/Acquisition"},
"Freeze/Thaw":{value:0x21,name:"Freeze/Thaw"},
"Clip Store":{value:0x22,name:"Clip Store"},
"Update":{value:0x23,name:"Update"},
"Next":{value:0x24,name:"Next"},
"Save":{value:0x25,name:"Save"},
"Print":{value:0x26,name:"Print"},
"Microphone Enable":{value:0x27,name:"Microphone Enable"},
"Cine":{value:0x40,name:"Cine"},
"Transmit Power":{value:0x41,name:"Transmit Power"},
"Volume":{value:0x42,name:"Volume"},
"Focus":{value:0x43,name:"Focus"},
"Depth":{value:0x44,name:"Depth"},
"Soft Step - Primary":{value:0x60,name:"Soft Step - Primary"},
"Soft Step - Secondary":{value:0x61,name:"Soft Step - Secondary"},
"Depth Gain Compensation":{value:0x70,name:"Depth Gain Compensation"},
"Zoom Select":{value:0x80,name:"Zoom Select"},
"Zoom Adjust":{value:0x81,name:"Zoom Adjust"},
"Spectral Doppler Mode Select":{value:0x82,name:"Spectral Doppler Mode Select"},
"Spectral Doppler Adjust":{value:0x83,name:"Spectral Doppler Adjust"},
"Color Doppler Mode Select":{value:0x84,name:"Color Doppler Mode Select"},
"Color Doppler Adjust":{value:0x85,name:"Color Doppler Adjust"},
"Motion Mode Select":{value:0x86,name:"Motion Mode Select"},
"Motion Mode Adjust":{value:0x87,name:"Motion Mode Adjust"},
"2-D Mode Select":{value:0x88,name:"2-D Mode Select"},
"2-D Mode Adjust":{value:0x89,name:"2-D Mode Adjust"},
"Soft Control Select":{value:0xA0,name:"Soft Control Select"},
"Soft Control Adjust":{value:0xA1,name:"Soft Control Adjust"},
};

var HIDUsagePage = {
    Undefined:              { value: 0x00, usage: null, name: "Undefined" },
    GenericDesktop:         { value: 0x01, usage: HIDUsageGenericDesktop, name: "Generic Desktop" },
    Simulation:             { value: 0x02, usage: HIDUsageSimulation, name: "Simulation" },
    VirtualReality:         { value: 0x03, usage: null, name: "Virtual Reality" },
    Sport:                  { value: 0x04, usage: HIDUsageSport, name: "Sport" },
    Game:                   { value: 0x05, usage: HIDUsageGame, name: "Game" },
    GenericDevice:          { value: 0x06, usage: HIDUsageGenericDevice, name: "Generic Device" },
    Keyboard:               { value: 0x07, usage: HIDUsageKeypad, name: "Keyboard/Keypad" },
    LED:                    { value: 0x08, usage: HIDUsageLED, name: "LEDs" },
    Button:                 { value: 0x09, usage: HIDUsageButton, name: "Button" },
    Ordinal:                { value: 0x0A, usage: HIDUsageOrdinal, name: "Ordinal" },
    Telephony:              { value: 0x0B, usage: HIDUsageTelephony, name: "Telephony" },
    Consumer:               { value: 0x0C, usage: HIDUsageConsumer, name: "Consumer" },
    Digitizer:              { value: 0x0D, usage: HIDUsageDigitizer, name: "Digitizer" },
    PID:                    { value: 0x0F, usage: null, name: "PID Page" },
    Unicode:                { value: 0x10, usage: null, name: "Unicode" },
    AlphanumericDisplay:    { value: 0x14, usage: null, name: "Alphanumeric Display" },
    Medical:                { value: 0x40, usage: HIDUsageMedical, name: "Medical Instruments" },
    Monitor:                { value: [0x80, 0x83], usage: null, name: "Monitor" },
    Power:                  { value: [0x84, 0x87], usage: null, name: "Power" },
    BarCodeScanner:         { value: 0x8C, usage: null, name: "Bar Code Scanner" },
    Scale:                  { value: 0x8D, usage: null, name: "Scale" },
    MagStripeReader:        { value: 0x8E, usage: null, name: "Magnetic Stripe Reading" },
    PointOfSale:            { value: 0x8F, usage: null, name: "Reserved Point of Sale" },
    Camera:                 { value: 0x90, usage: null, name: "Camera" },
    VendorDefined00FF:          { value: 0x00FF, usage: HIDUsageVendor, name: "Vendor Defined" },
    VendorDefinedFF00:          { value: 0xFF00, usage: HIDUsageVendor, name: "Vendor Defined" },
    name: "HIDUsagePage"
};


/*
4. Sports Controls
Usage ID	Usage Name	Usage Type	Section	
00	Unidentified	
01	Baseball Bat	CA	7.1	
02	Golf Club	CA	7.1	
03	Rowing Machine	CA	7.2	
04	Treadmill	CA	7.2	
05-2F	Reserved	
30	Oar	DV	7.2	
31	Slope	DV	7.2	
32	Rate	DV	7.2	
33	Stick Speed	DV	7.1	
34	Stick Face Angle	DV	7.1	
35	Stick Heel/Toe	DV	7.1	
36	Stick Follow Through	DV	7.1	
37	Stick Tempo	DV	7.1	
38	Stick Type	NAry	7.1	
39	Stick Height	DV	7.1	
3A-4F	Reserved	
50	Putter	Sel	7.1	
51	1 Iron	Sel	7.1	
52	2 Iron	Sel	7.1	
53	3 Iron	Sel	7.1	
54	4 Iron	Sel	7.1	
55	5 Iron	Sel	7.1	
56	6 Iron	Sel	7.1	
57	7 Iron	Sel	7.1	
58	8 Iron	Sel	7.1	
59	9 Iron	Sel	7.1	
5A	10 Iron	Sel	7.1	
5B	11 Iron	Sel	7.1	
5C	Sand Wedge	Sel	7.1	
5D	Loft Wedge	Sel	7.1	
5E	Power Wedge	Sel	7.1	
5F	1 Wood	Sel	7.1	
60	3 Wood	Sel	7.1	
61	5 Wood	Sel	7.1	
62	7 Wood	Sel	7.1	
63	9 Wood	Sel	7.1	
64-FFFF	Reserved	


5. Game Controls
Usage ID	Usage Name	Usage Type	Section	
00	Undefined	
01	3D Game Controller	CA	8.1	
02	Pinball Device	CA	8.2	
03	Gun Device	CA	8.3	
04-1F	Reserved	
20	Point of View	CP	8.1	
21	Turn Right/Left	DV	8.1	
22	Pitch Forward/Backward	DV	8.1	
23	Roll Right/Left	DV	8.1	
24	Move Right/Left	DV	8.1	
25	Move Forward/Backward	DV	8.1	
26	Move Up/Down	DV	8.1	
27	Lean Right/Left	DV	8.1	
28	Lean Forward/Backward	DV	8.1	
29	Height of POV	DV	8.1	
2A	Flipper	MC	8.2	
2B	Secondary Flipper	MC	8.2	
2C	Bump	MC	8.2	
2D	New Game	OSC	8.2	
2E	Shoot Ball	OSC	8.2	
2F	Player	OSC	8.2	
30	Gun Bolt	OOC	8.3	
31	Gun Clip	OOC	8.3	
32	Gun Selector	NAry	8.3	
33	Gun Single Shot	Sel	8.3	
34	Gun Burst	Sel	8.3	
35	Gun Automatic	Sel	8.3	
36	Gun Safety	OOC	8.3	
37	Gamepad Fire/Jump	CL	8.4.1	
39	Gamepad Trigger	CL	8.4.1	
3A-FFFF	Reserved	



6. Generic Device
Usage ID	Usage Name	Usage Type	
00	Unidentified	
01-1F	Reserved	
20	Battery Strength	DV	
21	Wireless Channel	DV	
22	Wireless ID	DV	
23	Discover Wireless Control	OSC	
24	Security Code Character Entered	OSC	
25	Security Code Character Erased	OSC	
26	Security Code Cleared	OSC	
27-FFFF	Reserved	




7. Keyboard
Usage ID (Dec)	Usage ID (Hex)	Usage Name	Position	PC- AT	Mac UNI Boot X		
0	00	Reserved (no event indicated)9	N/A	√	√	√ 4/101/104	
1	01	Keyboard ErrorRollOver9	N/A	√	√	√ 4/101/104	
2	02	Keyboard POSTFail9	N/A	√	√	√ 4/101/104	
3	03	Keyboard ErrorUndefined9	N/A	√	√	√ 4/101/104	
4	04	Keyboard a and A4	31	√	√	√ 4/101/104	
5	05	Keyboard b and B	50	√	√	√ 4/101/104	
6	06	Keyboard c and C4	48	√	√	√ 4/101/104	
7	07	Keyboard d and D	33	√	√	√ 4/101/104	
8	08	Keyboard e and E	19	√	√	√ 4/101/104	
9	09	Keyboard f and F	34	√	√	√ 4/101/104	
10	0A	Keyboard g and G	35	√	√	√ 4/101/104	
11	0B	Keyboard h and H	36	√	√	√ 4/101/104	
12	0C	Keyboard i and I	24	√	√	√ 4/101/104	
13	0D	Keyboard j and J	37	√	√	√ 4/101/104	
14	0E	Keyboard k and K	38	√	√	√ 4/101/104	
15	0F	Keyboard l and L	39	√	√	√ 4/101/104	
16	10	Keyboard m and M4	52	√	√	√ 4/101/104	
17	11	Keyboard n and N	51	√	√	√ 4/101/104	
18	12	Keyboard o and O4	25	√	√	√ 4/101/104	
19	13	Keyboard p and P4	26	√	√	√ 4/101/104	
20	14	Keyboard q and Q4	17	√	√	√ 4/101/104	
21	15	Keyboard r and R	20	√	√	√ 4/101/104	
22	16	Keyboard s and S4	32	√	√	√ 4/101/104	
23	17	Keyboard t and T	21	√	√	√ 4/101/104	
24	18	Keyboard u and U	23	√	√	√ 4/101/104	
25	19	Keyboard v and V	49	√	√	√ 4/101/104	
26	1A	Keyboard w and W4	18	√	√	√ 4/101/104	
27	1B	Keyboard x and X4	47	√	√	√ 4/101/104	
28	1C	Keyboard y and Y4	22	√	√	√ 4/101/104	
29	1D	Keyboard z and Z4	46	√	√	√ 4/101/104	
30	1E	Keyboard 1 and !4	2	√	√	√ 4/101/104	
31	1F	Keyboard 2 and @4	3	√	√	√ 4/101/104	
32	20	Keyboard 3 and #4	4	√	√	√ 4/101/104	
33	21	Keyboard 4 and $4	5	√	√	√ 4/101/104	
34	22	Keyboard 5 and %4	6	√	√	√ 4/101/104	
35	23	Keyboard 6 and ^4	7	√	√	√ 4/101/104	
36	24	Keyboard 7 and &4	8	√	√	√ 4/101/104	
37	25	Keyboard 8 and *4	9	√	√	√ 4/101/104	
38	26	Keyboard 9 and (4	10	√	√	√ 4/101/104	
39	27	Keyboard 0 and )4	11	√	√	√ 4/101/104	
40	28	Keyboard Return (ENTER)5	43	√	√	√ 4/101/104	
41	29	Keyboard ESCAPE	110	√	√	√ 4/101/104	
42	2A	Keyboard DELETE (Backspace)13	15	√	√	√ 4/101/104	
43	2B	Keyboard Tab	16	√	√	√ 4/101/104	
44	2C	Keyboard Spacebar	61	√	√	√ 4/101/104	
45	2D	Keyboard - and (underscore)4	12	√	√	√ 4/101/104	
46	2E	Keyboard = and +4	13	√	√	√ 4/101/104	
47	2F	Keyboard [ and {4	27	√	√	√ 4/101/104	
48	30	Keyboard ] and }4	28	√	√	√ 4/101/104	
49	31	Keyboard \ and |	29	√	√	√ 4/101/104	
50	32	Keyboard Non-US # and ~2	42	√	√	√ 4/101/104	
51	33	Keyboard ; and :4	40	√	√	√ 4/101/104	
52	34	Keyboard ‘ and “4	41	√	√	√ 4/101/104	
53	35	Keyboard Grave Accent and Tilde4	1	√	√	√ 4/101/104	
54	36	Keyboard, and <4	53	√	√	√ 4/101/104	
55	37	Keyboard . and >4	54	√	√	√ 4/101/104	
56	38	Keyboard / and ?4	55	√	√	√ 4/101/104	
57	39	Keyboard Caps Lock11	30	√	√	√ 4/101/104	
58	3A	Keyboard F1	112	√	√	√ 4/101/104	
59	3B	Keyboard F2	113	√	√	√ 4/101/104	
60	3C	Keyboard F3	114	√	√	√ 4/101/104	
61	3D	Keyboard F4	115	√	√	√ 4/101/104	
62	3E	Keyboard F5	116	√	√	√ 4/101/104	
63	3F	Keyboard F6	117	√	√	√ 4/101/104	
64	40	Keyboard F7	118	√	√	√ 4/101/104	
65	41	Keyboard F8	119	√	√	√ 4/101/104	
66	42	Keyboard F9	120	√	√	√ 4/101/104	
67	43	Keyboard F10	121	√	√	√ 4/101/104	
68	44	Keyboard F11	122	√	√	√ 101/104	
69	45	Keyboard F12	123	√	√	√ 101/104	
70	46	Keyboard PrintScreen1	124	√	√	√ 101/104	
71	47	Keyboard Scroll Lock11	125	√	√	√ 4/101/104	
72	48	Keyboard Pause1	126	√	√	√ 101/104	
73	49	Keyboard Insert1	75	√	√	√ 101/104	
74	4A	Keyboard Home1	80	√	√	√ 101/104	
75	4B	Keyboard PageUp1	85	√	√	√ 101/104	
76	4C	Keyboard Delete Forward1;14	76	√	√	√ 101/104	
77	4D	Keyboard End1	81	√	√	√ 101/104	
78	4E	Keyboard PageDown1	86	√	√	√ 101/104	
79	4F	Keyboard RightArrow1	89	√	√	√ 101/104	
80	50	Keyboard LeftArrow1	79	√	√	√ 101/104	
81	51	Keyboard DownArrow1	84	√	√	√ 101/104	
82	52	Keyboard UpArrow1	83	√	√	√ 101/104	
83	53	Keypad Num Lock and Clear11	90	√	√	√ 101/104	
84	54	Keypad /1	95	√	√	√ 101/104	
85	55	Keypad *	100	√	√	√ 4/101/104	
86	56	Keypad -	105	√	√	√ 4/101/104	
87	57	Keypad +	106	√	√	√ 4/101/104	
88	58	Keypad ENTER5	108	√	√	√ 101/104	
89	59	Keypad 1 and End	93	√	√	√ 4/101/104	
90	5A	Keypad 2 and Down Arrow	98	√	√	√ 4/101/104	
91	5B	Keypad 3 and PageDn	103	√	√	√ 4/101/104	
92	5C	Keypad 4 and Left Arrow	92	√	√	√ 4/101/104	
93	5D	Keypad 5	97	√	√	√ 4/101/104	
94	5E	Keypad 6 and Right Arrow	102	√	√	√ 4/101/104	
95	5F	Keypad 7 and Home	91	√	√	√ 4/101/104	
96	60	Keypad 8 and Up Arrow	96	√	√	√ 4/101/104	
97	61	Keypad 9 and PageUp	101	√	√	√ 4/101/104	
98	62	Keypad 0 and Insert	99	√	√	√ 4/101/104	
99	63	Keypad . and Delete	104	√	√	√ 4/101/104	
100	64	Keyboard Non-US \ and |3;6	45	√	√	√ 4/101/104	
101	65	Keyboard Application10	129	√		√ 104	
102	66	Keyboard Power9			√	√	
103	67	Keypad =			√	
104	68	Keyboard F13			√	
105	69	Keyboard F14			√	
106	6A	Keyboard F15			√	
107	6B	Keyboard F16	
108	6C	Keyboard F17	
109	6D	Keyboard F18	
110	6E	Keyboard F19	
111	6F	Keyboard F20	
112	70	Keyboard F21	
113	71	Keyboard F22	
114	72	Keyboard F23	
115	73	Keyboard F24	
116	74	Keyboard Execute				√	
117	75	Keyboard Help				√	
118	76	Keyboard Menu				√	
119	77	Keyboard Select				√	
120	78	Keyboard Stop				√	
121	79	Keyboard Again				√	
122	7A	Keyboard Undo				√	
123	7B	Keyboard Cut				√	
124	7C	Keyboard Copy				√	
125	7D	Keyboard Paste				√	
126	7E	Keyboard Find				√	
127	7F	Keyboard Mute				√	
128	80	Keyboard Volume Up				√	
129	81	Keyboard Volume Down				√	
130	82	Keyboard Locking Caps Lock12				√	
131	83	Keyboard Locking Num Lock12				√	
132	84	Keyboard Locking Scroll Lock12				√	
133	85	Keypad Comma27	107	
134	86	Keypad Equal Sign29	
135	87	Keyboard International115,28	56	
136	88	Keyboard International216	
137	89	Keyboard International317	
138	8A	Keyboard International418	
139	8B	Keyboard International519	
140	8C	Keyboard International620	
141	8D	Keyboard International721	
142	8E	Keyboard International822	
143	8F	Keyboard International922	
144	90	Keyboard LANG125	
145	91	Keyboard LANG226	
146	92	Keyboard LANG330	
147	93	Keyboard LANG431	
148	94	Keyboard LANG532	
149	95	Keyboard LANG68	
150	96	Keyboard LANG78	
151	97	Keyboard LANG88	
152	98	Keyboard LANG98	
153	99	Keyboard Alternate Erase7	
154	9A	Keyboard SysReq/Attention1	
155	9B	Keyboard Cancel	
156	9C	Keyboard Clear	
157	9D	Keyboard Prior	
158	9E	Keyboard Return	
159	9F	Keyboard Separator	
160	A0	Keyboard Out	
161	A1	Keyboard Oper	
162	A2	Keyboard Clear/Again	
163	A3	Keyboard CrSel/Props	
164	A4	Keyboard ExSel	
165-175	A5-AF	Reserved	
176	B0	Keypad 00	
177	B1	Keypad 000	
178	B2	Thousands Separator 33	
179	B3	Decimal Separator 33	
180	B4	Currency Unit 34	
181	B5	Currency Sub-unit 34	
182	B6	Keypad (	
183	B7	Keypad )	
184	B8	Keypad {	
185	B9	Keypad }	
186	BA	Keypad Tab	
187	BB	Keypad Backspace	
188	BC	Keypad A	
189	BD	Keypad B	
190	BE	Keypad C	
191	BF	Keypad D	
192	C0	Keypad E	
193	C1	Keypad F	
194	C2	Keypad XOR	
195	C3	Keypad ^	
196	C4	Keypad %	
197	C5	Keypad <	
198	C6	Keypad >	
199	C7	Keypad &	
200	C8	Keypad &&	
201	C9	Keypad |	
202	CA	Keypad ||	
203	CB	Keypad :	
204	CC	Keypad #	
205	CD	Keypad Space	
206	CE	Keypad @	
207	CF	Keypad !	
208	D0	Keypad Memory Store	
209	D1	Keypad Memory Recall	
210	D2	Keypad Memory Clear	
211	D3	Keypad Memory Add	
212	D4	Keypad Memory Subtract	
213	D5	Keypad Memory Multiply	
214	D6	Keypad Memory Divide	
215	D7	Keypad +/-	
216	D8	Keypad Clear	
217	D9	Keypad Clear Entry	
218	DA	Keypad Binary	
219	DB	Keypad Octal	
220	DC	Keypad Decimal	
221	DD	Keypad Hexadecimal	
222-223	DE-DF	Reserved	
224	E0	Keyboard LeftControl	58	√	√	√ 4/101/104	
225	E1	Keyboard LeftShift	44	√	√	√ 4/101/104	
226	E2	Keyboard LeftAlt	60	√	√	√ 4/101/104	
227	E3	Keyboard Left GUI10;23	127	√	√	√ 104	
228	E4	Keyboard RightControl	64	√	√	√ 101/104	
229	E5	Keyboard RightShift	57	√	√	√ 4/101/104	
230	E6	Keyboard RightAlt	62	√	√	√ 101/104	
231	E7	Keyboard Right GUI10;24	128	√	√	√ 104	
232-65535	E8-FFFF	Reserved	






0A. Ordinal

Usage ID	Usage Name	Usage Type	
00	Reserved	
01	Instance 1	UM	
02	Instance 2	UM	
03	Instance 3	UM	
04	Instance 4	UM	
...	...	
FFFF	Instance 65535	UM	


0B. Telephony
	Usage ID	Usage Name	Usage Type	Section	
	00	Unassigned	
	01	Phone	CA	14.1	
	02	Answering Machine	CA	14.1	
	03	Message Controls	CL	14.1	
	04	Handset	CL	14.1	
	05	Headset	CL	14.1	
	06	Telephony Key Pad	NAry	14.2	
	07	Programmable Button	NAry	14.2	
	08-1F	Reserved	
	20	Hook Switch	OOC	14.3	
	21	Flash	MC	14.3	
	22	Feature	OSC	14.3	
	23	Hold	OOC	14.3	
	24	Redial	OSC	14.3	
	25	Transfer	OSC	14.3	
	26	Drop	OSC	14.3	
	27	Park	OOC	14.3	
	28	Forward Calls	OOC	14.3	
	29	Alternate Function	MC	14.3	
	2A	Line	OSC, NAry	14.3	
	2B	Speaker Phone	OOC	14.3	
	2C	Conference	OOC	14.3	
	2D	Ring Enable	OOC	14.3	
	2E	Ring Select	OSC	14.3	
	2F	Phone Mute	OOC	14.3	
	30	Caller ID	MC	14.3	
31	Send	OOC	14.3	
32-4F	Reserved	
50	Speed Dial	OSC	14.4	
51	Store Number	OSC	14.4	
52	Recall Number	OSC	14.4	
53	Phone Directory	OOC	14.4	
54-6F	Reserved	
70	Voice Mail	OOC	14.5	
71	Screen Calls	OOC	14.5	
72	Do Not Disturb	OOC	14.5	
73	Message	OSC	14.5	
74	Answer On/Off	OOC	14.5	
75-8F	Reserved	
90	Inside Dial Tone	MC	14.6	
91	Outside Dial Tone	MC	14.6	
92	Inside Ring Tone	MC	14.6	
93	Outside Ring Tone	MC	14.6	
94	Priority Ring Tone	MC	14.6	
95	Inside Ringback	MC	14.6	
96	Priority Ringback	MC	14.6	
97	Line Busy Tone	MC	14.6	
98	Reorder Tone	MC	14.6	
99	Call Waiting Tone	MC	14.6	
9A	Confirmation Tone 1	MC	14.6	
9B	Confirmation Tone 2	MC	14.6	
9C	Tones Off	OOC	14.6	
9D	Outside Ringback	MC	14.6	
9E	Ringer	OOC	14.6	
9E-AF	Reserved	
B0	Phone Key 0	Sel	14.2	
B1	Phone Key 1	Sel	14.2	
B2	Phone Key 2	Sel	14.2	
B3	Phone Key 3	Sel	14.2	
B4	Phone Key 4	Sel	14.2	
B5	Phone Key 5	Sel	14.2	
B6	Phone Key 6	Sel	14.2	
B7	Phone Key 7	Sel	14.2	
B8	Phone Key 8	Sel	14.2	
B9	Phone Key 9	Sel	14.2	
	BA	Phone Key Star	Sel	14.2	
	BB	Phone Key Pound	Sel	14.2	
	BC	Phone Key A	Sel	14.2	
	BD	Phone Key B	Sel	14.2	
	BE	Phone Key C	Sel	14.2	
	BF	Phone Key D	Sel	14.2	
	C0-FFFF	Reserved	


0C. Consumer

	Usage ID	Usage Name	Usage Type	Section	
	00	Unassigned	
	01	Consumer Control	CA	15.1	
	02	Numeric Key Pad	NAry	15.2	
	03	Programmable Buttons	NAry	15.14	
	04	Microphone	CA	15.1	
	05	Headphone	CA	15.1	
	06	Graphic Equalizer	CA	15.1	
	07-1F	Reserved	
	20	+10	OSC	15.2	
	21	+100	OSC	15.2	
	22	AM/PM	OSC	15.2	
	23-3F	Reserved	
	30	Power	OOC	15.3	
	31	Reset	OSC	15.3	
	32	Sleep	OSC	15.3	
	33	Sleep After	OSC	15.3	
	34	Sleep Mode	RTC	15.3	
	35	Illumination	OOC	15.3	
	36	Function Buttons	NAry	15.3	
	37-3F	Reserved	
	40	Menu	OOC	15.4	
	41	Menu Pick	OSC	15.4	
	42	Menu Up	OSC	15.4	
	43	Menu Down	OSC	15.4	
	44	Menu Left	OSC	15.4	
	45	Menu Right	OSC	15.4	
	46	Menu Escape	OSC	15.4	
	47	Menu Value Increase	OSC	15.4	
	48	Menu Value Decrease	OSC	15.4	
	49-5F	Reserved	
	60	Data On Screen	OOC	15.5	
	61	Closed Caption	OOC	15.5	
	62	Closed Caption Select	OSC	15.5	
	63	VCR/TV	OOC	15.5	
64	Broadcast Mode	OSC	15.5	
65	Snapshot	OSC	15.5	
66	Still	OSC	15.5	
67-7F	Reserved	
80	Selection	NAry	15.6	
81	Assign Selection	OSC	15.6	
82	Mode Step	OSC	15.6	
83	Recall Last	OSC	15.6	
84	Enter Channel	OSC	15.6	
85	Order Movie	OSC	15.6	
86	Channel	LC	15.6	
87	Media Selection	NAry	15.6	
88	Media Select Computer	Sel	15.6	
89	Media Select TV	Sel	15.6	
8A	Media Select WWW	Sel	15.6	
8B	Media Select DVD	Sel	15.6	
8C	Media Select Telephone	Sel	15.6	
8D	Media Select Program Guide	Sel	15.6	
8E	Media Select Video Phone	Sel	15.6	
8F	Media Select Games	Sel	15.6	
90	Media Select Messages	Sel	15.6	
91	Media Select CD	Sel	15.6	
92	Media Select VCR	Sel	15.6	
93	Media Select Tuner	Sel	15.6	
94	Quit	OSC	15.6	
95	Help	OOC	15.6	
96	Media Select Tape	Sel	15.6	
97	Media Select Cable	Sel	15.6	
98	Media Select Satellite	Sel	15.6	
99	Media Select Security	Sel	15.6	
9A	Media Select Home	Sel	15.6	
9B	Media Select Call	Sel	15.6	
9C	Channel Increment	OSC	15.6	
9D	Channel Decrement	OSC	15.6	
9E	Media Select SAP	Sel	15.6	
9F	Reserved	
A0	VCR Plus	OSC	15.6	
A1	Once	OSC	15.6	
A2	Daily	OSC	15.6	
	A3	Weekly	OSC	15.6	
	A4	Monthly	OSC	15.6	
	A5-AF	Reserved	
	B0	Play	OOC	15.7	
	B1	Pause	OOC	15.7	
	B2	Record	OOC	15.7	
	B3	Fast Forward	OOC	15.7	
	B4	Rewind	OOC	15.7	
	B5	Scan Next Track	OSC	15.7	
	B6	Scan Previous Track	OSC	15.7	
	B7	Stop	OSC	15.7	
	B8	Eject	OSC	15.7	
	B9	Random Play	OOC	15.7	
	BA	Select Disc	NAry	15.7	
	BB	Enter Disc	MC	15.7	
	BC	Repeat	OSC	15.7	
	BD	Tracking	LC	15.7	
	BE	Track Normal	OSC	15.7	
	BF	Slow Tracking	LC	15.7	
	C0	Frame Forward	RTC	15.7	
	C1	Frame Back	RTC	15.7	
	C2	Mark	OSC	15.8	
	C3	Clear Mark	OSC	15.8	
	C4	Repeat From Mark	OOC	15.8	
	C5	Return To Mark	OSC	15.8	
	C6	Search Mark Forward	OSC	15.8	
	C7	Search Mark Backwards	OSC	15.8	
	C8	Counter Reset	OSC	15.8	
	C9	Show Counter	OSC	15.8	
	CA	Tracking Increment	RTC	15.7	
	CB	Tracking Decrement	RTC	15.7	
	CC	Stop/Eject	OSC	15.7	
	CD	Play/Pause	OSC	15.7	
	CE	Play/Skip	OSC	15.7	
	CF-DF	Reserved	
	E0	Volume	LC	15.9.1	
	E1	Balance	LC	15.9.2	
	E2	Mute	OOC	15.9.1	
	E3	Bass	LC	15.9.3	
E4	Treble	LC	15.9.4	
E5	Bass Boost	OOC	15.9.3	
E6	Surround Mode	OSC	15.9.5	
E7	Loudness	OOC	15.9.5	
E8	MPX	OOC	15.9.5	
E9	Volume Increment	RTC	15.9.1	
EA	Volume Decrement	RTC	15.9.1	
EB-EF	Reserved	
F0	Speed Select	OSC	15.10	
F1	Playback Speed	NAry	15.10	
F2	Standard Play	Sel	15.10	
F3	Long Play	Sel	15.10	
F4	Extended Play	Sel	15.10	
F5	Slow	OSC	15.10	
F6-FF	Reserved	
100	Fan Enable	OOC	15.11	
101	Fan Speed	LC	15.11	
102	Light Enable	OOC	15.11	
103	Light Illumination Level	LC	15.11	
104	Climate Control Enable	OOC	15.11	
105	Room Temperature	LC	15.11	
106	Security Enable	OOC	15.11	
107	Fire Alarm	OSC	15.11	
108	Police Alarm	OSC	15.11	
109	Proximity	LC	15.11	
10A	Motion	OSC	15.11	
10B	Duress Alarm	OSC	15.11	
10C	Holdup Alarm	OSC	15.11	
10D	Medical Alarm	OSC	15.11	
10E-14F	Reserved	
150	Balance Right	RTC	15.9.2	
151	Balance Left	RTC	15.9.2	
152	Bass Increment	RTC	15.9.3	
153	Bass Decrement	RTC	15.9.3	
154	Treble Increment	RTC	15.9.4	
155	Treble Decrement	RTC	15.9.4	
156-15F	Reserved	
160	Speaker System	CL	15.12.1	
161	Channel Left	CL	15.12.1	
	162	Channel Right	CL	15.12.1	
	163	Channel Center	CL	15.12.1	
	164	Channel Front	CL	15.12.1	
	165	Channel Center Front	CL	15.12.1	
	166	Channel Side	CL	15.12.1	
	167	Channel Surround	CL	15.12.1	
	168	Channel Low Frequency Enhancement	CL	15.12.1	
	169	Channel Top	CL	15.12.1	
	16A	Channel Unknown	CL	15.12.1	
	16B-16F	Reserved	
	170	Sub-channel	LC	15.13	
	171	Sub-channel Increment	OSC	15.13	
	172	Sub-channel Decrement	OSC	15.13	
	173	Alternate Audio Increment	OSC	15.13	
	174	Alternate Audio Decrement	OSC	15.13	
	175-17F	Reserved	
	180	Application Launch Buttons	NAry	15.15	
	181	AL Launch Button Configuration Tool	Sel	15.15	
	182	AL Programmable Button Configuration	Sel	15.15	
	183	AL Consumer Control Configuration	Sel	15.15	
	184	AL Word Processor	Sel	15.15	
	185	AL Text Editor	Sel	15.15	
	186	AL Spreadsheet	Sel	15.15	
	187	AL Graphics Editor	Sel	15.15	
	188	AL Presentation App	Sel	15.15	
	189	AL Database App	Sel	15.15	
	18A	AL Email Reader	Sel	15.15	
	18B	AL Newsreader	Sel	15.15	
	18C	AL Voicemail	Sel	15.15	
	18D	AL Contacts/Address Book	Sel	15.15	
	18E	AL Calendar/Schedule	Sel	15.15	
	18F	AL Task/Project Manager	Sel	15.15	
	190	AL Log/Journal/Timecard	Sel	15.15	
	191	AL Checkbook/Finance	Sel	15.15	
	192	AL Calculator	Sel	15.15	
	193	AL A/V Capture/Playback	Sel	15.15	
194	AL Local Machine Browser	Sel	15.15	
195	AL LAN/WAN Browser	Sel	15.15	
196	AL Internet Browser	Sel	15.15	
197	AL Remote Networking/ISP Connect	Sel	15.15	
198	AL Network Conference	Sel	15.15	
199	AL Network Chat	Sel	15.15	
19A	AL Telephony/Dialer	Sel	15.15	
19B	AL Logon	Sel	15.15	
19C	AL Logoff	Sel	15.15	
19D	AL Logon/Logoff	Sel	15.15	
19E	AL Terminal Lock/Screensaver	Sel	15.15	
19F	AL Control Panel	Sel	15.15	
1A0	AL Command Line Processor/Run	Sel	15.15	
1A1	AL Process/Task Manager	Sel	15.15	
1A2	AL Select Task/Application	Sel	15.15	
1A3	AL Next Task/Application	Sel	15.15	
1A4	AL Previous Task/Application	Sel	15.15	
1A5	AL Preemptive Halt Task/Application	Sel	15.15	
1A6	AL Integrated Help Center	Sel	15.15	
1A7	AL Documents	Sel	15.15	
1A8	AL Thesaurus	Sel	15.15	
1A9	AL Dictionary	Sel	15.15	
1AA	AL Desktop	Sel	15.15	
1AB	AL Spell Check	Sel	15.15	
1AC	AL Grammar Check	Sel	15.15	
1AD	AL Wireless Status	Sel	15.15	
1AE	AL Keyboard Layout	Sel	15.15	
1AF	AL Virus Protection	Sel	15.15	
1B0	AL Encryption	Sel	15.15	
1B1	AL Screen Saver	Sel	15.15	
1B2	AL Alarms	Sel	15.15	
1B3	AL Clock	Sel	15.15	
1B4	AL File Browser	Sel	15.15	
1B5	AL Power Status	Sel	15.15	
1B6	AL Image Browser	Sel	15.15	
1B7	AL Audio Browser	Sel	15.15	
1B8	AL Movie Browser	Sel	15.15	
1B9	AL Digital Rights Manager	Sel	15.15	
	1BA	AL Digital Wallet	Sel	15.15	
	1BB	Reserved	
	1BC	AL Instant Messaging	Sel	15.15	
	1BD	AL OEM Features/ Tips/Tutorial Browser	Sel	15.15	
	1BE	AL OEM Help	Sel	15.15	
	1BF	AL Online Community	Sel	15.15	
	1C0	AL Entertainment Content Browser	Sel	15.15	
	1C1	AL Online Shopping Browser	Sel	15.15	
	1C2	AL SmartCard Information/Help	Sel	15.15	
	1C3	AL Market Monitor/Finance Browser	Sel	15.15	
	1C4	AL Customized Corporate News Browser	Sel	15.15	
	1C5	AL Online Activity Browser	Sel	15.15	
	1C6	AL Research/Search Browser	Sel	15.15	
	1C7	AL Audio Player	Sel	15.15	
	1C8-1FF	Reserved	
	200	Generic GUI Application Controls	Nary	15.16	
	201	AC New	Sel	15.16	
	202	AC Open	Sel	15.16	
	203	AC Close	Sel	15.16	
	204	AC Exit	Sel	15.16	
	205	AC Maximize	Sel	15.16	
	206	AC Minimize	Sel	15.16	
	207	AC Save	Sel	15.16	
	208	AC Print	Sel	15.16	
	209	AC Properties	Sel	15.16	
	21A	AC Undo	Sel	15.16	
	21B	AC Copy	Sel	15.16	
	21C	AC Cut	Sel	15.16	
	21D	AC Paste	Sel	15.16	
	21E	AC Select All	Sel	15.16	
	21F	AC Find	Sel	15.16	
	220	AC Find and Replace	Sel	15.16	
	221	AC Search	Sel	15.16	
	222	AC Go To	Sel	15.16	
	223	AC Home	Sel	15.16	
	224	AC Back	Sel	15.16	
225	AC Forward	Sel	15.16	
226	AC Stop	Sel	15.16	
227	AC Refresh	Sel	15.16	
228	AC Previous Link	Sel	15.16	
229	AC Next Link	Sel	15.16	
22A	AC Bookmarks	Sel	15.16	
22B	AC History	Sel	15.16	
22C	AC Subscriptions	Sel	15.16	
22D	AC Zoom In	Sel	15.16	
22E	AC Zoom Out	Sel	15.16	
22F	AC Zoom	LC	15.16	
230	AC Full Screen View	Sel	15.16	
231	AC Normal View	Sel	15.16	
232	AC View Toggle	Sel	15.16	
233	AC Scroll Up	Sel	15.16	
234	AC Scroll Down	Sel	15.16	
235	AC Scroll	LC	15.16	
236	AC Pan Left	Sel	15.16	
237	AC Pan Right	Sel	15.16	
238	AC Pan	LC	15.16	
239	AC New Window	Sel	15.16	
23A	AC Tile Horizontally	Sel	15.16	
23B	AC Tile Vertically	Sel	15.16	
23C	AC Format	Sel	15.16	
23D	AC Edit	Sel	15.14	
23E	AC Bold	Sel	15.16	
23F	AC Italics	Sel	15.16	
240	AC Underline	Sel	15.16	
241	AC Strikethrough	Sel	15.16	
242	AC Subscript	Sel	15.16	
243	AC Superscript	Sel	15.16	
244	AC All Caps	Sel	15.16	
245	AC Rotate	Sel	15.16	
246	AC Resize	Sel	15.16	
247	AC Flip horizontal	Sel	15.16	
248	AC Flip Vertical	Sel	15.16	
249	AC Mirror Horizontal	Sel	15.16	
24A	AC Mirror Vertical	Sel	15.16	
24B	AC Font Select	Sel	15.16	
	24C	AC Font Color	Sel	15.16	
	24D	AC Font Size	Sel	15.16	
	24E	AC Justify Left	Sel	15.16	
	24F	AC Justify Center H	Sel	15.16	
	250	AC Justify Right	Sel	15.16	
	251	AC Justify Block H	Sel	15.16	
	252	AC Justify Top	Sel	15.16	
	253	AC Justify Center V	Sel	15.16	
	254	AC Justify Bottom	Sel	15.16	
	255	AC Justify Block V	Sel	15.16	
	256	AC Indent Decrease	Sel	15.16	
	257	AC Indent Increase	Sel	15.16	
	258	AC Numbered List	Sel	15.16	
	259	AC Restart Numbering	Sel	15.16	
	25A	AC Bulleted List	Sel	15.16	
	25B	AC Promote	Sel	15.16	
	25C	AC Demote	Sel	15.16	
	25D	AC Yes	Sel	15.16	
	25E	AC No	Sel	15.16	
	25F	AC Cancel	Sel	15.16	
	260	AC Catalog	Sel	15.16	
	261	AC Buy/Checkout	Sel	15.16	
	262	AC Add to Cart	Sel	15.16	
	263	AC Expand	Sel	15.16	
	264	AC Expand All	Sel	15.16	
	265	AC Collapse	Sel	15.16	
	266	AC Collapse All	Sel	15.16	
	267	AC Print Preview	Sel	15.16	
	268	AC Paste Special	Sel	15.16	
	269	AC Insert Mode	Sel	15.16	
	26A	AC Delete	Sel	15.16	
	26B	AC Lock	Sel	15.16	
	26C	AC Unlock	Sel	15.16	
	26D	AC Protect	Sel	15.16	
	26E	AC Unprotect	Sel	15.16	
	26F	AC Attach Comment	Sel	15.16	
	270	AC Delete Comment	Sel	15.16	
	271	AC View Comment	Sel	15.16	
	272	AC Select Word	Sel	15.16	
	273	AC Select Sentence	Sel	15.16	
274	AC Select Paragraph	Sel	15.16	
275	AC Select Column	Sel	15.16	
276	AC Select Row	Sel	15.16	
277	AC Select Table	Sel	15.16	
278	AC Select Object	Sel	15.16	
279	AC Redo/Repeat	Sel	15.16	
27A	AC Sort	Sel	15.16	
27B	AC Sort Ascending	Sel	15.16	
27C	AC Sort Descending	Sel	15.16	
27D	AC Filter	Sel	15.16	
27E	AC Set Clock	Sel	15.16	
27F	AC View Clock	Sel	15.16	
280	AC Select Time Zone	Sel	15.16	
281	AC Edit Time Zones	Sel	15.16	
282	AC Set Alarm	Sel	15.16	
283	AC Clear Alarm	Sel	15.16	
284	AC Snooze Alarm	Sel	15.16	
285	AC Reset Alarm	Sel	15.16	
286	AC Synchronize	Sel	15.16	
287	AC Send/Receive	Sel	15.16	
288	AC Send To	Sel	15.16	
289	AC Reply	Sel	15.16	
28A	AC Reply All	Sel	15.16	
28B	AC Forward Msg	Sel	15.16	
28C	AC Send	Sel	15.16	
28D	AC Attach File	Sel	15.16	
28E	AC Upload	Sel	15.16	
28F	AC Download (Save Target As)	Sel	15.16	
290	AC Set Borders	Sel	15.16	
291	AC Insert Row	Sel	15.16	
292	AC Insert Column	Sel	15.16	
293	AC Insert File	Sel	15.16	
294	AC Insert Picture	Sel	15.16	
295	AC Insert Object	Sel	15.16	
296	AC Insert Symbol	Sel	15.16	
297	AC Save and Close	Sel	15.16	
298	AC Rename	Sel	15.16	
299	AC Merge	Sel	15.16	
29A	AC Split	Sel	15.16	
29B	AC Disribute Horizontally	Sel	15.16	
	29C	AC Distribute Vertically	Sel	15.16	
	29D-FFFF	Reserved	

0D. Digitizers

Usage ID	Usage Name	Usage Types	Section	
00	Undefined	
01	Digitizer	CA	16.1	
02	Pen	CA	16.1	
03	Light Pen	CA	16.1	
04	Touch Screen	CA	16.1	
05	Touch Pad	CA	16.1	
06	White Board	CA	16.1	
07	Coordinate Measuring Machine	CA	16.1	
08	3D Digitizer	CA	16.1	
09	Stereo Plotter	CA	16.1	
0A	Articulated Arm	CA	16.1	
0B	Armature	CA	16.1	
0C	Multiple Point Digitizer	CA	16.1	
0D	Free Space Wand	CA	16.1	
0E-1F	Reserved	
20	Stylus	CL	16.2	
21	Puck	CL	16.2	
22	Finger	CL	16.2	
23-2F	Reserved	
30	Tip Pressure	DV	16.3.1	
31	Barrel Pressure	DV	16.3.1	
32	In Range	MC	16.3.1	
33	Touch	MC	16.3.1	
34	Untouch	OSC	16.3.1	
35	Tap	OSC	16.3.1	
36	Quality	DV	16.3.1	
37	Data Valid	MC	16.3.1	
38	Transducer Index	DV	16.3.1	
39	Tablet Function Keys	CL	16.3.1	
3A	Program Change Keys	CL	16.3.1	
3B	Battery Strength	DV	16.3.1	
3C	Invert	MC	16.3.1	
3D	X Tilt	DV	16.3.2	
3E	Y Tilt	DV	16.3.2	
3F	Azimuth	DV	16.3.3	
40	Altitude	DV	16.3.3	
41	Twist	DV	16.3.3	
42	Tip Switch	MC	16.4	
43	Secondary Tip Switch	MC	16.4	
44	Barrel Switch	MC	16.4	
45	Eraser	MC	16.4	
46	Tablet Pick	MC	16.4	
47-FFFF	Reserved	

14 Alphanumeric Display

Usage ID	Usage Name	Usage Type	Section		
00	Undefined	
01	Alphanumeric Display	CA	18.1	
02	Bitmapped Display	CA	18.2	
03-1F	Reserved	
20	Display Attributes Report	CL	18.1.1	
21	ASCII Character Set	SF	18.1.1	
22	Data Read Back	SF	18.1.1	
23	Font Read Back	SF	18.1.1	
24	Display Control Report	CL	18.1.2	
25	Clear Display	DF	18.1.2	
26	Display Enable	DF	18.1.2	
27	Screen Saver Delay	SV or DV	18.1.2	
28	Screen Saver Enable	DF	18.1.2	
29	Vertical Scroll	SF or DF	18.1.3	
2A	Horizontal Scroll	SF or DF	18.1.3	
2B	Character Report	CL	18.1.4	
2C	Display Data	DV	18.1.4	
2D	Display Status	CL	18.1.5	
2E	Stat Not Ready	Sel	18.1.5	
2F	Stat Ready	Sel	18.1.5	
30	Err Not a loadable character	Sel	18.1.5	
31	Err Font data cannot be read	Sel	18.1.5	
32	Cursor Position Report	CL	18.1.6	
33	Row	DV	18.1.6	
34	Column	DV	18.1.6	
35	Rows	SV	18.1.6	
36	Columns	SV	18.1.6	
37	Cursor Pixel Positioning	SF	18.1.6	
38	Cursor Mode	DF	18.1.6	
39	Cursor Enable	DF	18.1.6	
3A	Cursor Blink	DF	18.1.6	
3B	Font Report	CL	18.1.7	
3C	Font Data	Buffered Byte	18.1.7	
3D	Character Width	SV	18.1.7	
3E	Character Height	SV	18.1.7	
3F	Character Spacing Horizontal	SV	18.1.7	
40	Character Spacing Vertical	SV	18.1.7	
41	Unicode Character Set	SF	18.1.1	
42	Font 7-Segment	SF	18.1.1	
43	7-Segment Direct Map	SF	18.1.1	
44	Font 14-Segment	SF	18.1.1	
45	14-Segment Direct Map	SF	18.1.1	
46	Display Brightness	DV	18.1.2	
47	Display Contrast	DV	18.1.2	
48	Character Attribute	CL	18.1.1	
49	Attribute Readback	SF	18.1.1	
4A	Attribute Data	DV	18.1.4	
4B	Char Attr Enhance	OOC	18.1.1	
4C	Char Attr Underline	OOC	18.1.1	
4D	Char Attr Blink	OOC	18.1.1	
4E-7F	Reserved	
80	Bitmap Size X	SV	18.2.1.1	
81	Bitmap Size Y	SV	18.2.1.1	
82	Reserved	
83	Bit Depth Format	SV	18.2.1.2	
84	Display Orientation	DV	18.2.2	
85	Palette Report	CL	18.2.3	
86	Palette Data Size	SV	18.2.3	
87	Palette Data Offset	SV	18.2.3	
88	Palette Data	Buffered Bytes	18.2.3	
8A	Blit Report	CL	18.2.4	
8B	Blit Rectangle X1	SV	18.2.4	
8C	Blit Rectangle Y1	SV	18.2.4	
8D	Blit Rectangle X2	SV	18.2.4	
8E	Blit Rectangle Y2	SV	18.2.4	
8F	Blit Data	Buffered Bytes	18.2.4	
90	Soft Button	CL	18.2.1.3	
91	Soft Button ID	SV	18.2.1.3	
92	Soft Button Side	SV	18.2.1.3	
93	Soft Button Offset 1	SV	18.2.1.3	
94	Soft Button Offset 2	SV	18.2.1.3	
95	Soft Button Report	SV	18.2.1.3	
96-FFFF	Reserved	


40 - Medical

Usage ID	Usage Name	Usage Type	Section	
00	Undefined	
01	Medical Ultrasound	CA	19.1	
02-1F	Reserved	
20	VCR/Acquisition	OOC	19.2	
21	Freeze/Thaw	OOC	19.2	
22	Clip Store	OSC	19.2	
23	Update	OSC	19.2	
24	Next	OSC	19.2	
25	Save	OSC	19.2	
26	Print	OSC	19.2	
27	Microphone Enable	OSC	19.2	
28-3F	Reserved	
40	Cine	LC	19.2	
41	Transmit Power	LC	19.2	
42	Volume	LC	19.2	
43	Focus	LC	19.2	
44	Depth	LC	19.2	
45-5F	Reserved	
60	Soft Step - Primary	LC	19.2	
61	Soft Step - Secondary	LC	19.2	
62-6F	Reserved	
70	Depth Gain Compensation	LC	19.3	
71-7F	Reserved	
80	Zoom Select	OSC	19.4	
81	Zoom Adjust	LC	19.4	
82	Spectral Doppler Mode Select	OSC	19.4	
83	Spectral Doppler Adjust	LC	19.4	
84	Color Doppler Mode Select	OSC	19.4	
85	Color Doppler Adjust	LC	19.4	
86	Motion Mode Select	OSC	19.4	
87	Motion Mode Adjust	LC	19.4	
88	2-D Mode Select	OSC	19.4	
89	2-D Mode Adjust	LC	19.4	
8A-9F	Reserved	
A0	Soft Control Select	OSC	19.4	
A1	Soft Control Adjust	LC	19.4	
A2-FFFF	Reserved	


*/