"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports: Dependencies
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const datetimepicker_1 = __importDefault(require("@react-native-community/datetimepicker"));
// import { SlideModal }  from 'react-native-slide-modal';
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
;
// Component: Picker (Date)
const PickerDate = (props) => {
    // React Hooks: State
    const [iosModalVisible, setIosModalVisible] = react_1.useState(false);
    const [androidModalVisible, toggleAndroid] = react_1.useState(false);
    const [date, setDate] = react_1.useState(new Date());
    const [tempDate, setTempDate] = react_1.useState(date);
    const [today, todaySent] = react_1.useState(false);
    // React Hooks: Lifecycle Methods
    react_1.useEffect(() => {
        // Send Initial Date
        if (today === false) {
            // Props: onChange
            props.onChange(new Date());
            // Today's Date Has Been Sent To Parent Component
            todaySent(true);
        }
    }), [today];
    // Select Date
    const selectDate = (event, newDate) => {
        // Platform: Android
        if (react_native_1.Platform.OS === 'android') {
            // Undefined
            if (newDate === undefined) {
                // Toggle Android
                toggleAndroid((androidModalVisible) => !androidModalVisible);
            }
            // Event Type: Set Date
            else if (event.type === 'set') {
                // Toggle Android
                toggleAndroid((androidModalVisible) => !androidModalVisible);
                // Set From Date
                setDate(newDate);
                // React Props: onChange
                props.onChange(newDate);
            }
            // Event Type: Dismissed
            else if (event.type === 'dismissed') {
                // Toggle Android
                toggleAndroid((androidModalVisible) => !androidModalVisible);
            }
        }
        // Platform: iOS
        else if (react_native_1.Platform.OS === 'ios') {
            // Undefined
            if (newDate !== undefined) {
                // Set State
                setTempDate(newDate);
            }
        }
    };
    // Render Picker
    const renderPicker = () => {
        // Platform: Android
        if (react_native_1.Platform.OS === 'android' && androidModalVisible === true) {
            return (<datetimepicker_1.default mode="date" display={props.mode} value={date} onChange={(event, date) => selectDate(event, date)}/>);
        }
        // Platform: iOS
        else if (react_native_1.Platform.OS === 'ios') {
            // Major Version iOS
            const majorVersionIOS = parseInt(react_native_1.Platform.Version, 10);
            // iOS 14
            if (majorVersionIOS >= 14) {
                return (<datetimepicker_1.default mode="date" value={tempDate ? tempDate : date} onChange={(event, newDate) => selectDate(event, newDate)}/>);
            }
            // iOS 13 And Under
            else {
                // <Modal
                //   isVisible={iosModalVisible}
                //   style={styles.modal}
                //   backdropOpacity={.30}
                // >
                //   <View style={styles.modalContainer}>
                //     <View style={styles.pickerHeaderContainer}>
                //       <TouchableOpacity
                //         onPress={() => pressCancel()} >
                //         <Text style={styles.cancelText}>Cancel</Text>
                //       </TouchableOpacity>
                //       <View style={styles.doneButton}>
                //         <Button
                //           onPress={() => pressDone()}
                //           title="Done"
                //           disabled={date === tempDate ? true : false}
                //         />
                //       </View>
                //     </View>
                //     <View style={styles.pickerContainer}>
                //       <DateTimePicker
                //         mode="date"
                //         value={tempDate ? tempDate : date}
                //         onChange={(event: any, newDate: any) => selectDate(event, newDate)}
                //       />
                //     </View>
                //   </View>
                // </Modal>
            }
        }
    };
    // Render Container Style
    const renderContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                display: 'flex',
                width: width - 32,
                marginLeft: 16,
                paddingRight: 16,
                paddingBottom: 12,
                marginBottom: 12,
                borderColor: props.customStyleContainer?.containerDark.borderColor ? props.customStyleContainer.containerDark.borderColor : '#8D8D93',
                borderBottomWidth: props.customStyleContainer?.containerDark.borderBottomWidth ? props.customStyleContainer.containerDark.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
                backgroundColor: props.customStyleContainer?.containerDark.backgroundColor ? props.customStyleContainer.containerDark.backgroundColor : undefined,
            });
        }
        // Light Mode
        else {
            return ({
                display: 'flex',
                width: width - 32,
                marginLeft: 16,
                paddingRight: 16,
                paddingBottom: 12,
                marginBottom: 12,
                borderColor: props.customStyleContainer?.containerLight.borderColor ? props.customStyleContainer.containerLight.borderColor : '#8A8A8E',
                borderBottomWidth: props.customStyleContainer?.containerLight.borderBottomWidth ? props.customStyleContainer.containerLight.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
                backgroundColor: props.customStyleContainer?.containerLight.backgroundColor ? props.customStyleContainer.containerLight.backgroundColor : undefined,
            });
        }
    };
    // Render Label Text Style
    const renderLabelTextStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                fontFamily: props.customStyleLabelText?.labelTextDark.fontFamily ? props.customStyleLabelText.labelTextDark.fontFamily : 'System',
                fontSize: props.customStyleLabelText?.labelTextDark.fontSize ? props.customStyleLabelText.labelTextDark.fontSize : 11,
                fontWeight: props.customStyleLabelText?.labelTextDark.fontWeight ? props.customStyleLabelText.labelTextDark.fontWeight : '600',
                textTransform: props.customStyleLabelText?.labelTextDark.textTransform ? props.customStyleLabelText.labelTextDark.textTransform : 'uppercase',
                color: props.customStyleLabelText?.labelTextDark.color ? props.customStyleLabelText.labelTextDark.color : '#8D8D93',
                marginBottom: 7,
            });
        }
        // Light Mode
        else {
            return ({
                fontFamily: props.customStyleLabelText?.labelTextLight.fontFamily ? props.customStyleLabelText.labelTextLight.fontFamily : 'System',
                fontSize: props.customStyleLabelText?.labelTextLight.fontSize ? props.customStyleLabelText.labelTextLight.fontSize : 11,
                fontWeight: props.customStyleLabelText?.labelTextLight.fontWeight ? props.customStyleLabelText.labelTextLight.fontWeight : '600',
                textTransform: props.customStyleLabelText?.labelTextLight.textTransform ? props.customStyleLabelText.labelTextLight.textTransform : 'uppercase',
                color: props.customStyleLabelText?.labelTextLight.color ? props.customStyleLabelText.labelTextLight.color : '#8A8A8E',
                marginBottom: 7,
            });
        }
    };
    return (<react_native_1.View style={renderContainerStyle()}>
      <react_native_1.Text style={renderLabelTextStyle()}>{props.title ? props.title : 'Date'}</react_native_1.Text>

      <>{renderPicker()}</>
    </react_native_1.View>);
};
// Exports
exports.default = PickerDate;
