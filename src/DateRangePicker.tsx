// Imports: Dependencies
import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import moment from 'moment';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title: string;
  mode: 'calendar' | 'spinner' | 'default';
  onFromValueChange: (date: Date) => any;
  onToValueChange: (date: Date) => any;
}

// Component: Date Range Picker
const DateRangePicker = (props: Props) => {
  // React Hooks: State
  const [ fromDateModalVisible, toggleFromDate ] = useState(false);
  const [ toDateModalVisible, toggleToDate ] = useState(false);
  const [ androidFromDateVisible, toggleFromDateAndroid ] = useState(false);
  const [ androidToDateVisible, toggleToDateAndroid ] = useState(false);
  const [ fromDate, setFromDate ] = useState(new Date());
  const [ toDate, setToDate ] = useState(new Date());

  // Toggle From Date Modal
  const toggleFromDateModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleFromDate((fromDateModalVisible: boolean) => !fromDateModalVisible);
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Toggle To Date Modal
  const toggleToDateModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleToDate((toDateModalVisible: boolean) => !toDateModalVisible);
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select From Date
  const selectFromDate = (event: any, date: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android' && date !== undefined) {
        // Event Type: Set Date
        if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleFromDateAndroid(false);
  
          // React Hook: Set From Date
          setFromDate(date);
  
          // React Props: onChange
          props.onFromValueChange(date);
        }
  
        // Event Type: Dismissed
        if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleFromDate(false);
        }
      }

      // Check Platform: Android
      if (Platform.OS === 'ios') {
        setFromDate(date);

        // React Props: onChange
        props.onFromValueChange(date);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select To Date
  const selectToDate = (event: any, date: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android' && date !== undefined) {
        // Event Type: Set Date
        if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleToDateAndroid(false);
  
          // React Hook: Set To Date
          setToDate(date);
  
          // React Props: onChange
          props.onToValueChange(date);
        }
  
        // Event Type: Dismissed
        if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleToDate(false);
        }
      }

      // Check Platform: Android
      if (Platform.OS === 'ios') {
        setToDate(date);

        // React Props: onChange
        props.onToValueChange(date);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From iOS Date Picker
  const renderFromIOSDatePicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={fromDate}
          onChange={(event: any, date: Date) => selectFromDate(event, date)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render To iOS Date Picker
  const renderToIOSDatePicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={toDate}
          onChange={(event: any, date: Date) => selectToDate(event, date)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render To Date Android Picker
  const renderToDateAndroidPicker = () => {
    try {
      if (androidToDateVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={toDate}
            onChange={(event: any, date: Date) => selectToDate(event, date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From Date Android Picker
  const renderFromDateAndroidPicker = () => {
    try {
      if (androidFromDateVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={fromDate}
            onChange={(event: any, date: Date) => selectFromDate(event, date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>

      <View style={styles.toFromDateContainer}>
        <TouchableOpacity onPress={() => toggleFromDateModal()} style={styles.dateInfoContainer}>
          <Text style={styles.dateText}>From</Text>
          <Text style={styles.text}>{moment(fromDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <View>
          {androidFromDateVisible === true ? renderFromDateAndroidPicker() : null}
        </View>

        <Modal isVisible={fromDateModalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => toggleFromDateModal()} >
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              {renderFromIOSDatePicker()}
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.toFromDateContainer}>
        <TouchableOpacity onPress={() => toggleToDateModal()} style={styles.dateInfoContainer}>
          <Text style={styles.dateText}>To</Text>
          <Text style={styles.text}>{moment(toDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <View>
          {androidToDateVisible === true ? renderToDateAndroidPicker(): null}
        </View>

        <Modal isVisible={toDateModalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => toggleToDateModal()} >
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              {renderToIOSDatePicker()}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width - 32,
    marginRight: 16,
    marginLeft: 16,
    justifyContent: 'center',
  },
  titleContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    alignSelf: 'flex-start',
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  toFromDateContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  dateInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 32,
  },
  dateText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  text: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#007AFF',
  },
  arrowForward: {
    color: 'black',
    opacity: .3,
    marginRight: 7,
  },
  divider: {
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 12,
    marginBottom: 12,
  },
  modal: {
    margin: 0,
  },
  modalContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pickerHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    width: width,
    backgroundColor: '#FAFAF8',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerContainer: {
    height: 220,
    width: width,
    // backgroundColor: '#CFD3D9',
    backgroundColor: 'white',
  },
  doneText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 17,
    marginRight: 16,
  },
});

// Exports
export default DateRangePicker;
