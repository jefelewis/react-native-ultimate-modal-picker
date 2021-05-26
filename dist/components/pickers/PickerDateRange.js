"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const datetimepicker_1 = __importDefault(require("@react-native-community/datetimepicker"));
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
;
// Component: Picker (Date Range)
const DateRangePicker = (props) => {
    // React Hooks: State
    const [fromDateModalVisible, toggleFromDate] = react_1.useState(false);
    const [toDateModalVisible, toggleToDate] = react_1.useState(false);
    const [androidFromDateVisible, toggleFromDateAndroid] = react_1.useState(false);
    const [androidToDateVisible, toggleToDateAndroid] = react_1.useState(false);
    const [fromDate, setFromDate] = react_1.useState(new Date());
    const [toDate, setToDate] = react_1.useState(new Date());
    const [tempToDate, setTempToDate] = react_1.useState(toDate);
    const [tempFromDate, setTempFromDate] = react_1.useState(fromDate);
    const [today, todaySent] = react_1.useState(false);
    // React Hooks: Lifecycle Methods
    react_1.useEffect(() => {
        // Send Initial Date
        if (today === false) {
            // Props: onFromChange
            props.onFromChange(new Date());
            // Today's Date Has Been Sent To Parent Component
            todaySent(true);
        }
    }, [today]);
    // Render Container Style
    const renderContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                display: 'flex',
                width: width,
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: props.customStyleContainer?.containerDark.backgroundColor ? props.customStyleContainer.containerDark.backgroundColor : undefined,
            });
        }
        // Light Mode
        else {
            return ({
                display: 'flex',
                width: width,
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: props.customStyleContainer?.containerLight.backgroundColor ? props.customStyleContainer.containerLight.backgroundColor : undefined,
            });
        }
    };
    // Render Title Text Style
    const renderTitleTextStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                alignSelf: 'flex-start',
                marginBottom: 12,
                fontFamily: props.customStyleTitleText?.titleTextDark.fontFamily ? props.customStyleTitleText.titleTextDark.fontFamily : 'System',
                fontSize: props.customStyleTitleText?.titleTextDark.fontSize ? props.customStyleTitleText.titleTextDark.fontSize : 27,
                fontWeight: props.customStyleTitleText?.titleTextDark.fontWeight ? props.customStyleTitleText.titleTextDark.fontWeight : '700',
                color: props.customStyleTitleText?.titleTextDark.color ? props.customStyleTitleText.titleTextDark.color : '#FFFFFF',
            });
        }
        // Light Mode
        else {
            return ({
                alignSelf: 'flex-start',
                marginBottom: 12,
                fontFamily: props.customStyleTitleText?.titleTextLight.fontFamily ? props.customStyleTitleText.titleTextLight.fontFamily : 'System',
                fontSize: props.customStyleTitleText?.titleTextLight.fontSize ? props.customStyleTitleText.titleTextLight.fontSize : 27,
                fontWeight: props.customStyleTitleText?.titleTextLight.fontWeight ? props.customStyleTitleText.titleTextLight.fontWeight : '700',
                color: props.customStyleTitleText?.titleTextLight.color ? props.customStyleTitleText.titleTextLight.color : '#000000',
            });
        }
    };
    // Render Label Text Style
    const renderLabelTextStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                fontFamily: props.customStyleLabelText?.labelTextDark.fontFamily ? props.customStyleLabelText.labelTextDark.fontFamily : 'System',
                fontSize: props.customStyleLabelText?.labelTextDark.fontSize ? props.customStyleLabelText.labelTextDark.fontSize : 17,
                fontWeight: props.customStyleLabelText?.labelTextDark.fontWeight ? props.customStyleLabelText.labelTextDark.fontWeight : '600',
                color: props.customStyleLabelText?.labelTextDark.color ? props.customStyleLabelText.labelTextDark.color : '#FFFFFF',
            });
        }
        // Light Mode
        else {
            return ({
                fontFamily: props.customStyleLabelText?.labelTextLight.fontFamily ? props.customStyleLabelText.labelTextLight.fontFamily : 'System',
                fontSize: props.customStyleLabelText?.labelTextLight.fontSize ? props.customStyleLabelText.labelTextLight.fontSize : 17,
                fontWeight: props.customStyleLabelText?.labelTextLight.fontWeight ? props.customStyleLabelText.labelTextLight.fontWeight : '600',
                color: props.customStyleLabelText?.labelTextLight.color ? props.customStyleLabelText.labelTextLight.color : '#000000',
            });
        }
    };
    // Render Divider Style
    const renderDividerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                borderColor: props.customStyleDivider?.dividerDark.borderColor ? props.customStyleDivider.dividerDark.borderColor : '#8A8A8E',
                borderBottomWidth: props.customStyleDivider?.dividerDark.borderBottomWidth ? props.customStyleDivider.dividerDark.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
                marginTop: props.customStyleDivider?.dividerDark.marginTop ? props.customStyleDivider.dividerDark.marginTop : 16,
                marginBottom: props.customStyleDivider?.dividerDark.marginBottom ? props.customStyleDivider.dividerDark.marginBottom : 16,
            });
        }
        // Light Mode
        else {
            return ({
                borderColor: props.customStyleDivider?.dividerLight.borderColor ? props.customStyleDivider.dividerLight.borderColor : '#8D8D93',
                borderBottomWidth: props.customStyleDivider?.dividerLight.borderBottomWidth ? props.customStyleDivider.dividerLight.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
                marginTop: props.customStyleDivider?.dividerLight.marginTop ? props.customStyleDivider.dividerLight.marginTop : 16,
                marginBottom: props.customStyleDivider?.dividerLight.marginBottom ? props.customStyleDivider.dividerLight.marginBottom : 16,
            });
        }
    };
    // Select From Date
    const selectFromDate = (event, newDate) => {
        // Platform: Android
        if (react_native_1.Platform.OS === 'android') {
            // Undefined
            if (newDate === undefined) {
                // React Hook: Toggle From Date Android
                toggleFromDateAndroid((androidFromDateVisible) => !androidFromDateVisible);
            }
            // Event Type: Set Date
            else if (event.type === 'set') {
                // React Hook: Toggle Android
                toggleFromDateAndroid((androidFromDateVisible) => !androidFromDateVisible);
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
        else if (react_native_1.Platform.OS === 'ios') {
            // Undefined
            if (newDate !== undefined) {
                // Set State
                setTempFromDate(newDate);
            }
        }
    };
    // Select To Date
    const selectToDate = (event, newDate) => {
        // Platform: Android
        if (react_native_1.Platform.OS === 'android') {
            // Undefined
            if (newDate === undefined) {
                // React Hook: Toggle From Date Android
                toggleToDateAndroid((androidToDateVisible) => !androidToDateVisible);
            }
            // Event Type: Set Date
            else if (event.type === 'set') {
                // React Hook: Toggle Android
                toggleToDateAndroid((androidToDateVisible) => !androidToDateVisible);
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
        else if (react_native_1.Platform.OS === 'ios') {
            // Undefined
            if (newDate !== undefined) {
                // Set State
                setTempToDate(newDate);
            }
        }
    };
    // Render iOS Date Picker (From Date)
    const renderFromIOSDatePicker = () => {
        return (jsx_runtime_1.jsx(datetimepicker_1.default, { mode: "date", value: tempFromDate ? tempFromDate : fromDate, onChange: (event, newDate) => selectFromDate(event, newDate), style: { width: 140 } }, void 0));
    };
    // Render iOS Date Picker (To Date)
    const renderToIOSDatePicker = () => {
        return (jsx_runtime_1.jsx(datetimepicker_1.default, { mode: "date", value: tempToDate ? tempToDate : toDate, onChange: (event, newDate) => selectToDate(event, newDate), style: { width: 140 } }, void 0));
    };
    // Render Date Android Picker (From Date)
    const renderFromDateAndroidPicker = () => {
        if (androidFromDateVisible === true) {
            return (jsx_runtime_1.jsx(datetimepicker_1.default, { mode: "date", display: props.mode, value: fromDate, onChange: (event, newDate) => selectFromDate(event, newDate) }, void 0));
        }
    };
    // Render Date Android Picker (To Date)
    const renderToDateAndroidPicker = () => {
        if (androidToDateVisible === true) {
            return (jsx_runtime_1.jsx(datetimepicker_1.default, { mode: "date", display: props.mode, value: toDate, onChange: (event, newDate) => selectToDate(event, newDate) }, void 0));
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
    return (jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: renderContainerStyle() }, { children: [jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: styles.titleContainer }, { children: jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderTitleTextStyle() }, { children: props.title === undefined ? 'Date Range' : props.title }), void 0) }), void 0),
            jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: styles.toFromDateContainer }, { children: [jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderLabelTextStyle() }, { children: "From" }), void 0),
                    jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: renderFromIOSDatePicker() }, void 0)] }), void 0),
            jsx_runtime_1.jsx(react_native_1.View, { style: renderDividerStyle() }, void 0),
            jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: styles.toFromDateContainer }, { children: [jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderLabelTextStyle() }, { children: "To" }), void 0),
                    jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: renderToIOSDatePicker() }, void 0)] }), void 0)] }), void 0));
};
// Styles
const styles = react_native_1.StyleSheet.create({
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
exports.default = DateRangePicker;
