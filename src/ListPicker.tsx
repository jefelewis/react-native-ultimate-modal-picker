// Imports: Dependencies
import React, { useState, useEffect } from 'react';
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
  defaultValue?: string;
  items: Array<Item>;
  onChange: (item: any) => any;
  style?: Style;
}

interface Item {
  label: string;
  value: string;
  key: number | string;
}

// Component: List Picker
const ListPicker = ({
  defaultValue,
  items,
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
  const [tempItem, setTempItem] = useState('');
  const [item, setItem] = useState('');

  // React Hooks: Lifecycle Method
  useEffect(() => {
    // Check If Default Value Exists
    if (defaultValue) {
      setItem(defaultValue);
    } else {
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
      onChange(item);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = () => {
    return (
      <Picker
        selectedValue={tempItem !== undefined ? tempItem : item}
        onValueChange={(item: any) => selectItem(item)}>
        {items.map((item: Item) => {
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
    onChange(tempItem);

    // Toggle Modal
    toggleModal();
  };

  // Render Platform
  const renderPlatform = () => {
    // Check Platform (iOS)
    if (Platform.OS === 'ios') {
      return (
        <View
          style={{
            ...styles.container,
            ...style.container,
          }}>
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
              {title === undefined ? 'List' : title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              ...styles.fieldTextContainer,
              ...style.fieldTextContainer,
            }}>
            <Text
              style={{ ...styles.fieldText, ...style.fieldText }}
              numberOfLines={1}>
              {item ? item : 'Select'}
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
                    disabled={item === tempItem ? true : false}
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
        <View
          style={{
            ...styles.container,
            ...style.container,
          }}>
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
              {title}
            </Text>
          </View>

          <View
            style={{
              ...styles.fieldTextContainer,
              ...style.fieldTextContainer,
            }}>
            <Picker
              selectedValue={item}
              style={{ height: 60, width: width - 16 }}
              onValueChange={(item: any) => selectItem(item)}
              mode="dropdown">
              {items.map((item: Item) => {
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
    opacity: 0.3,
    marginRight: 7,
  },
});

// Exports
export default ListPicker;
