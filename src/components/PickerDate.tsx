// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Imports: TypeScript Types
import { ContainerStyle, LabelTextStyle } from '../types/types';

// TypeScript Types: Props
interface Props {
  mode: 'calendar' | 'spinner' | 'default';
  onChange: (date: Date) => void;
  title?: string;
  darkMode?: boolean,
  customStyleContainer?: ContainerStyle,
  customStyleLabelText?: LabelTextStyle,
};

// Component: Picker (Date)
const PickerDate: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ androidModalVisible, toggleAndroid ] = useState<boolean>(false);
  const [ date, setDate ] = useState<Date>(new Date());
  const [ tempDate, setTempDate ] = useState<Date>(date);
  const [ today, todaySent ] = useState<boolean>(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onChange
      props.onChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  }), [today];

  // Select Date
  const selectDate = (event: any, newDate: Date): void => {
    // Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // Toggle Android
        toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
      }
      // Event Type: Set Date
      else if (event.type === 'set') {
        // Toggle Android
        toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);

        // Set From Date
        setDate(newDate);

        // React Props: onChange
        props.onChange(newDate);
      }
      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // Toggle Android
        toggleAndroid((androidModalVisible: boolean) => !androidModalVisible);
      }
    }
    // Platform: iOS
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // Set State
        setTempDate(newDate);
      }
    }
  };

  // Render Picker
  const renderPicker = (): JSX.Element | undefined => {
    // Platform: Android
    if (Platform.OS === 'android' && androidModalVisible === true) {
      return (
        <DateTimePicker
          mode="date"
          display={props.mode}
          value={date}
          onChange={(event: any, date: any) => selectDate(event, date)}
        />
      );
    }
    // Platform: iOS
    else if (Platform.OS === 'ios') {
      return (
        <DateTimePicker
          mode="date"
          value={tempDate ? tempDate : date}
          onChange={(event: any, newDate: any) => selectDate(event, newDate)}
        />
      );
    }
  };

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

  return (
    <View style={renderContainerStyle()}>
      <Text style={renderLabelTextStyle()}>{props.title ? props.title : 'Date'}</Text>

      <>{renderPicker()}</>
    </View>
  );
};

// Exports
export default PickerDate;
