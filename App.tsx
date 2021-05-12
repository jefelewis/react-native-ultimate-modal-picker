// Imports: Dependencies
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

// Imports: Components
import {
  PickerDateRange,
  PickerDate,
  PickerTime,
  PickerDateTime,
  PickerList,
  NumberPicker,
  CookingAmountPicker,
  StatePicker,
} from './src/index';

// React Native App
const App: React.FC = (): JSX.Element => {
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
      <ScrollView>

        {/* Picker: Date (Modes: spinner/calendar) */}
        <PickerDate
          title="Date"
          onChange={(date) => console.log(date)}
          mode="spinner"
        />

        {/* Picker: Date (Custom Styles) */}
        <PickerDate
          title="Date (Custom Styles)"
          onChange={(date) => console.log(date)}
          mode="spinner"
          customStyle={{
            containerLight: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            containerDark: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            labelTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            labelTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
          }}
        />

        {/* Picker: Time (Modes: spinner/clock) */}
        <PickerTime
          title="Time"
          onChange={(date) => console.log(date)}
          mode="spinner"
        />

        {/* Picker: Time (Custom Styles) */}
        <PickerTime
          title="Time (Custom Styles)"
          onChange={(date) => console.log(date)}
          mode="spinner"
          customStyle={{
            containerLight: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            containerDark: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            labelTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            labelTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
          }}
        />

        {/* Picker: Date Time (iOS Only) */}
        <PickerDateTime
          title="Date/Time"
          onChange={(date) => console.log(date)}
        />

        {/* Picker: Date Time (Custom Styles) */}
        <PickerDateTime
          title="Date/Time (Custom Styles)"
          onChange={(date) => console.log(date)}
          customStyle={{
            containerLight: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            containerDark: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            labelTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            labelTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
          }}
        />

        {/* Picker: List */}
        <PickerList
          title="List"
          items={items}
          onChange={(item) => console.log(item)}
        />

        {/* Picker: List (Custom Styles) */}
        <PickerList
          title="List (Custom Styles)"
          items={items}
          onChange={(item) => console.log(item)}
          customStyle={{
            containerLight: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            containerDark: {
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            labelTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            labelTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            fieldTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            fieldTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            cancelTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              color: 'red',
            },
            cancelTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              color: 'red',
            },
            modalHeaderContainerLight: {
              height: 55,
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            modalHeaderContainerDark: {
              height: 55,
              backgroundColor: '#000000',
              borderColor: '#000000',
              borderBottomWidth: 2,
            },
            modalContentContainerLight: {
              height: 400,
              backgroundColor: '#000000',
            },
            modalContentContainerDark: {
              height: 400,
              backgroundColor: '#000000',
            },
            pickerItemTextLight: {
              color: 'red',
            },
            pickerItemTextDark: {
              color: 'red',
            }
          }}
        />

        {/* Number Picker */}
        <NumberPicker
          title="Number"
          onChange={(item) => console.log(item)}
        />

        {/* Cooking Amount Picker */}
        <CookingAmountPicker
          title="Amount"
          onChange={(item) => console.log(item)}
        />

        {/* State Picker */}
        <StatePicker
          title="State"
          onChange={(state) => console.log(state)}
        />

        {/* Picker (Date Range) */}
        <PickerDateRange
          title="Date Range"
          onFromChange={(date) => console.log(date)}
          onToChange={(date) => console.log(date)}
          mode="spinner"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Exports
export default App;
