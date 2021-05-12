// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

// Imports: TypeScript Types
import { PickerItem } from '../types/types';

// TypeScript Types: Props
interface Props {
  items: Array<PickerItem>;
  onChange: (value: string) => void;
  title?: string;
  defaultValue?: string;
  darkMode?: boolean,
  customStyleContainer?: any,
  customStyleLabelText?: any,
  customStyleFieldText?: any,
  customStyleCancelText?: any,
  customStyleModalHeaderContainer?: any,
  customStyleModalContentContainer?: any,
  customStylePickerItemText?: any,
};

// Screen Dimensions
const { height, width } = Dimensions.get('window');

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
          borderColor: props.customStyleContainer?.containerDark ? props.customStyleContainer.containerDark.borderColor : '#8D8D93',
          borderBottomWidth: props.customStyleContainer?.containerDark ? props.customStyleContainer.containerDark.borderBottomWidth : StyleSheet.hairlineWidth,
          backgroundColor: props.customStyleContainer?.containerDark ? props.customStyleContainer.containerDark.backgroundColor : undefined,
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
          borderColor: props.customStyleContainer?.containerLight ? props.customStyleContainer.containerLight.borderColor : '#8A8A8E',
          borderBottomWidth: props.customStyleContainer?.containerLight ? props.customStyleContainer.containerLight.borderBottomWidth : StyleSheet.hairlineWidth,
          backgroundColor: props.customStyleContainer?.containerLight ? props.customStyleContainer.containerLight.backgroundColor : undefined,
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
          fontFamily: props.customStyleLabelText?.labelTextDark ? props.customStyleLabelText.labelTextDark.fontFamily : 'System',
          fontSize: props.customStyleLabelText?.labelTextDark ? props.customStyleLabelText.labelTextDark.fontSize : 11,
          fontWeight: props.customStyleLabelText?.labelTextDark ? props.customStyleLabelText.labelTextDark.fontWeight : '600',
          textTransform: props.customStyleLabelText?.labelTextDark ? props.customStyleLabelText.labelTextDark.textTransform : 'uppercase',
          color: props.customStyleLabelText?.labelTextDark ? props.customStyleLabelText.labelTextDark.color : '#8D8D93',
          marginBottom: 7,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyleLabelText?.labelTextLight ? props.customStyleLabelText.labelTextLight.fontFamily : 'System',
          fontSize: props.customStyleLabelText?.labelTextLight ? props.customStyleLabelText.labelTextLight.fontSize : 11,
          fontWeight: props.customStyleLabelText?.labelTextLight ? props.customStyleLabelText.labelTextLight.fontWeight : '600',
          textTransform: props.customStyleLabelText?.labelTextLight ? props.customStyleLabelText.labelTextLight.textTransform : 'uppercase',
          color: props.customStyleLabelText?.labelTextLight ? props.customStyleLabelText.labelTextLight.color : '#8A8A8E',
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
          fontFamily: props.customStyleFieldText?.fieldTextDark ? props.customStyleFieldText.fieldTextDark.fontFamily : 'System',
          fontSize: props.customStyleFieldText?.fieldTextDark ? props.customStyleFieldText.fieldTextDark.fontSize : 17,
          fontWeight: props.customStyleFieldText?.fieldTextDark ? props.customStyleFieldText.fieldTextDark.fontWeight : '400',
          color: props.customStyleFieldText?.fieldTextDark ? props.customStyleFieldText.fieldTextDark.color : '#FFFFFF',
          alignSelf: 'center',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyleFieldText?.fieldTextLight ? props.customStyleFieldText.fieldTextLight.fontFamily : 'System',
          fontSize: props.customStyleFieldText?.fieldTextLight ? props.customStyleFieldText.fieldTextLight.fontSize : 17,
          fontWeight: props.customStyleFieldText?.fieldTextLight ? props.customStyleFieldText.fieldTextLight.fontWeight : '400',
          color: props.customStyleFieldText?.fieldTextLight ? props.customStyleFieldText.fieldTextLight.color : '#000000',
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
          fontFamily: props.customStyleCancelText?.cancelTextDark ? props.customStyleCancelText.cancelTextDark.fontFamily : 'System',
          color: props.customStyleCancelText?.cancelTextDark ? props.customStyleCancelText.cancelTextDark.color : '#0884FE',
          fontWeight: props.customStyleCancelText?.cancelTextDark ? props.customStyleCancelText.cancelTextDark.fontWeight : '400',
          fontSize: props.customStyleCancelText?.cancelTextDark ? props.customStyleCancelText.cancelTextDark.fontSize : 17,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          marginLeft: 16,
          fontFamily: props.customStyleCancelText?.cancelTextLight ? props.customStyleCancelText.cancelTextLight.fontFamily : 'System',
          color: props.customStyleCancelText?.cancelTextLight ? props.customStyleCancelText.cancelTextLight.color : '#007AFF',
          fontWeight: props.customStyleCancelText?.cancelTextLight ? props.customStyleCancelText.cancelTextLight.fontWeight : '400',
          fontSize: props.customStyleCancelText?.cancelTextLight ? props.customStyleCancelText.cancelTextLight.fontSize : 17,
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
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerDark ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.height : 45,
          backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.backgroundColor : '#383838',
          borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderColor : '#E9E9EB',
          borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerDark ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderBottomWidth : StyleSheet.hairlineWidth,
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
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerLight ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.height : 45,
          backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.backgroundColor : '#FFFFFF',
          borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderColor : '#CED4DA',
          borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerLight ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderBottomWidth : StyleSheet.hairlineWidth,
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
          height: props.customStyleModalContentContainer?.modalContentContainerDark ? props.customStyleModalContentContainer.modalContentContainerDark.height : 250,
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerDark ? props.customStyleModalContentContainer.modalContentContainerDark.backgroundColor : '#121312',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          width: width,
          height: props.customStyleModalContentContainer?.modalContentContainerLight ? props.customStyleModalContentContainer.modalContentContainerLight.height : 250,
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
        }
      );
    }
  };

  // Render Picker Item Text Style
  const renderPickerItemStyle = (): string => {
    // Dark Mode
    if (props.darkMode) {
      return props.customStylePickerItemText?.pickerItemTextDark ? props.customStylePickerItemText.pickerItemTextDark.color : '#FFFFFF';
    }
    // Light Mode
    else {
      return props.customStylePickerItemText?.pickerItemTextLight ? props.customStylePickerItemText.pickerItemTextLight.color : '#000000';
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
        onValueChange={(value: string) => selectValue(value)}>
        {props.items.map((item: PickerItem) => {
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
                      // style={renderDoneTextStyle()}
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
              {props.items.map((item: PickerItem) => {
                return (
                  <Picker.Item
                    key={item.key || item.label}
                    label={item.label}
                    value={item.value}
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
