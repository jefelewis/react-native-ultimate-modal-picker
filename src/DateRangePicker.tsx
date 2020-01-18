// Imports: Dependencies
import React, { useState } from 'react';
import { DatePickerAndroid, DatePickerIOS, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import moment from 'moment';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title: string;
  mode: 'calendar' | 'spinner' | 'default';
  // date: Date;
  minDate?: Date | number;
  maxDate?: Date | number;
  onFromValueChange: (date: Date) => any;
  onToValueChange: (date: Date) => any;
  // onPress?: () => void;
}

// interface AndroidProps {
//   action: 'dateSetAction' | 'dismissedAction';
//   newDate?: Date;
//   year?: number;
//   month?: number;
//   day?: number;
// }

// Component: Date Range Picker
const DateRangePicker = (props: Props) => {
  // React Hooks: State
  const [ fromDateModalVisible, toggleFromDate ] = useState(false);
  const [ toDateModalVisible, toggleToDate ] = useState(false);
  const [ fromDate, setFromDate ] = useState(new Date());
  const [ toDate, setToDate ] = useState(new Date());

  // Toggle From Date Modal
  const toggleFromDateModal = async (props: Props) => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleFromDate((fromDateModalVisible: boolean) => !fromDateModalVisible);
      }
      
      // Check Platform (Android)
      if (Platform.OS === 'android') {
        // const { action, year, month, day } : AndroidProps = await DatePickerAndroid.open({
        //   date: fromDate,
        //   mode: props.mode,
        // });

        // // Action: Date Set
        // if (
        //   action === DatePickerAndroid.dateSetAction
        //   && year !== undefined
        //   && month !== undefined
        //   && day !== undefined
        // ) {
        //   // New Date
        //   let newDate:Date = new Date(year, month, day);

        //   // Select From Date
        //   selectFromDate(newDate);
        // }

        // // Action: Dismissed
        // if (action === DatePickerAndroid.dismissedAction) {
        //   // Do Nothing
        // }

        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={fromDate}
            onFromDateChange={(event: any, date: Date) => selectFromDate(date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Toggle To Date Modal
  const toggleToDateModal = async (props: Props) => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleToDate((toDateModalVisible: boolean) => !toDateModalVisible);
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        // const { action, year, month, day } : AndroidProps = await DatePickerAndroid.open({
        //   date: toDate,
        //   mode: props.mode,
        // });

        // // Action: Date Set
        // if (
        //   action === DatePickerAndroid.dateSetAction
        //   && year !== undefined
        //   && month !== undefined
        //   && day !== undefined
        // ) {
        //   // New Date
        //   let newDate = new Date(year, month, day);

        //   // Select To Date
        //   selectToDate(newDate);
        // }

        // // Action: Dismissed
        // if (action === DatePickerAndroid.dismissedAction) {
        //   // Do Nothing
        // }

        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={toDate}
            onToDateChange={(event: any, date: Date) => selectFromDate(date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select From Date
  const selectFromDate = (date: Date) => {
    try {
      // React Hook: Set From Date
      setFromDate(date);

      // React Props: onFromValueChange
      props.onFromValueChange(date);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select To Date
  const selectToDate = (date: Date) => {
    try {
      // React Hook: Set To Date
      setToDate(date);

      // React Props: onToValueChange
      props.onToValueChange(date);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From iOS Date Picker
  const renderFromIOSDatePicker = () => {
    try {
      // return (
      //   <DatePickerIOS 
      //     mode="date"
      //     date={fromDate}
      //     onDateChange={() => selectFromDate(fromDate)}
      //   />
      // )
      return (
        <RNDateTimePicker
          mode="date"
          value={fromDate}
          onChange={(event: any, date: Date) => selectFromDate(date)}
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
      // return (
      //   <DatePickerIOS 
      //     mode="date"
      //     date={toDate}
      //     onDateChange={() => selectToDate(toDate)}
      //   />
      // )
      return (
        <RNDateTimePicker
          mode="date"
          value={toDate}
          onChange={(event: any, date: Date) => selectToDate(date)}
        />
      )
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
        <TouchableOpacity onPress={() => toggleFromDateModal(props)} style={styles.dateInfoContainer}>
          <Text style={styles.dateText}>From</Text>
          <Text style={styles.text}>{moment(fromDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <Modal isVisible={fromDateModalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => toggleFromDateModal(props)} >
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
        <TouchableOpacity onPress={() => toggleToDateModal(props)} style={styles.dateInfoContainer}>
          <Text style={styles.dateText}>To</Text>
          <Text style={styles.text}>{moment(toDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <Modal isVisible={toDateModalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => toggleToDateModal(props)} >
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
