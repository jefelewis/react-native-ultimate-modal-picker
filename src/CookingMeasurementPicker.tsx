// Imports: Dependencies
import React, { useState } from 'react';
import { Button, Dimensions, Platform, Picker, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
// import Icon from 'react-native-vector-icons/Ionicons';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title?: string;
  onChange: (item: any) => any;
}

interface Item {
  label: string;
  value: number | string;
  key: number | string;
};

// Component: Cooking Measurement Picker
const CookingMeasurementPicker = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ tempItem, setTempItem ] = useState();
  const [ item, setItem ] = useState();

  // Cooking Measurements
  const cookingMeasurements = [
    { label: 'Select', value: 'Select' },
    { label: '1/8', value: '1/8' },
    { label: '1/4', value: '1/4' },
    { label: '1/3', value: '1/3' },
    { label: '1/2', value: '1/2' },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
    { label: '11', value: 11 },
    { label: '12', value: 12 },
    { label: '13', value: 13 },
    { label: '14', value: 14 },
    { label: '15', value: 15 },
    { label: '16', value: 16 },
    { label: '17', value: 17 },
    { label: '18', value: 18 },
    { label: '19', value: 19 },
    { label: '20', value: 20 },
    { label: '21', value: 21 },
    { label: '22', value: 22 },
    { label: '23', value: 23 },
    { label: '24', value: 24 },
    { label: '25', value: 25 },
    { label: '26', value: 26 },
    { label: '27', value: 27 },
    { label: '28', value: 28 },
    { label: '29', value: 29 },
    { label: '30', value: 30 },
    { label: '31', value: 31 },
    { label: '32', value: 32 },
    { label: '33', value: 33 },
    { label: '34', value: 34 },
    { label: '35', value: 35 },
    { label: '36', value: 36 },
    { label: '37', value: 37 },
    { label: '38', value: 38 },
    { label: '39', value: 39 },
    { label: '40', value: 40 },
    { label: '41', value: 41 },
    { label: '42', value: 42 },
    { label: '43', value: 43 },
    { label: '44', value: 44 },
    { label: '45', value: 45 },
    { label: '46', value: 46 },
    { label: '47', value: 47 },
    { label: '48', value: 48 },
    { label: '49', value: 49 },
    { label: '50', value: 50 },
    { label: '51', value: 51 },
    { label: '52', value: 52 },
    { label: '53', value: 53 },
    { label: '54', value: 54 },
    { label: '55', value: 55 },
    { label: '56', value: 56 },
    { label: '57', value: 57 },
    { label: '58', value: 58 },
    { label: '59', value: 59 },
    { label: '60', value: 60 },
    { label: '61', value: 61 },
    { label: '62', value: 62 },
    { label: '63', value: 63 },
    { label: '64', value: 64 },
    { label: '65', value: 65 },
    { label: '66', value: 66 },
    { label: '67', value: 67 },
    { label: '68', value: 68 },
    { label: '69', value: 69 },
    { label: '70', value: 70 },
    { label: '71', value: 71 },
    { label: '72', value: 72 },
    { label: '73', value: 73 },
    { label: '74', value: 74 },
    { label: '75', value: 75 },
    { label: '76', value: 76 },
    { label: '77', value: 77 },
    { label: '78', value: 78 },
    { label: '79', value: 79 },
    { label: '80', value: 80 },
    { label: '81', value: 81 },
    { label: '82', value: 82 },
    { label: '83', value: 83 },
    { label: '84', value: 84 },
    { label: '85', value: 85 },
    { label: '86', value: 86 },
    { label: '87', value: 87 },
    { label: '88', value: 88 },
    { label: '89', value: 89 },
    { label: '90', value: 90 },
    { label: '91', value: 91 },
    { label: '92', value: 92 },
    { label: '93', value: 93 },
    { label: '94', value: 94 },
    { label: '95', value: 95 },
    { label: '96', value: 96 },
    { label: '97', value: 97 },
    { label: '98', value: 98 },
    { label: '99', value: 99 },
    { label: '100', value: 100 },
  ];

  // Toggle Modal
  const toggleModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select Item
  const selectItem = (item: string | number) => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Set Temp State
        setTempItem(item);
      }

      // Check Platform (Android)
      else if (Platform.OS === 'android') {
        // React Hook: Set Item
        setItem(item);

        // React Props: onChange
        props.onChange(item);
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
        <Picker
          selectedValue={tempItem !== undefined ? tempItem : item}
          onValueChange={(item) => selectItem(item)}>
          {cookingMeasurements.map((item: any) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.key || item.label}
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

  // Press Cancel
  const pressCancel = () => {
    try {
      // Set Temp Item
      setTempItem(item);

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
      // React Hook: Set Item
      setItem(tempItem);

      // Props: onChange
      props.onChange(tempItem);

      // Toggle Modal
      toggleModal();
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render Platform
  const renderPlatform = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        return (
          <View style={styles.container}>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>{props.title === undefined ? 'Number' : props.title}</Text>
            </View>

            <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
              <Text style={styles.fieldText} numberOfLines={1}>{item !== undefined ? item : 'Select'}</Text>
            </TouchableOpacity>

            <Modal
              isVisible={modalVisible}
              style={styles.modal}
              backdropOpacity={.30}
            >
              <View style={styles.modalContainer}>
                <View style={styles.pickerHeaderContainer}>
                  <TouchableOpacity onPress={() => pressCancel()} >
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>

                    <View style={styles.doneButton}>
                      <Button
                        onPress={() => pressDone()}
                        title="Done"
                        disabled={item === tempItem ? true : false}
                      />
                    </View>
                </View>

                <View style={styles.pickerContainer}>{renderIOSPicker()}</View>
              </View>
            </Modal>
          </View>
        );
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        return (
          <View style={styles.container}>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>{props.title}</Text>
            </View>

            <View style={styles.fieldTextContainer}>
              <Picker
                selectedValue={item}
                style={{height: 60, width: width - 16}}
                onValueChange={selectItem}
                mode="dropdown">
                {cookingMeasurements.map((item: any) => {
                  return (
                    <Picker.Item
                      label={item.label}
                      value={item.value}
                      key={item.key || item.label}
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
    <View>{renderPlatform()}</View>
  )
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
    height: 45,
    width: width,
    backgroundColor: '#FAFAF8',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerContainer: {
    height: 250,
    width: width,
    backgroundColor: 'white',
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
    width: width - 32,
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
export default CookingMeasurementPicker;
