# React Native Ultimate Modal Picker

[![npm version](https://badge.fury.io/js/react-native-ultimate-modal-picker.svg)](https://badge.fury.io/js/react-native-ultimate-modal-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-native-ultimate-modal-picker.svg)](https://www.npmjs.com/package/react-native-ultimate-modal-picker)

*  [Features](#features)
*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)
*  [Picker Types (iOS)](#picker-types-ios)
*  [Picker Types (Android)](#picker-types-android)
*  [Changelog](#changelog)

## Features
✅ iOS/Android
✅ Dark Mode
✅ Built with TypeScript
✅ Built with React Hooks

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [React Native](https://facebook.github.io/react-native/) - Mobile (iOS/Android) Framework
* [React Native Modal](https://github.com/react-native-community/react-native-modal) - Modal
* [React Native Picker](https://github.com/react-native-community/react-native-picker#readme) - Native Picker
* [React Native Datetime Picker](https://github.com/react-native-community/react-native-datetimepicker) - Native Date/Time Picker
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Functional Component State/Lifecycle Methods

## Pending Items
- [ ] 

## Getting Started
**1. Install Package:**
```
npm i react-native-ultimate-modal-picker
```

**2. Add Pod (For iOS)**

Add the following line to ios/podfile:
```
pod 'RNDateTimePicker', :path => '../node_modules/@react-native-community/datetimepicker/RNDateTimePicker.podspec'
```

**3. Install Pods (For iOS)**
```
cd ios
pod install
```

**4. Add Dependencies (For Android)**

Add the following lines to android/settings.gradle:
```
include ':react-native-datetimepicker'
project(':react-native-datetimepicker').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-community/datetimepicker/android')
```

Add the following line to android/app/build.gradle:
```
dependencies {
  ...
  implementation project(':react-native-datetimepicker')
}
```

**5. Run Project:**
```
react-native run-ios
```


## Example Code
```javascript
// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  DateRangePicker,
  DatePicker,
  TimePicker,
  DateTimePicker,
  ListPicker,
  NumberPicker,
  CookingAmountPicker,
  StatePicker,
  StatePickerSmall,
  TextField,
} from 'react-native-ultimate-modal-picker';

// React Native App
const App = () => {

  // Test Data
  const items: any = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' }
  ];

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      {/* Date Picker (Modes: spinner/calendar) */}
      <DatePicker
        title="Date"
        onChange={(date) => console.log(date)}
        mode="spinner"
      />

      {/* Time Picker (Modes: spinner/clock) */}
      <TimePicker
        title="Time"
        onChange={(date) => console.log(date)}
        mode="spinner"
      />

      {/* Date Time Picker (iOS Only) */}
      <DateTimePicker
        title="Date/Time"
        onChange={(date) => console.log(date)}
      />

      {/* List Picker */}
      <ListPicker
        title="List"
        items={items}
        onChange={(item) => console.log(item)}
      />

      {/* Number Picker */}
      <NumberPicker
        title="Number"
        onChange={(item) => console.log(item)}
      />

      {/* Cooking Measurement Picker */}
      <CookingAmountPicker
        title="Measurement"
        onChange={(item) => console.log(item)}
      />

      {/* State Picker */}
      <StatePicker
        title="State"
        onChange={(state) => console.log(state)}
      />

      {/* State Picker (Small) */}
      <StatePickerSmall
        title="State"
        onChange={(state) => console.log(state)}
      />

      {/* Date Range Picker */}
      <DateRangePicker
        title="Date Range"
        onFromChange={(date) => console.log(date)}
        onToChange={(date) => console.log(date)}
        mode="spinner"
      />

      {/* Text Field */}
      <TextField
        title="Text"
        value={(text: string | number) => console.log(text)}
      />
    </SafeAreaView>
  );
};
```

## Picker Types (iOS)
### 1. Date
<div align="center">
  <img src="/screenshots/ios/iosDate.gif" width="40%" height="40%" />
</div>

### 2. Time
<div align="center">
  <img src="/screenshots/ios/iosTime.gif" width="40%" height="40%" />
</div>

### 3. Date/Time (iOS Only)
<div align="center">
  <img src="/screenshots/ios/iosDateTime.gif" width="40%" height="40%" />
</div>

### 4. List
<div align="center">
  <img src="/screenshots/ios/iosList.gif" width="40%" height="40%" />
</div>


### 5. State (50 United States)
<div align="center">
  <img src="/screenshots/ios/iosState.gif" width="40%" height="40%" />
</div>

## Picker Types (Android)
### 1. Date (Mode: Spinner)
<div align="center">
  <img src="/screenshots/android/androidDateSpinner.gif" width="40%" height="40%" />
</div>

### 2. Date (Mode: Calendar)
<div align="center">
  <img src="/screenshots/android/androidDateCalendar.gif" width="40%" height="40%" />
</div>

### 3. Time (Mode: Spinner)
<div align="center">
  <img src="/screenshots/android/androidTimeSpinner.gif" width="40%" height="40%" />
</div>

### 4. Time (Mode: Clock)
<div align="center">
  <img src="/screenshots/android/androidTimeClock.gif" width="40%" height="40%" />
</div>

### 5. List
<div align="center">
  <img src="/screenshots/android/androidList.gif" width="40%" height="40%" />
</div>


### 6. State (50 United States)
<div align="center">
  <img src="/screenshots/android/androidState.gif" width="40%" height="40%" />
</div>

## Changelog

### [0.2.2] - 8/10/2020

***Added***
- Added Dark Mode support. Please upgrade to React Native 0.62 for this to work.
- Added `@react-native-community/picker` dependency (Picker is soon to be deprecated).

### [0.2.1] - 8/10/2020

***Changed***
- Updated `react` dependency.
- Updated `react-native` dependency.
- Updated `react-native-modal` dependency.

***Removed***
- Removed `moment` dependency.

### [0.2.0] - 4/21/2020

***Changed***
- Updated `@react-native-community/datetimepicker` to 2.3.2.
- Removed unnecessary try/catch blocks.

### [0.1.64] - 3/13/2020

***Changed***
- Updated dependencies.

### [0.1.63] - 3/13/2020

***Changed***
- Changed `CookingAmountPicker` to `CookingAmountPicker`.
- Fixed `defaultValue` prop for `CookingAmountPicker` and `ListPicker`.

### [0.1.62] - 3/13/2020

***Added***

- Added `defaultValue` prop for `CookingAmountPicker` and `ListPicker`.

### [0.1.59] - 3/5/2020

***Changed***

- Fixed `selectItem` string/number type issue.

### [0.1.59] - 3/5/2020

***Added***

- Added NumberPicker.
- Added CookingAmountPicker.

***Changed***

- Increased `inputTitleContainer` width.

### [0.1.58] - 2/7/2020

***Changed***

- Increased `fieldTextContainer` marginBottom to 12px.

### [0.1.57] - 2/7/2020

***Changed***

- Fixed `@react-native-community/datetimepicker` ^2.1.1 vs 2.1.1 issue.

### [0.1.56] - 2/7/2020

***Changed***

- Updated `@react-native-community/datetimepicker` to 2.1.1.
- Changing backdrop opacity to 30%.
- Increased `TouchableOpacity` size for `DateRangePicker`.
- Increased `pickerHeaderContainer` height to 45px.
- Fixed README podspec issue.

***Removed***

- Removed React Native Vector Icons.

### [0.1.55] - 1/28/2020

***Changed***

- Fixed `onChange` issue.
- Done button is now disabled unless a new item or state is picked.

### [0.1.54] - 1/28/2020

***Added***

- Adding typings for `onChange`.
- Passing initial date to parent component (`useEffect`) for Date, Time, Datetime, and Date Range Pickers.

***Changed***

- Date Range's `toDate` is now defaulted to "Select."

### [0.1.53] - 1/27/2020

***Changed***

- Fixed Picker Done button issue. Done button is now disabled unless new date is picked.
- Increased Picker container size for iOS.

***Removed***

- Removed async/await due to that it was not the root cause of the issue.

### [0.1.47] - 1/26/2020

***Changed***

- Fixed `onChange` TypeScript typings.

### [0.1.46] - 1/26/2020

***Changed***

- Fixed React Hook state + `onValueChange` issue due to having the same name of "state."


### [0.1.45] - 1/26/2020

***Changed***

- Added keyboard dismiss to `toggleModal()`.

### [0.1.44] - 1/25/2020

***Added***

- Added keyboard dismiss to work better with form fields.

### [0.1.43] - 1/24/2020

***Changed***

- Fixed README Formatting.

### [0.1.42] - 1/24/2020

***Added***

- Added cancel button to iOS ListPicker.
- Added test data items for ListPicker on README.
- Added props to App.tsx for testing.
- Title props can be added to any Picker. Default titles are shown if no prop is added.

***Changed***

- Reformatted App.tsx for when testing.
- Fixed `onChange` TypeScript Typings.
- Updated README screenshot GIFs.

### [0.1.41] - 1/23/2020

***Changed***

- Updated README for NPM package.

### [0.1.40] - 1/23/2020

***Added***

- Added `podfile` installation instructions to README.
- Added cancel button for iOS modals.

***Changed***

- Fixed if/else toggle issue.
- Fixed undefined date issue.
- Fixed `onChange` issue.
- Changed if statements for Platform to else/if so only one would ever run.