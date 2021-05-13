// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

// Imports: TypeScript Types
import { ContainerStyle, LabelTextStyle, FieldTextStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle, PickerValue } from '../../types/types';

// TypeScript Types: Props
interface Props {
  onChange: (value: string) => void;
  title?: string;
  defaultValue?: string;
  darkMode?: boolean,
  customStyleContainer?: ContainerStyle,
  customStyleLabelText?: LabelTextStyle,
  customStyleFieldText?: FieldTextStyle,
  customStyleModalHeaderContainer?: ModalHeaderContainerStyle,
  customStyleCancelText?: CancelTextStyle,
  customStyleDoneText?: DoneTextStyle,
  customStyleModalContentContainer?: ModalContentContainerStyle,
  customStylePickerItemText?: PickerItemTextStyle,
};

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Component: Dropdown (United States)
const DropdownUnitedStates: React.FC<Props> = (props): JSX.Element => {
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

  // United States
  const unitedStates: Array<PickerValue> = [
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
          borderColor: props.customStyleContainer?.containerDark.borderColor ? props.customStyleContainer.containerDark.borderColor : '#8D8D93',
          borderBottomWidth: props.customStyleContainer?.containerDark.borderBottomWidth ? props.customStyleContainer.containerDark.borderBottomWidth : StyleSheet.hairlineWidth,
          backgroundColor: props.customStyleContainer?.containerDark.backgroundColor ? props.customStyleContainer.containerDark.backgroundColor : undefined,
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
          borderColor: props.customStyleContainer?.containerLight.borderColor ? props.customStyleContainer.containerLight.borderColor : '#8A8A8E',
          borderBottomWidth: props.customStyleContainer?.containerLight.borderBottomWidth ? props.customStyleContainer.containerLight.borderBottomWidth : StyleSheet.hairlineWidth,
          backgroundColor: props.customStyleContainer?.containerLight.backgroundColor ? props.customStyleContainer.containerLight.backgroundColor : undefined,
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
          fontFamily: props.customStyleLabelText?.labelTextDark.fontFamily ? props.customStyleLabelText.labelTextDark.fontFamily : 'System',
          fontSize: props.customStyleLabelText?.labelTextDark.fontSize ? props.customStyleLabelText.labelTextDark.fontSize : 11,
          fontWeight: props.customStyleLabelText?.labelTextDark.fontWeight ? props.customStyleLabelText.labelTextDark.fontWeight : '600',
          textTransform: props.customStyleLabelText?.labelTextDark.textTransform ? props.customStyleLabelText.labelTextDark.textTransform : 'uppercase',
          color: props.customStyleLabelText?.labelTextDark.color ? props.customStyleLabelText.labelTextDark.color : '#8D8D93',
          marginBottom: 7,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyleLabelText?.labelTextLight.fontFamily ? props.customStyleLabelText.labelTextLight.fontFamily : 'System',
          fontSize: props.customStyleLabelText?.labelTextLight.fontSize ? props.customStyleLabelText.labelTextLight.fontSize : 11,
          fontWeight: props.customStyleLabelText?.labelTextLight.fontWeight ? props.customStyleLabelText.labelTextLight.fontWeight : '600',
          textTransform: props.customStyleLabelText?.labelTextLight.textTransform ? props.customStyleLabelText.labelTextLight.textTransform : 'uppercase',
          color: props.customStyleLabelText?.labelTextLight.color ? props.customStyleLabelText.labelTextLight.color : '#8A8A8E',
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
          fontFamily: props.customStyleFieldText?.fieldTextDark.fontFamily ? props.customStyleFieldText.fieldTextDark.fontFamily : 'System',
          fontSize: props.customStyleFieldText?.fieldTextDark.fontSize ? props.customStyleFieldText.fieldTextDark.fontSize : 17,
          fontWeight: props.customStyleFieldText?.fieldTextDark.fontWeight ? props.customStyleFieldText.fieldTextDark.fontWeight : '400',
          color: props.customStyleFieldText?.fieldTextDark.color ? props.customStyleFieldText.fieldTextDark.color : '#FFFFFF',
          alignSelf: 'center',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyleFieldText?.fieldTextLight.fontFamily ? props.customStyleFieldText.fieldTextLight.fontFamily : 'System',
          fontSize: props.customStyleFieldText?.fieldTextLight.fontSize ? props.customStyleFieldText.fieldTextLight.fontSize : 17,
          fontWeight: props.customStyleFieldText?.fieldTextLight.fontWeight ? props.customStyleFieldText.fieldTextLight.fontWeight : '400',
          color: props.customStyleFieldText?.fieldTextLight.color ? props.customStyleFieldText.fieldTextLight.color : '#000000',
          alignSelf: 'center',
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
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.height ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.height : 45,
          backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.backgroundColor : '#383838',
          borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderColor : '#E9E9EB',
          borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderBottomWidth : StyleSheet.hairlineWidth,
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
          height: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.height ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.height : 45,
          backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.backgroundColor : '#FFFFFF',
          borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderColor : '#CED4DA',
          borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderBottomWidth : StyleSheet.hairlineWidth,
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
          fontFamily: props.customStyleCancelText?.cancelTextDark.fontFamily ? props.customStyleCancelText.cancelTextDark.fontFamily : 'System',
          color: props.customStyleCancelText?.cancelTextDark.color ? props.customStyleCancelText.cancelTextDark.color : '#0884FE',
          fontWeight: props.customStyleCancelText?.cancelTextDark.fontWeight ? props.customStyleCancelText.cancelTextDark.fontWeight : '400',
          fontSize: props.customStyleCancelText?.cancelTextDark.fontSize ? props.customStyleCancelText.cancelTextDark.fontSize : 17,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          marginLeft: 16,
          fontFamily: props.customStyleCancelText?.cancelTextLight.fontFamily ? props.customStyleCancelText.cancelTextLight.fontFamily : 'System',
          color: props.customStyleCancelText?.cancelTextLight.color ? props.customStyleCancelText.cancelTextLight.color : '#007AFF',
          fontWeight: props.customStyleCancelText?.cancelTextLight.fontWeight ? props.customStyleCancelText.cancelTextLight.fontWeight : '400',
          fontSize: props.customStyleCancelText?.cancelTextLight.fontSize ? props.customStyleCancelText.cancelTextLight.fontSize : 17,
        }
      );
    }
  };

  // Render Done Text Style
  const renderDoneTextStyle = (): string => {
    // Dark Mode
    if (props.darkMode) {
      return props.customStylePickerItemText?.pickerItemTextDark.color ? props.customStylePickerItemText.pickerItemTextDark.color : '#0884FE';
    }
    // Light Mode
    else {
      return props.customStylePickerItemText?.pickerItemTextLight.color ? props.customStylePickerItemText.pickerItemTextLight.color : '#007AFF';
    }
  };

  // Render Modal Content Container Style
  const renderModalContentContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          width: width,
          height: props.customStyleModalContentContainer?.modalContentContainerDark.height ? props.customStyleModalContentContainer.modalContentContainerDark.height : 250,
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerDark.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerDark.backgroundColor : '#121312',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          width: width,
          height: props.customStyleModalContentContainer?.modalContentContainerLight.height ? props.customStyleModalContentContainer.modalContentContainerLight.height : 250,
          backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
        }
      );
    }
  };

  // Render Picker Item Text Style
  const renderPickerItemStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          color: props.customStylePickerItemText?.pickerItemTextDark.color ? props.customStylePickerItemText.pickerItemTextDark.color : '#FFFFFF',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          color: props.customStylePickerItemText?.pickerItemTextLight.color ? props.customStylePickerItemText.pickerItemTextLight.color : '#000000',
        }
      );
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

  // Render Picker
  const renderPicker = (): JSX.Element | undefined => {
    // Platform: iOS:
    if (Platform.OS === 'ios') {
      return (
        <View style={renderContainerStyle()}>
          <View style={styles.labelContainer}>
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

                  <View style={styles.doneButtonContainer}>
                    <Button
                      title="Done"
                      onPress={() => pressDone()}
                      disabled={value === tempValue ? true : false}
                      color={renderDoneTextStyle()}
                    />
                  </View>
              </View>

              <View style={renderModalContentContainerStyle()}>
                <Picker
                  selectedValue={tempValue !== undefined ? tempValue : value}
                  onValueChange={(value: string) => selectValue(value)}
                >
                  {unitedStates.map((item: PickerValue, i: number) => {
                    return (
                      <Picker.Item
                        key={i}
                        label={item.label}
                        value={item.value}
                        color={renderPickerItemStyle()}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
    // Platform: Android
    else if (Platform.OS === 'android') {
      return (
        <View style={renderContainerStyle()}>
          <View style={styles.labelContainer}>
            <Text style={renderLabelTextStyle()}>{props.title}</Text>
          </View>

          <Picker
            mode="dropdown"
            selectedValue={value}
            style={{height: 60, width: width - 16}}
            onValueChange={(value: string) => setValue(value)}
          >
            {unitedStates.map((item: PickerValue, i: number) => {
              return (
                <Picker.Item
                  key={i}
                  label={item.label}
                  value={item.value}
                  color={renderPickerItemStyle()}
                />
              );
            })}
          </Picker>
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
  doneButtonContainer: {
    marginRight: 7,
  },
  labelContainer: {
    width: width - 32,
    marginBottom: 4,
  },
  fieldTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

// Exports
export default DropdownUnitedStates;
