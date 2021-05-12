// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Appearance, Button, Dimensions, Keyboard, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript Types: Props
interface Props {
  mode: 'calendar' | 'spinner' | 'default';
  onFromChange: (newDate: Date) => void;
  onToChange: (newDate: Date) => void;
  title?: string;
};

// Component: Picker (Date Range)
const DateRangePicker: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ fromDateModalVisible, toggleFromDate ] = useState<boolean>(false);
  const [ toDateModalVisible, toggleToDate ] = useState<boolean>(false);
  const [ androidFromDateVisible, toggleFromDateAndroid ] = useState<boolean>(false);
  const [ androidToDateVisible, toggleToDateAndroid ] = useState<boolean>(false);
  const [ fromDate, setFromDate ] = useState<Date>(new Date());
  const [ toDate, setToDate ] = useState<Date>(new Date());
  const [ tempToDate, setTempToDate ] = useState<Date>(toDate);
  const [ tempFromDate, setTempFromDate ] = useState<Date>(fromDate);
  const [ today , todaySent ] = useState<boolean>(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onFromChange
      props.onFromChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  }, [today]);

  // Select From Date
  const selectFromDate = (event: any, newDate: Date): void => {
    // Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // React Hook: Toggle From Date Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
      }
      // Event Type: Set Date
      else if (event.type === 'set') {
        // React Hook: Toggle Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);

        // React Hook: Set From Date
        setFromDate(newDate);

        // React Props: onChange
        props.onFromChange(newDate);
      }
      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // React Hook: Toggle Android
        toggleFromDate(false);
      }
    }
    // Platform: Android
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // Set State
        setTempFromDate(newDate);
      }
    }
  };

  // Select To Date
  const selectToDate = (event: any, newDate: Date): void => {
    // Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // React Hook: Toggle From Date Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
      }
      // Event Type: Set Date
      else if (event.type === 'set') {
        // React Hook: Toggle Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);

        // React Hook: Set To Date
        setToDate(newDate);

        // React Props: onChange
        props.onToChange(newDate);
      }
      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // React Hook: Toggle Android
        toggleToDate(false);
      }
    }
    // Platform: Android
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // Set State
        setTempToDate(newDate);
      }
    }
  };

  // Render iOS Date Picker (From Date)
  const renderFromIOSDatePicker = (): JSX.Element => {
    return (
      <DateTimePicker
        mode="date"
        value={tempFromDate ? tempFromDate : fromDate}
        onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
        style={{width: 140}}
      />
    );
  };

  // Render iOS Date Picker (To Date)
  const renderToIOSDatePicker = (): JSX.Element => {
    return (
      <DateTimePicker
        mode="date"
        value={tempToDate ? tempToDate : toDate}
        onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
        style={{width: 140}}
      />
    );
  };

  // Render Date Android Picker (From Date)
  const renderFromDateAndroidPicker = (): JSX.Element | undefined => {
    if (androidFromDateVisible === true) {
      return (
        <DateTimePicker
          mode="date"
          display={props.mode}
          value={fromDate}
          onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
        />
      );
    }
  };

  // Render Date Android Picker (To Date)
  const renderToDateAndroidPicker = (): JSX.Element | undefined => {
    if (androidToDateVisible === true) {
      return (
        <DateTimePicker
          mode="date"
          display={props.mode}
          value={toDate}
          onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
        />
      );
    }
  };

  // Format Date
  // const formatDate = (date: Date): string => {
  //   // Options
  //   const options = {
  //     month: 'short',
  //     day: 'numeric',
  //     year: 'numeric',
  //   };

  //   return date.toLocaleDateString('en-US', options);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.inputTitleContainer}>
        <Text style={styles.inputTitle}>{props.title === undefined ? 'Date Range' : props.title}</Text>
      </View>

      <View style={styles.toFromDateContainer}>
        <Text style={styles.dateText}>From</Text>

        <>{renderFromIOSDatePicker()}</>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.toFromDateContainer}>
        <Text style={styles.dateText}>To</Text>

        <>{renderToIOSDatePicker()}</>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF',
  },
  inputTitleContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    alignSelf: 'flex-start',
    fontFamily: 'System',
    fontSize: 27,
    fontWeight: '700',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    marginBottom: 12,
  },
  toFromDateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 16,
  },
  dateText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '600',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
  },
  divider: {
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 12,
    marginBottom: 12,
  },
});

// Exports
export default DateRangePicker;
