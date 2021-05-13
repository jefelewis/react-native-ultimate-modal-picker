// Imports: Dependencies
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

// Imports: Components
import {
  // Pickers
  PickerTime,
  PickerDate,
  PickerDateTime,
  PickerDateRange,
  // Dropdowns
  DropdownList,
  DropdownMeasurements,
  DropdownNumber,
  DropdownState,
} from './src/index';

// Imports: TypeScript Types
import { PickerValue } from './src/types/types';

// React Native App
const App: React.FC = (): JSX.Element => {
  // React Hooks: State
  // Pickers
  const [ date, setDate ] = useState<Date>(new Date());
  const [ time, setTime ] = useState<Date>(new Date());
  const [ dateTime, setDateTime ] = useState<Date>(new Date());
  const [ fromDate, setFromDate ] = useState<Date>(new Date());
  const [ toDate, setToDate ] = useState<Date>(new Date());
  // Dropdowns
  const [ listValue, setListValue ] = useState<string>('');
  const [ numberValue, setNumberValue ] = useState<string>('');
  const [ measurementValue, setMeasurementValue ] = useState<string>('');
  const [ stateValue, setStateValue ] = useState<string>('');

  // Items
  const items: Array<PickerValue> = [
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
        {/* Picker: Date (Modes: spinner/calendar) */}
        <PickerDate
          title="Date"
          onChange={(date: Date) => setDate(date)}
          mode="spinner"
        />

        {/* Picker: Date (Custom Styles) */}
        <PickerDate
          title="Date (Custom Styles)"
          onChange={(date: Date) => setDate(date)}
          mode="spinner"
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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
          onChange={(date: Date) => setTime(date)}
          mode="spinner"
        />

        {/* Picker: Time (Custom Styles) */}
        <PickerTime
          title="Time (Custom Styles)"
          onChange={(date: Date) => setTime(date)}
          mode="spinner"
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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
          onChange={(date: Date) => setDateTime(date)}
        />

        {/* Picker: Date Time (Custom Styles) */}
        <PickerDateTime
          title="Date/Time (Custom Styles)"
          onChange={(date: Date) => setDateTime(date)}
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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

        {/* Picker (Date Range) */}
        <PickerDateRange
          title="Date Range"
          onFromChange={(date: Date) => setFromDate(date)}
          onToChange={(date: Date) => setToDate(date)}
          mode="spinner"
        />

        {/* Picker (Custom Styles) */}
        <PickerDateRange
          title="Date Range"
          onFromChange={(date: Date) => setFromDate(date)}
          onToChange={(date: Date) => setToDate(date)}
          mode="spinner"
          customStyleContainer={{
            containerLight: {
              backgroundColor: '#000000',
            },
            containerDark: {
              backgroundColor: '#000000',
            },
          }}
          customStyleTitleText={{
            titleTextLight: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
            titleTextDark: {
              fontFamily: 'System',
              fontSize: 22,
              fontWeight: '800',
              textTransform: 'lowercase',
              color: 'red',
            },
          }}
          customStyleLabelText={{
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
          customStyleDivider={{
            dividerLight: {
              marginTop: 16,
              marginBottom: 16,
              borderBottomWidth: 2,
              borderColor: 'red',
            },
            dividerDark: {
              marginTop: 16,
              marginBottom: 16,
              borderBottomWidth: 2,
              borderColor: 'red',
            },
          }}
        />

        {/* Dropdown: List */}
        <DropdownList
          title="List"
          items={items}
          onChange={(value: string) => setListValue(value)}
        />

        {/* Dropdown: List (Custom Styles) */}
        <DropdownList
          title="List (Custom Styles)"
          items={items}
          onChange={(value: string) => setListValue(value)}
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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
          customStyleFieldText={{
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
          }}
          customStyleModalHeaderContainer={{
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
          }}
          customStyleCancelText={{
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
          }}
          customStyleDoneText={{
            doneTextLight: {
              color: 'red',
            },
            doneTextDark: {
              color: 'red',
            },
          }}
          customStyleModalContentContainer={{
            modalContentContainerLight: {
              height: 400,
              backgroundColor: '#000000',
            },
            modalContentContainerDark: {
              height: 400,
              backgroundColor: '#000000',
            },
          }}
          customStylePickerItemText={{
            pickerItemTextLight: {
              color: 'red',
            },
            pickerItemTextDark: {
              color: 'red',
            }
          }}
        />

        {/* Dropdown: Number */}
        <DropdownNumber
          title="Number"
          onChange={(value: string) => setNumberValue(value)}
        />

        {/* Dropdown: Number (Custom Styles) */}
        <DropdownNumber
          title="Number"
          onChange={(value: string) => setNumberValue(value)}
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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
          customStyleFieldText={{
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
          }}
          customStyleModalHeaderContainer={{
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
          }}
          customStyleCancelText={{
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
          }}
          customStyleDoneText={{
            doneTextLight: {
              color: 'red',
            },
            doneTextDark: {
              color: 'red',
            },
          }}
          customStyleModalContentContainer={{
            modalContentContainerLight: {
              height: 400,
              backgroundColor: '#000000',
            },
            modalContentContainerDark: {
              height: 400,
              backgroundColor: '#000000',
            },
          }}
          customStylePickerItemText={{
            pickerItemTextLight: {
              color: 'red',
            },
            pickerItemTextDark: {
              color: 'red',
            }
          }}
        />

        {/* Dropdown: Measurements */}
        <DropdownMeasurements
          title="Measurement"
          onChange={(value: string) => setMeasurementValue(value)}
        />

        {/* Dropdown: Measurements (Custom Styles) */}
        <DropdownMeasurements
          title="Measurement"
          onChange={(value: string) => setMeasurementValue(value)}
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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
          customStyleFieldText={{
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
          }}
          customStyleModalHeaderContainer={{
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
          }}
          customStyleCancelText={{
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
          }}
          customStyleDoneText={{
            doneTextLight: {
              color: 'red',
            },
            doneTextDark: {
              color: 'red',
            },
          }}
          customStyleModalContentContainer={{
            modalContentContainerLight: {
              height: 400,
              backgroundColor: '#000000',
            },
            modalContentContainerDark: {
              height: 400,
              backgroundColor: '#000000',
            },
          }}
          customStylePickerItemText={{
            pickerItemTextLight: {
              color: 'red',
            },
            pickerItemTextDark: {
              color: 'red',
            }
          }}
        />

        {/* Dropdown: State */}
        <DropdownState
          title="State"
          onChange={(value: string) => setStateValue(value)}
        />

        {/* Dropdown: State (Custom Styles) */}
        <DropdownState
          title="State"
          onChange={(value: string) => setStateValue(value)}
          customStyleContainer={{
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
          }}
          customStyleLabelText={{
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
          customStyleFieldText={{
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
          }}
          customStyleModalHeaderContainer={{
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
          }}
          customStyleCancelText={{
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
          }}
          customStyleDoneText={{
            doneTextLight: {
              color: 'red',
            },
            doneTextDark: {
              color: 'red',
            },
          }}
          customStyleModalContentContainer={{
            modalContentContainerLight: {
              height: 400,
              backgroundColor: '#000000',
            },
            modalContentContainerDark: {
              height: 400,
              backgroundColor: '#000000',
            },
          }}
          customStylePickerItemText={{
            pickerItemTextLight: {
              color: 'red',
            },
            pickerItemTextDark: {
              color: 'red',
            }
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Exports
export default App;
