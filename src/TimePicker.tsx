// Imports: Dependencies
import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import moment from 'moment';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title: string;
  mode: 'spinner' | 'default' | 'clock';
  onChange: (date: any) => any;
}

// Component: Time Picker
const TimePicker = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ androidModalVisible, toggleAndroid ] = useState(false);
  const [ tempDate, setTempDate ] = useState();
  const [ date, setDate ] = useState(new Date());

  // Toggle Modal
  const toggleModal = () => {
    try {
      // Check Platform (Android)
      if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
      }

      // Check Platform (iOS)
      else if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select Date
  const selectDate = (event: any, date: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android') {

        // Undefined
        if (date === undefined) {
          // React Hook: Toggle Android 
          toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
        }

        // Event Type: Set Date
        else if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);

          // React Hook: Set From Date
          setDate(date);

          // React Props: onChange
          props.onChange(date);
        }

        // Event Type: Dismissed
        else if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
        }
      }

      // Check Platform: Android
      if (Platform.OS === 'ios') {
        // React Hook: Set Temp State
        setTempDate(date);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="time"
          value={tempDate !== undefined ? tempDate : date}
          onChange={(event: any, date: any) => selectDate(event, date)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Cancel
  const pressCancel = () => {
    try {
      // React Hook: Set Temp Date
      setTempDate(date);

      // Toggle Modal
      toggleModal(); 
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Done
  const pressDone = () => {
    try {
      // React Hook: Set Date
      setDate(tempDate);

      // Props: onChange
      props.onChange(date);

      // Toggle Modal
      toggleModal(); 
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render Android Picker
  const renderAndroidPicker = () => {
    try {
      if (androidModalVisible === true) {
        return (
          <RNDateTimePicker
            mode="time"
            display={props.mode}
            value={date}
            onChange={(event: any, date: any) => selectDate(event, date)}
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
      <View style={styles.inputTitleContainer}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      </View>

      <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
        <Text style={styles.fieldText} numberOfLines={1}>{date ? moment(date).format('h:mm a') : 'Select'}</Text>

        {/* <Icon name="ios-arrow-forward" size={22} style={styles.arrowForward}/> */}
      </TouchableOpacity>

      <View>
        {androidModalVisible === true ? renderAndroidPicker(): null}
      </View>

      <Modal isVisible={modalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.pickerHeaderContainer}>
            <TouchableOpacity onPress={() => pressCancel()} >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => pressDone()} >
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
    justifyContent: 'space-between',
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
    backgroundColor: 'white',
  },
  doneText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 17,
    marginRight: 16,
  },
  cancelText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '400',
    fontSize: 17,
    marginLeft: 16,
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
