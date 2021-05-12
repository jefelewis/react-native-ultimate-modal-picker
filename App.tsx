// Imports: Dependencies
import React from 'react';
import { SafeAreaView } from 'react-native';

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

      {/* Date Range Picker */}
      <DateRangePicker
        title="Date Range"
        onFromChange={(date) => console.log(date)}
        onToChange={(date) => console.log(date)}
        mode="spinner"
      />
    </SafeAreaView>
  );
};

// Exports
export default App;
