// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript Types: Props
interface Props {
  items: Array<Item>;
  onChange: (item: string) => void;
  title?: string;
  defaultValue?: string;
  darkMode?: boolean,
  customStyle?: any,
};

// TypeScript Types: Item
interface Item {
  key: number | string;
  label: string;
  value: string;
};

// Component: Picker (List)
const PickerList: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState<boolean>(false);
  const [ tempValue, setTempValue ] = useState<string>('');
  const [ value, setValue ] = useState<string>('');

  // React Hooks: Lifecycle Method
  useEffect(() => {
    // Check If Default Value Exists
    if (props.defaultValue) {
      setValue(props.defaultValue);
    }
    else {
      // Set State
      setValue('Select');
    }
  }, [props.defaultValue]);

  // Render Container Style
  const renderContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          display: 'flex',
          width: width - 32,
          marginLeft: 16,
          paddingRight: 16,
          paddingBottom: 12,
          marginBottom: 12,
          borderColor: props.customStyle?.containerDark ? props.customStyle.containerDark.borderColor : '#8D8D93',
          borderBottomWidth: props.customStyle?.containerDark ? props.customStyle.containerDark.borderBottomWidth : StyleSheet.hairlineWidth,
          backgroundColor: props.customStyle?.containerDark ? props.customStyle.containerDark.backgroundColor : undefined,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          display: 'flex',
          width: width - 32,
          marginLeft: 16,
          paddingRight: 16,
          paddingBottom: 12,
          marginBottom: 12,
          borderColor: props.customStyle?.containerLight ? props.customStyle.containerLight.borderColor : '#8A8A8E',
          borderBottomWidth: props.customStyle?.containerLight ? props.customStyle.containerLight.borderBottomWidth : StyleSheet.hairlineWidth,
          backgroundColor: props.customStyle?.containerLight ? props.customStyle.containerLight.backgroundColor : undefined,
        }
      );
    }
  };

  // Render Label Text Style
  const renderLabelTextStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          fontFamily: props.customStyle?.labelTextDark ? props.customStyle.labelTextDark.fontFamily : 'System',
          fontSize: props.customStyle?.labelTextDark ? props.customStyle.labelTextDark.fontSize : 11,
          fontWeight: props.customStyle?.labelTextDark ? props.customStyle.labelTextDark.fontWeight : '600',
          textTransform: props.customStyle?.labelTextDark ? props.customStyle.labelTextDark.textTransform : 'uppercase',
          color: props.customStyle?.labelTextDark ? props.customStyle.labelTextDark.color : '#8D8D93',
          marginBottom: 7,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyle?.labelTextLight ? props.customStyle.labelTextLight.fontFamily : 'System',
          fontSize: props.customStyle?.labelTextLight ? props.customStyle.labelTextLight.fontSize : 11,
          fontWeight: props.customStyle?.labelTextLight ? props.customStyle.labelTextLight.fontWeight : '600',
          textTransform: props.customStyle?.labelTextLight ? props.customStyle.labelTextLight.textTransform : 'uppercase',
          color: props.customStyle?.labelTextLight ? props.customStyle.labelTextLight.color : '#8A8A8E',
          marginBottom: 7,
        }
      );
    }
  };

  // Render Field Text Style
  const renderFieldTextStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          fontFamily: props.customStyle?.fieldTextDark ? props.customStyle.fieldTextDark.fontFamily : 'System',
          fontSize: props.customStyle?.fieldTextDark ? props.customStyle.fieldTextDark.fontSize : 17,
          fontWeight: props.customStyle?.fieldTextDark ? props.customStyle.fieldTextDark.fontWeight : '400',
          color: props.customStyle?.fieldTextDark ? props.customStyle.fieldTextDark.color : '#FFFFFF',
          alignSelf: 'center',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyle?.fieldTextLight ? props.customStyle.fieldTextLight.fontFamily : 'System',
          fontSize: props.customStyle?.fieldTextLight ? props.customStyle.fieldTextLight.fontSize : 17,
          fontWeight: props.customStyle?.fieldTextLight ? props.customStyle.fieldTextLight.fontWeight : '400',
          color: props.customStyle?.fieldTextLight ? props.customStyle.fieldTextLight.color : '#000000',
          alignSelf: 'center',
        }
      );
    }
  };

  // Render Cancel Text Style
  const renderCancelTextStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          marginLeft: 16,
          fontFamily: props.customStyle?.cancelTextDark ? props.customStyle.cancelTextDark.fontFamily : 'System',
          color: props.customStyle?.cancelTextDark ? props.customStyle.cancelTextDark.color : '#0884FE',
          fontWeight: props.customStyle?.cancelTextDark ? props.customStyle.cancelTextDark.fontWeight : '400',
          fontSize: props.customStyle?.cancelTextDark ? props.customStyle.cancelTextDark.fontSize : 17,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          marginLeft: 16,
          fontFamily: props.customStyle?.cancelTextLight ? props.customStyle.cancelTextLight.fontFamily : 'System',
          color: props.customStyle?.cancelTextLight ? props.customStyle.cancelTextLight.color : '#007AFF',
          fontWeight: props.customStyle?.cancelTextLight ? props.customStyle.cancelTextLight.fontWeight : '400',
          fontSize: props.customStyle?.cancelTextLight ? props.customStyle.cancelTextLight.fontSize : 17,
        }
      );
    }
  };

  // Render Done Text Style
  const renderDoneTextStyle = () => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          fontFamily: 'System',
          color: '#007AFF',
          fontWeight: '600',
          fontSize: 17,
          marginRight: 16,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: 'System',
          color: '#007AFF',
          fontWeight: '600',
          fontSize: 17,
          marginRight: 16,
        }
      );
    }
  };

  // Render Modal Header Container Style
  const renderModalHeaderContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width,
          height: props.customStyle?.modalHeaderContainerDark ? props.customStyle.modalHeaderContainerDark.height : 45,
          backgroundColor: props.customStyle?.modalHeaderContainerDark ? props.customStyle.modalHeaderContainerDark.backgroundColor : '#383838',
          borderColor: props.customStyle?.modalHeaderContainerDark ? props.customStyle.modalHeaderContainerDark.borderColor : '#E9E9EB',
          borderBottomWidth: props.customStyle?.modalHeaderContainerDark ? props.customStyle.modalHeaderContainerDark.borderBottomWidth : StyleSheet.hairlineWidth,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width,
          height: props.customStyle?.modalHeaderContainerLight ? props.customStyle.modalHeaderContainerLight.height : 45,
          backgroundColor: props.customStyle?.modalHeaderContainerLight ? props.customStyle.modalHeaderContainerLight.backgroundColor : '#FFFFFF',
          borderColor: props.customStyle?.modalHeaderContainerLight ? props.customStyle.modalHeaderContainerLight.borderColor : '#CED4DA',
          borderBottomWidth: props.customStyle?.modalHeaderContainerLight ? props.customStyle.modalHeaderContainerLight.borderBottomWidth : StyleSheet.hairlineWidth,
        }
      );
    }
  };

  // Render Modal Content Container Style
  const renderModalContentContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          width: width,
          height: props.customStyle?.modalContentContainerDark ? props.customStyle.modalContentContainerDark.height : 250,
          backgroundColor: props.customStyle?.modalContentContainerDark ? props.customStyle.modalContentContainerDark.backgroundColor : '#121312',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          width: width,
          height: props.customStyle?.modalContentContainerLight ? props.customStyle.modalContentContainerLight.height : 250,
          backgroundColor: props.customStyle?.modalContentContainerLight ? props.customStyle.modalContentContainerLight.backgroundColor : '#FFFFFF',
        }
      );
    }
  };

  // Render Picker Item Text Style
  const renderPickerItemStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return props.customStyle?.pickerItemTextDark ? props.customStyle.pickerItemTextDark.color : '#FFFFFF';
    }
    // Light Mode
    else {
      return props.customStyle?.pickerItemTextLight ? props.customStyle.pickerItemTextLight.color : '#000000';
    }
  };

  // Toggle Modal
  const toggleModal = (): void => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // React Hook: Toggle Modal
      toggle((modalVisible: boolean) => !modalVisible);
    }
  };

  // Select Value
  const selectValue = (value: string) => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      // Set State
      setTempValue(value);
    }
    // Platform: Android
    else if (Platform.OS === 'android') {
      // Set State
      setValue(value);

      // Props: onChange
      props.onChange(value);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = (): JSX.Element => {
    return (
      <Picker
        selectedValue={tempValue !== undefined ? tempValue : value}
        onValueChange={(value: any) => selectValue(value)}>
        {props.items.map((item: Item) => {
          return (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={item.key || item.label}
              color={renderPickerItemStyle()}
            />
          );
        })}
      </Picker>
    );
  };

  // Press Cancel
  const pressCancel = (): void => {
    // Set State
    setTempValue(value);

    // Toggle Modal
    toggleModal();
  };

  // Press Done
  const pressDone = (): void => {
    // Set State
    setValue(tempValue);

    // Props: onChange
    props.onChange(tempValue);

    // Toggle Modal
    toggleModal();
  };

  // Render Picker
  const renderPicker = (): JSX.Element | undefined => {
    // Platform: iOS:
    if (Platform.OS === 'ios') {
      return (
        <View style={renderContainerStyle()}>
          <View style={styles.inputTitleContainer}>
            <Text style={renderLabelTextStyle()}>{props.title === undefined ? 'List' : props.title}</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
            <Text style={renderFieldTextStyle()} numberOfLines={1}>{value ? value : 'Select'}</Text>
          </TouchableOpacity>

          <Modal
            isVisible={modalVisible}
            style={styles.modal}
            backdropOpacity={.30}
          >
            <View style={styles.modalContainer}>
              <View style={renderModalHeaderContainerStyle()}>
                <TouchableOpacity onPress={() => pressCancel()}>
                    <Text style={renderCancelTextStyle()}>Cancel</Text>
                  </TouchableOpacity>

                  <View style={styles.doneButton}>
                    <Button
                      title="Done"
                      onPress={() => pressDone()}
                      disabled={value === tempValue ? true : false}
                    />
                  </View>
              </View>

              <View style={renderModalContentContainerStyle()}>{renderIOSPicker()}</View>
            </View>
          </Modal>
        </View>
      );
    }
    // Platform: Android
    else if (Platform.OS === 'android') {
      return (
        <View style={renderContainerStyle()}>
          <View style={styles.inputTitleContainer}>
            <Text style={renderLabelTextStyle()}>{props.title}</Text>
          </View>

          {/* <View style={styles.fieldTextContainer}> */}
          <View>
            <Picker
              selectedValue={value}
              style={{height: 60, width: width - 16}}
              onValueChange={(value: string) => setValue(value)}
              mode="dropdown">
              {props.items.map((item: Item) => {
                return (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={item.key || item.label}
                    color={renderPickerItemStyle()}
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
    <>{renderPicker()}</>
  );
};

// Styles
const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  inputTitleContainer: {
    width: width - 32,
    marginBottom: 4,
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
});

// Exports
export default PickerList;
