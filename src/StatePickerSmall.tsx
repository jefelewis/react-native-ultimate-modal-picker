// Imports: Dependencies
import React, { useState } from 'react';
import { Dimensions, Platform, Picker, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
// import Icon from 'react-native-vector-icons/Ionicons';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title: string;
  onValueChange: (state: string) => string;
  onPress?: () => void;
}

interface Item {
  label: string;
  value: string;
  key: number | string;
  color: string;
};

interface UnitedStates {
  [index: number]: { label: string; value: string };
  map: Function;
}

// Component: State Picker Small
const StatePickerSmall = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ state, setState ] = useState();

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
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {

      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select State
  const selectState = (state: string) => {
    try {
      // React Hook: Set State
      setState(state);

      // React Props: onValueChange
      props.onValueChange(state);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    try {
      return (
        <Picker
          selectedValue={state}
          onValueChange={(state) => selectState(state.label)}>
          {unitedStates.map((item: Item) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.key || item.label}
                color={item.color}
              />
            );
          })}
        </Picker>
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render Platform
  const renderPlatform = ( ) => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        return (
          <View style={styles.container}>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>State</Text>
            </View>

            <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
              <Text style={styles.fieldText}>{state !== undefined ? state : 'Select'}</Text>

              {/* <Icon name="ios-arrow-forward" size={22} style={styles.arrowForward}/> */}
            </TouchableOpacity>

            <Modal isVisible={modalVisible} style={styles.modal}>
              <View style={styles.modalContainer}>
                <View style={styles.pickerHeaderContainer}>
                  <TouchableOpacity onPress={() => toggleModal()} >
                    <Text style={styles.doneText}>Done</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.pickerContainer}>
                  {renderIOSPicker()}
                </View>
              </View>
            </Modal>
          </View>
        )
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        return (
          <View style={styles.container}>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>State</Text>
            </View>

            <View style={styles.fieldTextContainer}>
              <Picker
                selectedValue={state}
                style={{height: 60, width: 90}}
                onValueChange={() => selectState(state.label)}>
                {unitedStates.map((item: Item) => {
                  return (
                    <Picker.Item
                      label={item.label}
                      value={item.value}
                      key={item.key || item.label}
                      color={item.color}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {renderPlatform()}
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width,
    justifyContent: 'center',
    marginLeft: 16,
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
    width: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,   
  },
  fieldText: {
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
export default StatePickerSmall;
