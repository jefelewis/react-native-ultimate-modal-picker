// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Imports: TypeScript Types
import { ContainerStyle, LabelTextStyle, DividerStyle, TitleTextStyle } from '../../types/types';

// TypeScript Types: Props
interface Props {
  mode: 'calendar' | 'spinner' | 'default';
  onFromChange: (newDate: Date) => void;
  onToChange: (newDate: Date) => void;
  title?: string;
  darkMode?: boolean,
  customStyleContainer?: ContainerStyle,
  customStyleTitleText?: TitleTextStyle,
  customStyleLabelText?: LabelTextStyle,
  customStyleDivider?: DividerStyle,
};

// Component: Picker (Date Range)
const DateRangePicker: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ fromDateModalVisible, toggleFromDate ] = useState<boolean>(false);
  const [ toDateModalVisible, toggleToDate ] = useState<boolean>(false);
  const [ androidFromDateVisible, toggleFromDateAndroid ] = useState<boolean>(false);
  const [ androidToDateVisible, toggleToDateAndroid ] = useState<boolean>(false);
  const [ fromDate, setFromDate ] = useState<Date>(new Date());
  const [ toDate, setToDate ] = useState<Date>(new Date());
  const [ tempToDate, setTempToDate ] = useState<Date>(toDate);
  const [ tempFromDate, setTempFromDate ] = useState<Date>(fromDate);
  const [ today , todaySent ] = useState<boolean>(false);

  // React Hooks: Lifecycle Methods
  useEffect(() => {
    // Send Initial Date
    if (today === false) {
      // Props: onFromChange
      props.onFromChange(new Date());

      // Today's Date Has Been Sent To Parent Component
      todaySent(true);
    }
  }, [today]);

  // Render Container Style
  const renderContainerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          display: 'flex',
          width: width,
          paddingLeft: 16,
          paddingRight: 16,
          backgroundColor: props.customStyleContainer?.containerDark.backgroundColor ? props.customStyleContainer.containerDark.backgroundColor : undefined,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          display: 'flex',
          width: width,
          paddingLeft: 16,
          paddingRight: 16,
          backgroundColor: props.customStyleContainer?.containerLight.backgroundColor ? props.customStyleContainer.containerLight.backgroundColor : undefined,
        }
      );
    }
  };

  // Render Title Text Style
  const renderTitleTextStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          alignSelf: 'flex-start',
          marginBottom: 12,
          fontFamily: props.customStyleTitleText?.titleTextDark.fontFamily ? props.customStyleTitleText.titleTextDark.fontFamily : 'System',
          fontSize: props.customStyleTitleText?.titleTextDark.fontSize ? props.customStyleTitleText.titleTextDark.fontSize : 27,
          fontWeight: props.customStyleTitleText?.titleTextDark.fontWeight ? props.customStyleTitleText.titleTextDark.fontWeight : '700',
          color: props.customStyleTitleText?.titleTextDark.color ? props.customStyleTitleText.titleTextDark.color : '#FFFFFF',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          alignSelf: 'flex-start',
          marginBottom: 12,
          fontFamily: props.customStyleTitleText?.titleTextLight.fontFamily ? props.customStyleTitleText.titleTextLight.fontFamily : 'System',
          fontSize: props.customStyleTitleText?.titleTextLight.fontSize ? props.customStyleTitleText.titleTextLight.fontSize : 27,
          fontWeight: props.customStyleTitleText?.titleTextLight.fontWeight ? props.customStyleTitleText.titleTextLight.fontWeight : '700',
          color: props.customStyleTitleText?.titleTextLight.color ? props.customStyleTitleText.titleTextLight.color : '#000000',
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
          fontSize: props.customStyleLabelText?.labelTextDark.fontSize ? props.customStyleLabelText.labelTextDark.fontSize : 17,
          fontWeight: props.customStyleLabelText?.labelTextDark.fontWeight ? props.customStyleLabelText.labelTextDark.fontWeight : '600',
          color: props.customStyleLabelText?.labelTextDark.color ? props.customStyleLabelText.labelTextDark.color : '#FFFFFF',
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          fontFamily: props.customStyleLabelText?.labelTextLight.fontFamily ? props.customStyleLabelText.labelTextLight.fontFamily : 'System',
          fontSize: props.customStyleLabelText?.labelTextLight.fontSize ? props.customStyleLabelText.labelTextLight.fontSize : 17,
          fontWeight: props.customStyleLabelText?.labelTextLight.fontWeight ? props.customStyleLabelText.labelTextLight.fontWeight : '600',
          color: props.customStyleLabelText?.labelTextLight.color ? props.customStyleLabelText.labelTextLight.color : '#000000',
        }
      );
    }
  };

  // Render Divider Style
  const renderDividerStyle = (): any => {
    // Dark Mode
    if (props.darkMode) {
      return (
        {
          borderColor: props.customStyleDivider?.dividerDark.borderColor ? props.customStyleDivider.dividerDark.borderColor : '#8A8A8E',
          borderBottomWidth: props.customStyleDivider?.dividerDark.borderBottomWidth ? props.customStyleDivider.dividerDark.borderBottomWidth : StyleSheet.hairlineWidth,
          marginTop: props.customStyleDivider?.dividerDark.marginTop ? props.customStyleDivider.dividerDark.marginTop : 16,
          marginBottom: props.customStyleDivider?.dividerDark.marginBottom ? props.customStyleDivider.dividerDark.marginBottom : 16,
        }
      );
    }
    // Light Mode
    else {
      return (
        {
          borderColor: props.customStyleDivider?.dividerLight.borderColor ? props.customStyleDivider.dividerLight.borderColor : '#8D8D93',
          borderBottomWidth: props.customStyleDivider?.dividerLight.borderBottomWidth ? props.customStyleDivider.dividerLight.borderBottomWidth : StyleSheet.hairlineWidth,
          marginTop: props.customStyleDivider?.dividerLight.marginTop ? props.customStyleDivider.dividerLight.marginTop : 16,
          marginBottom: props.customStyleDivider?.dividerLight.marginBottom ? props.customStyleDivider.dividerLight.marginBottom : 16,
        }
      );
    }
  };

  // Select From Date
  const selectFromDate = (event: any, newDate: Date): void => {
    // Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // React Hook: Toggle From Date Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
      }
      // Event Type: Set Date
      else if (event.type === 'set') {
        // React Hook: Toggle Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);

        // React Hook: Set From Date
        setFromDate(newDate);

        // React Props: onChange
        props.onFromChange(newDate);
      }
      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // React Hook: Toggle Android
        toggleFromDate(false);
      }
    }
    // Platform: Android
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // Set State
        setTempFromDate(newDate);
      }
    }
  };

  // Select To Date
  const selectToDate = (event: any, newDate: Date): void => {
    // Platform: Android
    if (Platform.OS === 'android') {
      // Undefined
      if (newDate === undefined) {
        // React Hook: Toggle From Date Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
      }
      // Event Type: Set Date
      else if (event.type === 'set') {
        // React Hook: Toggle Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);

        // React Hook: Set To Date
        setToDate(newDate);

        // React Props: onChange
        props.onToChange(newDate);
      }
      // Event Type: Dismissed
      else if (event.type === 'dismissed') {
        // React Hook: Toggle Android
        toggleToDate(false);
      }
    }
    // Platform: Android
    else if (Platform.OS === 'ios') {
      // Undefined
      if (newDate !== undefined) {
        // Set State
        setTempToDate(newDate);
      }
    }
  };

  // Render iOS Date Picker (From Date)
  const renderFromIOSDatePicker = (): JSX.Element => {
    return (
      <DateTimePicker
        mode="date"
        value={tempFromDate ? tempFromDate : fromDate}
        onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
        style={{width: 140}}
      />
    );
  };

  // Render iOS Date Picker (To Date)
  const renderToIOSDatePicker = (): JSX.Element => {
    return (
      <DateTimePicker
        mode="date"
        value={tempToDate ? tempToDate : toDate}
        onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
        style={{width: 140}}
      />
    );
  };

  // Render Date Android Picker (From Date)
  const renderFromDateAndroidPicker = (): JSX.Element | undefined => {
    if (androidFromDateVisible === true) {
      return (
        <DateTimePicker
          mode="date"
          display={props.mode}
          value={fromDate}
          onChange={(event: any, newDate: any) => selectFromDate(event, newDate)}
        />
      );
    }
  };

  // Render Date Android Picker (To Date)
  const renderToDateAndroidPicker = (): JSX.Element | undefined => {
    if (androidToDateVisible === true) {
      return (
        <DateTimePicker
          mode="date"
          display={props.mode}
          value={toDate}
          onChange={(event: any, newDate: any) => selectToDate(event, newDate)}
        />
      );
    }
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

  return (
    <View style={renderContainerStyle()}>
      <View style={styles.titleContainer}>
        <Text style={renderTitleTextStyle()}>{props.title === undefined ? 'Date Range' : props.title}</Text>
      </View>

      <View style={styles.toFromDateContainer}>
        <Text style={renderLabelTextStyle()}>From</Text>

        <>{renderFromIOSDatePicker()}</>
      </View>

      <View style={renderDividerStyle()}></View>

      <View style={styles.toFromDateContainer}>
        <Text style={renderLabelTextStyle()}>To</Text>

        <>{renderToIOSDatePicker()}</>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width,
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toFromDateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 16,
  },
});

// Exports
export default DateRangePicker;
