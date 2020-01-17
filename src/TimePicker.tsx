// Imports: Dependencies
import React, { useState } from 'react';
import { DatePickerIOS, Dimensions, Platform, StyleSheet, Text, TimePickerAndroid, TouchableOpacity, View } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title: string;
  date: Date;
  mode: 'spinner' | 'default' | 'clock';
  onValueChange: (date: Date) => Date;
  onPress?: () => void;
}

interface AndroidProps {
  action: 'timeSetAction' | 'dismissedAction';
  hour?: number;
  minute?: number;
  is24Hour?: boolean;
}

// Component: Time Picker
const TimePicker = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ date, setDate ] = useState(new Date());

  // Toggle Modal
  const toggleModal = async (props: Props) => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        const { action, hour, minute } : AndroidProps = await TimePickerAndroid.open({
          hour: date.getHours(),
          minute: date.getMinutes(),
          is24Hour: false,
          mode: props.mode,
        });

        // Action: Time Set
        if (
          action === TimePickerAndroid.timeSetAction
          && hour !== undefined
          && minute !== undefined
        ) {
          // New Date
          let newDate:Date = date;

          // Set Hours
          newDate.setHours(hour);

          // Set Minutes
          newDate.setMinutes(minute);

          // Select Date
          selectDate(newDate);
        }

        // Action: Dismissed
        if (action === TimePickerAndroid.dismissedAction) {
          // Do Nothing
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select Date
  const selectDate = (date: Date) => {
    try {
      // React Hook: Set Date
      setDate(date);

      // React Props: onValueChange
      props.onValueChange(date);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    try {
      return (
        <DatePickerIOS 
          mode="time"
          date={date}
          onDateChange={() => selectDate(date)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputTitleContainer}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => toggleModal(props)} style={styles.fieldTextContainer}>
        <Text style={styles.fieldText} numberOfLines={1}>{date ? moment(date).format('h:mm a') : 'Select'}</Text>

        <Icon name="ios-arrow-forward" size={22} style={styles.arrowForward}/>
      </TouchableOpacity>

      <Modal isVisible={modalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.pickerHeaderContainer}>
            <TouchableOpacity onPress={() => toggleModal(props)} >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pickerContainer}>
            {renderIOSPicker()}
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width - 32,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
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
  stateContainer: {
    alignItems: 'center',
    width: 75,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputTitleContainer: {
    width: 75,
    marginBottom: 4,
  },
  inputTitle: {
    color: '#7D7D7D',
    borderColor: '#7D7D7D',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  fieldTextContainer: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,    
  },
  fieldText: {
    width: width - 32 - 20,
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    alignSelf: 'center',
  },
  arrowForward: {
    color: 'black',
    opacity: .3,
    marginRight: 7,
  },
});

// Exports
export default TimePicker;
