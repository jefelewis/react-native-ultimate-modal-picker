// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Appearance, Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript: Types
interface Props {
  title?: string;
  defaultValue?: string;
  items: Array<Item>;
  onChange: (item: any) => any;
}

interface Item {
  label: string;
  value: string;
  key: number | string;
};

// Component: List Picker
const ListPicker = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ tempItem, setTempItem ] = useState('');
  const [ item, setItem ] = useState('');

  // React Hooks: Lifecycle Method
  useEffect(() => {
    // Check If Default Value Exists
    if (props.defaultValue) {
      setItem(props.defaultValue);
    }
    else {
      setItem('Select');
    }
  }, []);

  // Toggle Modal
  const toggleModal = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
    }
  };

  // Select Item
  const selectItem = (item: string) => {
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
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    return (
      <Picker
        selectedValue={tempItem !== undefined ? tempItem : item}
        onValueChange={(item) => selectItem(item)}>
        {props.items.map((item: Item) => {
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
  const pressCancel = () => {
    // Set Temp Item
    setTempItem(item);

    // Toggle Modal
    toggleModal();
  };

  // Press Done
  const pressDone = () => {
    // React Hook: Set Item
    setItem(tempItem);

    // Props: onChange
    props.onChange(tempItem);

    // Toggle Modal
    toggleModal();
  };

  // Render Platform
  const renderPlatform = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}>{props.title === undefined ? 'List' : props.title}</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
            <Text style={styles.fieldText} numberOfLines={1}>{item ? item : 'Select'}</Text>
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
    else if (Platform.OS === 'android') {
      return (
        <View style={styles.container}>
          <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}>{props.title}</Text>
          </View>

          <View style={styles.fieldTextContainer}>
            <Picker
              selectedValue={item}
              style={{height: 60, width: width - 16}}
              onValueChange={(item) => selectItem(item)}
              mode="dropdown">
              {props.items.map((item: Item) => {
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
    backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF',
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
export default ListPicker;
