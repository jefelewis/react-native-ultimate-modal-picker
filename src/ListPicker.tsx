// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Appearance, Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript Types: Props
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
const ListPicker: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState<boolean>(false);
  const [ tempItem, setTempItem ] = useState<string>('');
  const [ item, setItem ] = useState<string>('');

  // React Hooks: Lifecycle Method
  useEffect(() => {
    // Check If Default Value Exists
    if (props.defaultValue) {
      setItem(props.defaultValue);
    }
    else {
      // Set State
      setItem('Select');
    }
  }, [props.defaultValue]);

  // Toggle Modal
  const toggleModal = (): void => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
    }
  };

  // Select Item
  const selectItem = (item: string) => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // Set State
      setTempItem(item);
    }

    // Platform: Android
    else if (Platform.OS === 'android') {
      // Set State
      setItem(item);

      // Props: onChange
      props.onChange(item);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = (): JSX.Element => {
    return (
      <Picker
        selectedValue={tempItem !== undefined ? tempItem : item}
        onValueChange={(item: any) => selectItem(item)}>
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
  const pressCancel = (): void => {
    // Set State
    setTempItem(item);

    // Toggle Modal
    toggleModal();
  };

  // Press Done
  const pressDone = (): void => {
    // Set State
    setItem(tempItem);

    // Props: onChange
    props.onChange(tempItem);

    // Toggle Modal
    toggleModal();
  };

  // Render Platform
  const renderPlatform = (): JSX.Element | undefined => {
    // Platform: iOS:
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
                <TouchableOpacity onPress={() => pressCancel()}>
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
    // Platform: Android
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
              onValueChange={(item: any) => selectItem(item)}
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
