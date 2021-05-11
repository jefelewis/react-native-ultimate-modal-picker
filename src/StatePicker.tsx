// Imports: Dependencies
import React, { useState } from 'react';
import { Appearance, Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript Type: State
export type State = 'AL' | 'AK' | 'AS' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'FM' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MH' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'MP' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'PW' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UM' | 'UT' | 'VT' | 'VI' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';

// TypeScript Types: Props
interface Props {
  title?: string;
  onChange: (state: State) => void;
}

interface Item {
  label: string;
  value: string;
};

interface UnitedStates {
  // [key: number]: State;
  // map: (state: State) => void;
}



// Component: State Picker
const StatePicker: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState<boolean>(false);
  const [ tempState, setTempState ] = useState<State | ''>('');
  const [ state, setState ] = useState<State | ''>('');

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
  const toggleModal = (): void => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
    }
    // Platform: Android
    else if (Platform.OS === 'android') {
      // Do Nothing (Android Uses Dropdown List)
    }
  };

  // Select State
  const selectState = (value: any): void => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // Set State
      setTempState(value);
    }
    // Platform: Android
    else if (Platform.OS === 'android') {
      // Set State
      setState(value);

      // Props: onChange
      props.onChange(value);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = (): JSX.Element => {
    return (
      <Picker
        selectedValue={tempState !== undefined ? tempState : state}
        onValueChange={(value) => selectState(value)}>
        {unitedStates.map((item: Item) => {
          return (
            <Picker.Item
              label={item.label}
              value={item.value}
              color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
              key={item.key || item.label}
            />
          );
        })}
      </Picker>
    );
  };

  // Press Cancel
  const pressCancel = (): void => {
    // Do Nothing To State
    setTempState(state);

    // Toggle Modal
    toggleModal();
  };

  // Press Done
  const pressDone = (): void => {
    // Set State
    setState(tempState);

    // Props: onChange
    props.onChange(tempState);

    // Toggle Modal
    toggleModal();
  };

  // Render Platform
  const renderPlatform = () => {
    // Platform: iOS)
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}>{props.title === undefined ? 'State' : props.title}</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
            <Text style={styles.fieldText}>{state !== undefined ? state : 'Select'}</Text>
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
                    disabled={state === tempState ? true : false}
                  />
                </View>
              </View>

              <View style={styles.pickerContainer}>{renderIOSPicker()}</View>
            </View>
          </Modal>
        </View>
      );
    }

    // Platform: Android)
    else if (Platform.OS === 'android') {
      return (
        <View style={styles.container}>
          <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}>State</Text>
          </View>

          <View style={styles.fieldTextContainer}>
            <Picker
              selectedValue={state}
              style={{height: 60, width: width - 16}}
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

  return (
    <View>{renderPlatform()}</View>
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
export default StatePicker;
