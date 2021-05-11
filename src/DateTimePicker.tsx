// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Appearance, Button, Dimensions, Keyboard, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript Types: Props
interface Props {
  title?: string;
  onChange: (date: Date | string) => Date | string | void;
}

// Component: Datetime Picker
const DatetimePicker: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState<boolean>(false);
  const [ date, setDate ] = useState<Date>(new Date());
  const [ tempDate, setTempDate ] = useState<Date>(date);
  const [ today , todaySent ] = useState<boolean>(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onFromChange
      props.onChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  }, [today]);

  // Toggle Modal
  const toggleModal = (): void => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
    }

    // Dismiss Keyboard
    Keyboard.dismiss();
  };

  // Select Date
  const selectDate = (event: any, newDate: Date): void => {
    // Set State
    setTempDate(newDate);
  };

  // Render iOS Picker
  const renderIOSPicker = (): JSX.Element => {
    return (
      <RNDateTimePicker
        mode="datetime"
        value={tempDate ? tempDate : date}
        onChange={(event: any, newDate: any) => selectDate(event, newDate)}
      />
    );
  };

  // Press Cancel
  const pressCancel = (): void => {
    // Set State
    setTempDate(date);

    // Toggle Modal
    toggleModal();

    // Dismiss Keyboard
    Keyboard.dismiss();
  };

  // Press Done
  const pressDone = (): void => {
    // React Hook: Set Date
    setDate(tempDate);

    // Props: onChange
    props.onChange(tempDate);

    // Toggle Modal
    toggleModal();
  };

  // Format Date
  const formatDate = (date: Date): string => {
    // Options
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  };

  // Format Time
  const formatTime = (date: Date): string => {
    // Options
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    };

    return date.toLocaleTimeString('en-US', options);
  };

  // Render Platform
  const renderPlatform = (): JSX.Element | undefined => {
    // Platform: iOS
    if (Platform.OS == 'ios') {
      return (
        <View style={styles.container}>
          <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}>{props.title === undefined ? 'Date/Time' : props.title}</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
            <Text style={styles.fieldText} numberOfLines={1}>{date ? `${formatDate(date)} ${formatTime(date)}` : 'Select'}</Text>
          </TouchableOpacity>

          <Modal
            isVisible={modalVisible}
            style={styles.modal}
            backdropOpacity={.30}
          >
            <View style={styles.modalContainer}>
              <View style={styles.pickerHeaderContainer}>
                <TouchableOpacity onPress={() => pressCancel()}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

                <View style={styles.doneButton}>
                  <Button
                    title="Done"
                    onPress={() => pressDone()}
                    disabled={date === tempDate ? true : false}
                  />
                </View>
              </View>

              <View style={styles.pickerContainer}>{renderIOSPicker()}</View>
            </View>
          </Modal>
        </View>
      );
    }
    // Platform: Android
    else if (Platform.OS === 'android') {
      return null;
    }
  };

  return (
    <>{renderPlatform()}</>
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
    height: 45,
    width: width,
    backgroundColor: colorScheme === 'dark' ? '#383838' : '#FFFFFF',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerContainer: {
    height: 250,
    width: width,
    backgroundColor: colorScheme === 'dark' ? '#121312' : '#FFFFFF',
  },
  doneButton: {
    marginRight: 7,
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
    marginBottom: 12,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fieldText: {
    width: width - 32 - 20,
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    alignSelf: 'center',
  },
  arrowForward: {
    color: 'black',
    opacity: .3,
    marginRight: 7,
  },
});

// Exports
export default DatetimePicker;
