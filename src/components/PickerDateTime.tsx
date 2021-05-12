// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Imports: TypeScript Types
import { DateTimePickerStyles, Container, LabelText } from '../types/types';

// TypeScript Types: Props
interface Props {
  onChange: (date: Date) => void;
  title?: string;
  darkMode?: boolean,
  customStyle?: DateTimePickerStyles,
};

// Component: Picker (Date/Time)
const PickerDateTime: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState<boolean>(false);
  const [ date, setDate ] = useState<Date>(new Date());
  const [ tempDate, setTempDate ] = useState<Date>(date);
  const [ today , todaySent ] = useState<boolean>(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onFromChange
      props.onChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  }, [today]);

  // Select Date
  const selectDate = (event: any, newDate: Date): void => {
    // Set State
    setTempDate(newDate);
  };

  // Format Date
  // const formatDate = (date: Date): string => {
  //   // Options
  //   const options = {
  //     month: 'short',
  //     day: 'numeric',
  //     year: 'numeric',
  //   };

  //   return date.toLocaleDateString('en-US', options);
  // };

  // // Format Time
  // const formatTime = (date: Date): string => {
  //   // Options
  //   const options = {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //   };

  //   return date.toLocaleTimeString('en-US', options);
  // };


  // Render Picker
  const renderPicker = (): JSX.Element | undefined => {
    // Platform: iOS
    if (Platform.OS === 'ios') {
      return (
        <DateTimePicker
          mode="datetime"
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

  return (
    <View style={renderContainerStyle()}>
      <Text style={renderLabelTextStyle()}>{props.title ? props.title : 'Date'}</Text>

      <>{renderPicker()}</>
    </View>
  );
};

// Exports
export default PickerDateTime;
