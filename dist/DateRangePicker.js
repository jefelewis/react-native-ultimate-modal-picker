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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
const react_native_modal_1 = __importDefault(require("react-native-modal"));
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
// Dark Mode
const colorScheme = react_native_1.Appearance.getColorScheme();
// Component: Date Range Picker
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
    });
    // Toggle From Date Modal
    const toggleFromDateModal = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Toggle Modal
            toggleFromDate((fromDateModalVisible) => !fromDateModalVisible);
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            // React Hook: Toggle Android
            toggleFromDateAndroid((androidFromDateVisible) => !androidFromDateVisible);
        }
    };
    // Toggle To Date Modal
    const toggleToDateModal = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Toggle Modal
            toggleToDate((toDateModalVisible) => !toDateModalVisible);
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            // React Hook: Toggle Android
            toggleToDateAndroid((androidToDateVisible) => !androidToDateVisible);
        }
        // Dismiss Keyboard
        react_native_1.Keyboard.dismiss();
    };
    // Select From Date
    const selectFromDate = (event, newDate) => {
        // Check Platform: Android
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
        // Check Platform: Android
        else if (react_native_1.Platform.OS === 'ios') {
            // Undefined
            if (newDate !== undefined) {
                // React Hook: Set Temp State
                setTempFromDate(newDate);
            }
        }
    };
    // Select To Date
    const selectToDate = (event, newDate) => {
        // Check Platform: Android
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
        // Check Platform: Android
        else if (react_native_1.Platform.OS === 'ios') {
            // Undefined
            if (newDate !== undefined) {
                // React Hook: Set Temp State
                setTempToDate(newDate);
            }
        }
    };
    // Render From iOS Date Picker
    const renderFromIOSDatePicker = () => {
        return (react_1.default.createElement(datetimepicker_1.default, { mode: "date", value: tempFromDate ? tempFromDate : fromDate, onChange: (event, newDate) => selectFromDate(event, newDate) }));
    };
    // Press Cancel (From Date)
    const pressCancelFromDate = () => {
        // React Hook: Set Temp Date
        setTempFromDate(fromDate);
        // Toggle Modal
        toggleFromDateModal();
    };
    // Press Done (From Date)
    const pressDoneFromDate = () => {
        // React Hook: Set Date
        setFromDate(tempFromDate);
        // Props: onChange
        props.onFromChange(tempFromDate);
        // Toggle Modal
        toggleFromDateModal();
    };
    // Render To iOS Date Picker (To Date)
    const renderToIOSDatePicker = () => {
        return (react_1.default.createElement(datetimepicker_1.default, { mode: "date", value: tempToDate ? tempToDate : toDate, onChange: (event, newDate) => selectToDate(event, newDate) }));
    };
    // Press Cancel (To Date)
    const pressCancelToDate = () => {
        // React Hook: Set Temp Date
        setTempToDate(toDate);
        // Toggle Modal
        toggleToDateModal();
    };
    // Press Done (To Date)
    const pressDoneToDate = () => {
        // React Hook: Set Date
        setToDate(tempToDate);
        // Props: onChange
        props.onToChange(tempToDate);
        // Toggle Modal
        toggleToDateModal();
    };
    // Render To Date Android Picker
    const renderToDateAndroidPicker = () => {
        if (androidToDateVisible === true) {
            return (react_1.default.createElement(datetimepicker_1.default, { mode: "date", display: props.mode, value: toDate, onChange: (event, newDate) => selectToDate(event, newDate) }));
        }
    };
    // Render From Date Android Picker
    const renderFromDateAndroidPicker = () => {
        if (androidFromDateVisible === true) {
            return (react_1.default.createElement(datetimepicker_1.default, { mode: "date", display: props.mode, value: fromDate, onChange: (event, newDate) => selectFromDate(event, newDate) }));
        }
    };
    // Format Date
    const formatDate = (date) => {
        // Options
        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.inputTitleContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles.inputTitle }, props.title === undefined ? 'Date Range' : props.title)),
        react_1.default.createElement(react_native_1.View, { style: styles.toFromDateContainer },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => toggleFromDateModal(), style: styles.dateInfoContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.dateText }, "From"),
                react_1.default.createElement(react_native_1.Text, { style: styles.text }, formatDate(fromDate))),
            react_1.default.createElement(react_native_1.View, null, androidFromDateVisible === true ? renderFromDateAndroidPicker() : null),
            react_1.default.createElement(react_native_modal_1.default, { isVisible: fromDateModalVisible, style: styles.modal, backdropOpacity: .30 },
                react_1.default.createElement(react_native_1.View, { style: styles.modalContainer },
                    react_1.default.createElement(react_native_1.View, { style: styles.pickerHeaderContainer },
                        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => pressCancelFromDate() },
                            react_1.default.createElement(react_native_1.Text, { style: styles.cancelText }, "Cancel")),
                        react_1.default.createElement(react_native_1.View, { style: styles.doneButton },
                            react_1.default.createElement(react_native_1.Button, { onPress: () => pressDoneFromDate(), title: "Done", disabled: fromDate === tempFromDate ? true : false }))),
                    react_1.default.createElement(react_native_1.View, { style: styles.pickerContainer }, renderFromIOSDatePicker())))),
        react_1.default.createElement(react_native_1.View, { style: styles.divider }),
        react_1.default.createElement(react_native_1.View, { style: styles.toFromDateContainer },
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => toggleToDateModal(), style: styles.dateInfoContainer },
                react_1.default.createElement(react_native_1.Text, { style: styles.dateText }, "To"),
                react_1.default.createElement(react_native_1.Text, { style: styles.text }, String(toDate) === String(fromDate) ? 'Select' : formatDate(toDate))),
            react_1.default.createElement(react_native_1.View, null, androidToDateVisible === true ? renderToDateAndroidPicker() : null),
            react_1.default.createElement(react_native_modal_1.default, { isVisible: toDateModalVisible, style: styles.modal, backdropOpacity: .30 },
                react_1.default.createElement(react_native_1.View, { style: styles.modalContainer },
                    react_1.default.createElement(react_native_1.View, { style: styles.pickerHeaderContainer },
                        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => pressCancelToDate() },
                            react_1.default.createElement(react_native_1.Text, { style: styles.cancelText }, "Cancel")),
                        react_1.default.createElement(react_native_1.View, { style: styles.doneButton },
                            react_1.default.createElement(react_native_1.Button, { onPress: () => pressDoneToDate(), title: "Done", disabled: toDate === tempToDate ? true : false }))),
                    react_1.default.createElement(react_native_1.View, { style: styles.pickerContainer }, renderToIOSDatePicker()))))));
};
// Styles
const styles = react_native_1.StyleSheet.create({
    container: {
        display: 'flex',
        width: width,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF',
    },
    inputTitleContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputTitle: {
        alignSelf: 'flex-start',
        fontFamily: 'System',
        fontSize: 24,
        fontWeight: '700',
        color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    toFromDateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    dateInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width - 32,
        paddingTop: 15,
        paddingBottom: 15,
    },
    dateText: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: '600',
        color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    text: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: '400',
        color: '#007AFF',
    },
    arrowForward: {
        color: 'black',
        opacity: .3,
        marginRight: 7,
    },
    divider: {
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        marginTop: 12,
        marginBottom: 12,
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
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
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
});
// Exports
exports.default = DateRangePicker;
