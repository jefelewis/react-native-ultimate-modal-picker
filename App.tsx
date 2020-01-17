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
  StatePicker,
  StatePickerSmall,
} from './src/index';

// React Native App
const App = () => {

  // Test Data
  const items = [
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
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <DatePicker
        title="Date"
        onChange={(date) => console.log(`Date Value: ${date}`)}
        // mode="spinner"
        mode="calendar"
      />

      {/* <TimePicker
        title="Time"
        onValueChange={(date) => console.log(`Time Value: ${date}`)}
        mode="spinner"
        // mode="clock"
      /> */}


      {/* <DateTimePicker
        title="Date/Time"
        onValueChange={(date) => console.log(`Date/Time Value: ${date}`)}
      /> */}


      {/* <ListPicker
        title="List"
        items={items}
        onValueChange={(value) => console.log(`List Value: ${value}`)}
      /> */}


      {/* <StatePicker onValueChange={(state) => console.log(`State Value: ${state}`)}/> */}



      {/* <StatePickerSmall onValueChange={(state) => console.log(`State Value: ${state}`)}/> */}

      <DateRangePicker
        title="Date/Range"
        onFromValueChange={(date) => console.log(`From Date Value: ${date}`)}
        onToValueChange={(date) => console.log(`To Date Value: ${date}`)}
        mode="spinner"
      />
    </SafeAreaView>
  );
};

// Exports
export default App;
