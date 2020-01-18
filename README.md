# React Native Ultimate Modal Picker

[![npm version](https://badge.fury.io/js/react-native-ultimate-modal-picker.svg)](https://badge.fury.io/js/react-native-ultimate-modal-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-native-ultimate-modal-picker.svg?style=flat-square)](https://www.npmjs.com/package/react-native-ultimate-modal-picker)

*  [Built With](#built-with)
*  [Known Issues](#known-issues)
*  [Pending Items](#pending-items)
*  [Picker Types (iOS)](#picker-types-ios)
*  [Picker Types (Android)](#picker-types-android)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [React Native](https://facebook.github.io/react-native/) - Mobile (iOS/Android) Framework
* [React Native Modal](https://github.com/react-native-community/react-native-modal) - Modal
* [React Native Datetime Picker](https://github.com/react-native-community/react-native-datetimepicker) - Native Date/Time Picker
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Functional Component State/Lifecycle Methods
* [Moment](https://github.com/moment/moment) - Date/Time Formatting

## Known Issues
**PACKAGE DOES NOT WORK YET. STILL IN TESTING**

## Pending Items
- [X] React Native Vector Icons iOS React Issue
- [X] React Native Vector Icons iOS Linking Issue
- [ ] Update Deprecated Date/Time Pickers to React Native Datetime Picker
- [ ] React Native Vector Icon Android Issue
- [ ] Android Time Picker (Spinner) Time Fix
- [ ] Android Time Picker (Clock) Time Fix
- [ ] onValueChange passing state back up issue.
- [ ] Deploy NPM Package

## Picker Types (iOS)
### 1. Date
<div align="center">
  <img src="/screenshots/ios/datepicker.gif" width="40%" height="40%" />
</div>

### 2. Time
<div align="center">
  <img src="/screenshots/ios/timepicker.gif" width="40%" height="40%" />
</div>

### 3. Date/Time (iOS Only)
<div align="center">
  <img src="/screenshots/ios/datetimepicker.gif" width="40%" height="40%" />
</div>

### 4. List
<div align="center">
  <img src="/screenshots/ios/listpicker.gif" width="40%" height="40%" />
</div>


### 5. State (50 United States)
<div align="center">
  <img src="/screenshots/ios/statepicker.gif" width="40%" height="40%" />
</div>

## Picker Types (Android)
### 1. Date (Mode: Spinner)
<div align="center">
  <img src="/screenshots/android/datespinnerpickerandroid.gif" width="40%" height="40%" />
</div>

### 2. Date (Mode: Calendar)
<div align="center">
  <img src="/screenshots/android/datecalendarpickerandroid.gif" width="40%" height="40%" />
</div>

### 3. Time (Mode: Spinner)


### 4. Time (Mode: Clock)


### 5. List
<div align="center">
  <img src="/screenshots/android/listpickerandroid.gif" width="40%" height="40%" />
</div>


### 6. State (50 United States)
<div align="center">
  <img src="/screenshots/android/statepickerandroid.gif" width="40%" height="40%" />
</div>

## Getting Started
**1. Install Package:**
```
npm i react-native-ultimate-modal-picker
```

**2. Run Project:**
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
  StatePicker,
  StatePickerSmall,
} from 'react-native-ultimate-modal-picker';

// React Native App
const App = () => {
  return (
    <SafeAreaView>
      // Date Picker (Modes: spinner/calendar)
      <DatePicker
        title="Date"
        onValueChange={(date) => console.log(`Date Value: ${date}`)}
        mode="spinner"
      />

      // Time Picker (Modes: spinner/clock)
      <TimePicker
        title="Time"
        onValueChange={(date) => console.log(`Time Value: ${date}`)}
        mode="spinner"
      />

      // Date Time Picker (iOS Only)
      <DateTimePicker
        title="Date/Time"
        onValueChange={(date) => console.log(`Date/Time Value: ${date}`)}
      />

      // List Picker
      <ListPicker title="List" items={items} onValueChange={(value) => console.log(`List Value: ${value}`)}/>

      // State Picker
      <StatePicker onValueChange={(state) => console.log(`State Value: ${state}`)}/>

      // State Picker (Small)
      <StatePickerSmall onValueChange={(state) => console.log(`State Value: ${state}`)}/>

      // Date Range Picker
      <DateRangePicker
        title="Date/Range"
        onFromValueChange={(date) => console.log(`From Date Value: ${date}`)}
        onToValueChange={(date) => console.log(`To Date Value: ${date}`)}
        mode="spinner"
      />
    </SafeAreaView>
  )
}
```