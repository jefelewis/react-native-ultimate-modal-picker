// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

// Imports: TypeScript Types
import { ContainerStyle, LabelTextStyle, FieldTextStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle, PickerItem } from '../../types/types';

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

// Component: Dropdown (Measurements)
const DropdownMeasurements: React.FC<Props> = (props): JSX.Element => {
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

  // Measurements
  const measurements: Array<any> = [
    { label: 'Select', value: 'Select' },
    { label: '1/8', value: '1/8' },
    { label: '1/4', value: '1/4' },
    { label: '1/3', value: '1/3' },
    { label: '1/2', value: '1/2' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
    { label: '32', value: '32' },
    { label: '33', value: '33' },
    { label: '34', value: '34' },
    { label: '35', value: '35' },
    { label: '36', value: '36' },
    { label: '37', value: '37' },
    { label: '38', value: '38' },
    { label: '39', value: '39' },
    { label: '40', value: '40' },
    { label: '41', value: '41' },
    { label: '42', value: '42' },
    { label: '43', value: '43' },
    { label: '44', value: '44' },
    { label: '45', value: '45' },
    { label: '46', value: '46' },
    { label: '47', value: '47' },
    { label: '48', value: '48' },
    { label: '49', value: '49' },
    { label: '50', value: '50' },
    { label: '51', value: '51' },
    { label: '52', value: '52' },
    { label: '53', value: '53' },
    { label: '54', value: '54' },
    { label: '55', value: '55' },
    { label: '56', value: '56' },
    { label: '57', value: '57' },
    { label: '58', value: '58' },
    { label: '59', value: '59' },
    { label: '60', value: '60' },
    { label: '61', value: '61' },
    { label: '62', value: '62' },
    { label: '63', value: '63' },
    { label: '64', value: '64' },
    { label: '65', value: '65' },
    { label: '66', value: '66' },
    { label: '67', value: '67' },
    { label: '68', value: '68' },
    { label: '69', value: '69' },
    { label: '70', value: '70' },
    { label: '71', value: '71' },
    { label: '72', value: '72' },
    { label: '73', value: '73' },
    { label: '74', value: '74' },
    { label: '75', value: '75' },
    { label: '76', value: '76' },
    { label: '77', value: '77' },
    { label: '78', value: '78' },
    { label: '79', value: '79' },
    { label: '80', value: '80' },
    { label: '81', value: '81' },
    { label: '82', value: '82' },
    { label: '83', value: '83' },
    { label: '84', value: '84' },
    { label: '85', value: '85' },
    { label: '86', value: '86' },
    { label: '87', value: '87' },
    { label: '88', value: '88' },
    { label: '89', value: '89' },
    { label: '90', value: '90' },
    { label: '91', value: '91' },
    { label: '92', value: '92' },
    { label: '93', value: '93' },
    { label: '94', value: '94' },
    { label: '95', value: '95' },
    { label: '96', value: '96' },
    { label: '97', value: '97' },
    { label: '98', value: '98' },
    { label: '99', value: '99' },
    { label: '100', value: '100' },
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
                  {measurements.map((item: PickerItem) => {
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
            {measurements.map((item: PickerItem) => {
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
export default DropdownMeasurements;
