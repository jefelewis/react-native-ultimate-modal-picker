// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import {
  Appearance,
  Button,
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript: Types
interface Style {
  container?: ViewStyle;
  modal?: ViewStyle;
  modalContainer?: ViewStyle;
  pickerHeaderContainer?: ViewStyle;
  pickerContainer?: ViewStyle;
  doneButton?: ViewStyle;
  cancelText?: TextStyle;
  inputTitleContainer?: ViewStyle;
  inputTitle?: TextStyle;
  divider?: ViewStyle;
  toFromDateContainer?: ViewStyle;
  dateInfoContainer?: ViewStyle;
  dateText?: TextStyle;
  text?: TextStyle;
}

interface Props {
  title?: string;
  mode: 'calendar' | 'spinner' | 'default';
  onFromChange: (newDate: Date | string) => Date | string | void;
  onToChange: (newDate: Date | string) => Date | string | void;
  style?: Style;
}

// Component: Date Range Picker
const DateRangePicker = ({
  onFromChange,
  onToChange,
  mode,
  title,
  style = {
    container: {},
    modal: {},
    modalContainer: {},
    pickerHeaderContainer: {},
    pickerContainer: {},
    doneButton: {},
    cancelText: {},
    inputTitleContainer: {},
    inputTitle: {},
    divider: {},
    toFromDateContainer: {},
    dateInfoContainer: {},
    dateText: {},
    text: {},
  },
}: Props) => {
  // React Hooks: State
  const [fromDateModalVisible, toggleFromDate] = useState(false);
  const [toDateModalVisible, toggleToDate] = useState(false);
  const [androidFromDateVisible, toggleFromDateAndroid] = useState(false);
  const [androidToDateVisible, toggleToDateAndroid] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [tempToDate, setTempToDate] = useState(toDate);
  const [tempFromDate, setTempFromDate] = useState(fromDate);
  const [today, todaySent] = useState(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onFromChange
      onFromChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  });

  // Toggle From Date Modal
  const toggleFromDateModal = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggleFromDate((fromDateModalVisible: boolean) => !fromDateModalVisible);
    }

    // Check Platform (Android)
    else if (Platform.OS === 'android') {
      // React Hook: Toggle Android
      toggleFromDateAndroid(
        (androidFromDateVisible: boolean) => !androidFromDateVisible,
      );
    }
  };

  // Toggle To Date Modal
  const toggleToDateModal = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggleToDate((toDateModalVisible: boolean) => !toDateModalVisible);
    }

    // Check Platform (Android)
    else if (Platform.OS === 'android') {
      // React Hook: Toggle Android
      toggleToDateAndroid(
        (androidToDateVisible: boolean) => !androidToDateVisible,
      );
    }

    // Dismiss Keyboard
    Keyboard.dismiss();
  };

  // Select From Date
  const selectFromDate = (event: any, newDate: Date) => {
    // Check Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // React Hook: Toggle From Date Android
        toggleFromDateAndroid(
          (androidFromDateVisible: boolean) => !androidFromDateVisible,
        );
      }

      // Event Type: Set Date
      else if (event.type === 'set') {
        // React Hook: Toggle Android
        toggleFromDateAndroid(
          (androidFromDateVisible: boolean) => !androidFromDateVisible,
        );

        // React Hook: Set From Date
        setFromDate(newDate);

        // React Props: onChange
        onFromChange(newDate);
      }

      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // React Hook: Toggle Android
        toggleFromDate(false);
      }
    }

    // Check Platform: Android
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // React Hook: Set Temp State
        setTempFromDate(newDate);
      }
    }
  };

  // Select To Date
  const selectToDate = (event: any, newDate: Date) => {
    // Check Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // React Hook: Toggle From Date Android
        toggleToDateAndroid(
          (androidToDateVisible: boolean) => !androidToDateVisible,
        );
      }

      // Event Type: Set Date
      else if (event.type === 'set') {
        // React Hook: Toggle Android
        toggleToDateAndroid(
          (androidToDateVisible: boolean) => !androidToDateVisible,
        );

        // React Hook: Set To Date
        setToDate(newDate);

        // React Props: onChange
        onToChange(newDate);
      }

      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // React Hook: Toggle Android
        toggleToDate(false);
      }
    }

    // Check Platform: Android
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // React Hook: Set Temp State
        setTempToDate(newDate);
      }
    }
  };

  // Render From iOS Date Picker
  const renderFromIOSDatePicker = () => {
    return (
      <RNDateTimePicker
        mode="date"
        value={tempFromDate ? tempFromDate : fromDate}
        onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
      />
    );
  };

  // Press Cancel (From Date)
  const pressCancelFromDate = () => {
    // React Hook: Set Temp Date
    setTempFromDate(fromDate);

    // Toggle Modal
    toggleFromDateModal();
  };

  // Press Done (From Date)
  const pressDoneFromDate = () => {
    // React Hook: Set Date
    setFromDate(tempFromDate);

    // Props: onChange
    onFromChange(tempFromDate);

    // Toggle Modal
    toggleFromDateModal();
  };

  // Render To iOS Date Picker (To Date)
  const renderToIOSDatePicker = () => {
    return (
      <RNDateTimePicker
        mode="date"
        value={tempToDate ? tempToDate : toDate}
        onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
      />
    );
  };

  // Press Cancel (To Date)
  const pressCancelToDate = () => {
    // React Hook: Set Temp Date
    setTempToDate(toDate);

    // Toggle Modal
    toggleToDateModal();
  };

  // Press Done (To Date)
  const pressDoneToDate = () => {
    // React Hook: Set Date
    setToDate(tempToDate);

    // Props: onChange
    onToChange(tempToDate);

    // Toggle Modal
    toggleToDateModal();
  };

  // Render To Date Android Picker
  const renderToDateAndroidPicker = () => {
    if (androidToDateVisible === true) {
      return (
        <RNDateTimePicker
          mode="date"
          display={mode}
          value={toDate}
          onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
        />
      );
    }
  };

  // Render From Date Android Picker
  const renderFromDateAndroidPicker = () => {
    if (androidFromDateVisible === true) {
      return (
        <RNDateTimePicker
          mode="date"
          display={mode}
          value={fromDate}
          onChange={(event: any, newDate: any) =>
            selectFromDate(event, newDate)
          }
        />
      );
    }
  };

  // Format Date
  const formatDate = (date: Date) => {
    // Options
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={{ ...styles.container, ...style.container }}>
      <View
        style={{ ...styles.inputTitleContainer, ...style.inputTitleContainer }}>
        <Text
          style={{
            ...styles.inputTitle,
            ...style.inputTitle,
          }}>
          {title === undefined ? 'Date Range' : title}
        </Text>
      </View>

      <View style={styles.toFromDateContainer}>
        <TouchableOpacity
          onPress={() => toggleFromDateModal()}
          style={styles.dateInfoContainer}>
          <Text style={{ ...styles.dateText, ...style.dateText }}>From</Text>
          <Text style={{ ...styles.text, ...style.text }}>
            {formatDate(fromDate)}
          </Text>
        </TouchableOpacity>

        <View>
          {androidFromDateVisible === true
            ? renderFromDateAndroidPicker()
            : null}
        </View>

        <Modal
          isVisible={fromDateModalVisible}
          style={{ ...styles.modal, ...style.modal }}
          backdropOpacity={0.3}>
          <View style={{ ...styles.modalContainer, ...style.modalContainer }}>
            <View
              style={{
                ...styles.pickerHeaderContainer,
                ...style.pickerHeaderContainer,
              }}>
              <TouchableOpacity onPress={() => pressCancelFromDate()}>
                <Text style={{ ...styles.cancelText, ...style.cancelText }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <View style={{ ...styles.doneButton, ...style.doneButton }}>
                <Button
                  onPress={() => pressDoneFromDate()}
                  title="Done"
                  disabled={fromDate === tempFromDate ? true : false}
                />
              </View>
            </View>

            <View
              style={{ ...styles.pickerContainer, ...style.pickerContainer }}>
              {renderFromIOSDatePicker()}
            </View>
          </View>
        </Modal>
      </View>

      <View style={{ ...styles.divider, ...style.divider }}></View>

      <View
        style={{ ...styles.toFromDateContainer, ...style.toFromDateContainer }}>
        <TouchableOpacity
          onPress={() => toggleToDateModal()}
          style={{ ...styles.dateInfoContainer, ...style.dateInfoContainer }}>
          <Text style={{ ...styles.dateText, ...style.dateText }}>To</Text>
          <Text style={{ ...styles.text, ...style.text }}>
            {String(toDate) === String(fromDate)
              ? 'Select'
              : formatDate(toDate)}
          </Text>
        </TouchableOpacity>

        <View>
          {androidToDateVisible === true ? renderToDateAndroidPicker() : null}
        </View>

        <Modal
          isVisible={toDateModalVisible}
          style={{ ...styles.modal, ...style.modal }}
          backdropOpacity={0.3}>
          <View style={{ ...styles.modalContainer, ...style.modalContainer }}>
            <View
              style={{
                ...styles.pickerHeaderContainer,
                ...style.pickerHeaderContainer,
              }}>
              <TouchableOpacity onPress={() => pressCancelToDate()}>
                <Text style={{ ...styles.cancelText, ...style.cancelText }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <View style={{ ...styles.doneButton, ...style.doneButton }}>
                <Button
                  onPress={() => pressDoneToDate()}
                  title="Done"
                  disabled={toDate === tempToDate ? true : false}
                />
              </View>
            </View>

            <View
              style={{ ...styles.pickerContainer, ...style.pickerContainer }}>
              {renderToIOSDatePicker()}
            </View>
          </View>
        </Modal>
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
    fontSize: 24,
    fontWeight: '700',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
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
    paddingTop: 15,
    paddingBottom: 15,
  },
  dateText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '600',
    color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
  },
  text: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#007AFF',
  },
  arrowForward: {
    color: 'black',
    opacity: 0.3,
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
});

// Exports
export default DateRangePicker;
