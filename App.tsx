// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';

// Imports: Components
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
} from './src/index';

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
    { label: '10', value: '10' },
  ];

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <ScrollView>
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
        <NumberPicker title="Number" onChange={(item) => console.log(item)} />

        {/* Cooking Amount Picker */}
        <CookingAmountPicker
          title="Amount"
          onChange={(item) => console.log(item)}
        />

        {/* State Picker */}
        <StatePicker title="State" onChange={(state) => console.log(state)} />

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

        {/* Date Picker (Modes: spinner/calendar) styled*/}
        <DatePicker
          title="Date"
          onChange={(date) => console.log(date)}
          mode="spinner"
          style={overrideStyles}
        />
        {/* Time Picker (Modes: spinner/clock) styled*/}
        <TimePicker
          title="Time"
          onChange={(date) => console.log(date)}
          mode="spinner"
          style={overrideStyles}
        />

        {/* Date Time Picker (iOS Only) styled*/}
        <DateTimePicker
          title="Date/Time"
          onChange={(date) => console.log(date)}
          style={overrideStyles}
        />

        {/* List Picker styled*/}
        <ListPicker
          title="List"
          items={items}
          onChange={(item) => console.log(item)}
          style={overrideStyles}
        />

        {/* Number Picker styled*/}
        <NumberPicker
          title="Number"
          onChange={(item) => console.log(item)}
          style={overrideStyles}
        />

        {/* Cooking Amount Picker styled*/}
        <CookingAmountPicker
          title="Amount"
          onChange={(item) => console.log(item)}
          style={overrideStyles}
        />
        {/* State Picker styled*/}
        <StatePicker
          title="State"
          onChange={(state) => console.log(state)}
          style={overrideStyles}
        />

        {/* State Picker (Small) styled*/}
        <StatePickerSmall
          title="State"
          onChange={(state) => console.log(state)}
          style={overrideStyles}
        />

        {/* Date Range Picker styled*/}
        <DateRangePicker
          title="Date Range"
          onFromChange={(date) => console.log(date)}
          onToChange={(date) => console.log(date)}
          mode="spinner"
          style={overrideStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const overrideStyles = StyleSheet.create({
  inputTitle: {
    color: '#7D7D7D',
    borderColor: '#7D7D7D',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  fieldTextContainer: {
    borderColor: '#029cf5',
    borderBottomWidth: 2,
  },
});

// Exports
export default App;
