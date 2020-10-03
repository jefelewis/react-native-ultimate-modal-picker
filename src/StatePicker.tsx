// Imports: Dependencies
import React, { useState } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import {
  Appearance,
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
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
  fieldTextContainer?: ViewStyle;
  fieldText?: TextStyle;
}
interface Props {
  title?: string;
  onChange: (state: any) => any;
  style?: Style;
}

interface Item {
  label: string;
  value: string;
  key: number | string;
}

interface UnitedStates {
  [key: number]: State;
  map: (state: any) => any;
}

interface State {
  label: string;
  value: string;
}

// Component: State Picker
const StatePicker = ({
  onChange,
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
    fieldTextContainer: {},
    fieldText: {},
  },
}: Props) => {
  // React Hooks: State
  const [modalVisible, toggle] = useState(false);
  const [tempState, setTempState] = useState();
  const [state, setState] = useState();

  // United States
  const unitedStates: UnitedStates = [
    { label: 'AL', value: 'AL' },
    { label: 'AK', value: 'AK' },
    { label: 'AZ', value: 'AZ' },
    { label: 'AR', value: 'AR' },
    { label: 'CA', value: 'CA' },
    { label: 'CO', value: 'CO' },
    { label: 'CT', value: 'CT' },
    { label: 'DE', value: 'DE' },
    { label: 'FL', value: 'FL' },
    { label: 'GA', value: 'GA' },
    { label: 'HI', value: 'HI' },
    { label: 'ID', value: 'ID' },
    { label: 'IL', value: 'IL' },
    { label: 'IN', value: 'IN' },
    { label: 'IA', value: 'IA' },
    { label: 'KS', value: 'KS' },
    { label: 'KY', value: 'KY' },
    { label: 'LA', value: 'LA' },
    { label: 'ME', value: 'ME' },
    { label: 'MD', value: 'MD' },
    { label: 'MA', value: 'MA' },
    { label: 'MI', value: 'MI' },
    { label: 'MN', value: 'MN' },
    { label: 'MS', value: 'MS' },
    { label: 'MO', value: 'MO' },
    { label: 'MT', value: 'MT' },
    { label: 'NE', value: 'NE' },
    { label: 'NV', value: 'NV' },
    { label: 'NH', value: 'NH' },
    { label: 'NJ', value: 'NJ' },
    { label: 'NM', value: 'NM' },
    { label: 'NY', value: 'NY' },
    { label: 'NC', value: 'NC' },
    { label: 'ND', value: 'ND' },
    { label: 'OH', value: 'OH' },
    { label: 'OK', value: 'OK' },
    { label: 'OR', value: 'OR' },
    { label: 'PA', value: 'PA' },
    { label: 'RI', value: 'RI' },
    { label: 'SC', value: 'SC' },
    { label: 'SD', value: 'SD' },
    { label: 'TN', value: 'TN' },
    { label: 'TX', value: 'TX' },
    { label: 'UT', value: 'UT' },
    { label: 'VT', value: 'VT' },
    { label: 'VA', value: 'VA' },
    { label: 'WA', value: 'WA' },
    { label: 'WV', value: 'WV' },
    { label: 'WI', value: 'WI' },
    { label: 'WY', value: 'WY' },
  ];

  // Toggle Modal
  const toggleModal = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
    }

    // Check Platform (Android)
    else if (Platform.OS === 'android') {
      // Do Nothing (Android Uses Dropdown List)
    }
  };

  // Select State
  const selectState = (value: any) => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      // React Hook: Set Temp State
      setTempState(value);
    }

    // Check Platform (Android)
    else if (Platform.OS === 'android') {
      // React Hook: Set State
      setState(value);

      // React Props: onChange
      onChange(value);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    return (
      <Picker
        selectedValue={tempState !== undefined ? tempState : state}
        onValueChange={(value) => selectState(value)}>
        {unitedStates.map((state: any) => {
          return (
            <Picker.Item
              label={state.label}
              value={state.value}
              color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
              key={state.key || state.label}
            />
          );
        })}
      </Picker>
    );
  };

  // Press Cancel
  const pressCancel = () => {
    // Do Nothing To State
    setTempState(state);

    // Toggle Modal
    toggleModal();
  };

  // Press Done
  const pressDone = () => {
    // React Hook: Set State
    setState(tempState);

    // Props: onChange
    onChange(tempState);

    // Toggle Modal
    toggleModal();
  };

  // Render Platform
  const renderPlatform = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      return (
        <View style={{ ...styles.container, ...style.container }}>
          <View
            style={{
              ...styles.inputTitleContainer,
              ...style.inputTitleContainer,
            }}>
            <Text
              style={{
                ...styles.inputTitle,
                ...style.inputTitle,
              }}>
              {title === undefined ? 'State' : title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              ...styles.fieldTextContainer,
              ...style.fieldTextContainer,
            }}>
            <Text style={{ ...styles.fieldText, ...style.fieldText }}>
              {state !== undefined ? state : 'Select'}
            </Text>
          </TouchableOpacity>

          <Modal
            isVisible={modalVisible}
            style={{ ...styles.modal, ...style.modal }}
            backdropOpacity={0.3}>
            <View style={{ ...styles.modalContainer, ...style.modalContainer }}>
              <View
                style={{
                  ...styles.pickerHeaderContainer,
                  ...style.pickerHeaderContainer,
                }}>
                <TouchableOpacity onPress={() => pressCancel()}>
                  <Text style={{ ...styles.cancelText, ...style.cancelText }}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                <View style={{ ...styles.doneButton, ...style.doneButton }}>
                  <Button
                    onPress={() => pressDone()}
                    title="Done"
                    disabled={state === tempState ? true : false}
                  />
                </View>
              </View>

              <View
                style={{ ...styles.pickerContainer, ...style.pickerContainer }}>
                {renderIOSPicker()}
              </View>
            </View>
          </Modal>
        </View>
      );
    }

    // Check Platform (Android)
    else if (Platform.OS === 'android') {
      return (
        <View style={{ ...styles.container, ...style.container }}>
          <View
            style={{
              ...styles.inputTitleContainer,
              ...style.inputTitleContainer,
            }}>
            <Text
              style={{
                ...styles.inputTitle,
                ...style.inputTitle,
              }}>
              State
            </Text>
          </View>

          <View
            style={{
              ...styles.fieldTextContainer,
              ...style.fieldTextContainer,
            }}>
            <Picker
              selectedValue={state}
              style={{ height: 60, width: width - 16 }}
              onValueChange={(state) => selectState(state)}>
              {unitedStates.map((state: any) => {
                return (
                  <Picker.Item
                    label={state.label}
                    value={state.value}
                    color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
                    key={state.key || state.label}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      );
    }
  };

  return <View>{renderPlatform()}</View>;
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
    opacity: 0.3,
    marginRight: 7,
  },
});

// Exports
export default StatePicker;
