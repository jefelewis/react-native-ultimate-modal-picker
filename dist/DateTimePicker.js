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
// Component: Datetime Picker
const DatetimePicker = ({ onChange, title, style = {
    container: {},
    modal: {},
    modalContainer: {},
    pickerHeaderContainer: {},
    pickerContainer: {},
    doneButton: {},
    cancelText: {},
    inputTitleContainer: {},
    inputTitle: {},
    fieldTextContainer: {},
    fieldText: {},
}, }) => {
    // React Hooks: State
    const [modalVisible, toggle] = react_1.useState(false);
    const [date, setDate] = react_1.useState(new Date());
    const [tempDate, setTempDate] = react_1.useState(date);
    const [today, todaySent] = react_1.useState(false);
    // React Hooks: Lifecycle Methods
    react_1.useEffect(() => {
        // Send Initial Date
        if (today === false) {
            // Props: onFromChange
            onChange(new Date());
            // Today's Date Has Been Sent To Parent Component
            todaySent(true);
        }
    });
    // Toggle Modal
    const toggleModal = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Toggle Modal
            toggle((modalVisible) => !modalVisible);
        }
        // Dismiss Keyboard
        react_native_1.Keyboard.dismiss();
    };
    // Select Date
    const selectDate = (event, newDate) => {
        // React Hook: Set Temp State
        setTempDate(newDate);
    };
    // Render iOS Picker
    const renderIOSPicker = () => {
        return (react_1.default.createElement(datetimepicker_1.default, { mode: "datetime", value: tempDate ? tempDate : date, onChange: (event, newDate) => selectDate(event, newDate) }));
    };
    // Press Cancel
    const pressCancel = () => {
        // React Hook: Set Temp Date
        setTempDate(date);
        // Toggle Modal
        toggleModal();
        // Dismiss Keyboard
        react_native_1.Keyboard.dismiss();
    };
    // Press Done
    const pressDone = () => {
        // React Hook: Set Date
        setDate(tempDate);
        // Props: onChange
        onChange(tempDate);
        // Toggle Modal
        toggleModal();
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
    // Format Time
    const formatTime = (date) => {
        // Options
        const options = {
            hour: 'numeric',
            minute: 'numeric',
        };
        return date.toLocaleTimeString('en-US', options);
    };
    // Render Platform
    const renderPlatform = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS == 'ios') {
            return (react_1.default.createElement(react_native_1.View, { style: { ...styles.container, ...style.container } },
                react_1.default.createElement(react_native_1.View, { style: {
                        ...styles.inputTitleContainer,
                        ...style.inputTitleContainer,
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: {
                            ...styles.inputTitle,
                            ...style.inputTitle,
                        } }, title === undefined ? 'Date/Time' : title)),
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => toggleModal(), style: {
                        ...styles.fieldTextContainer,
                        ...style.fieldTextContainer,
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: { ...styles.fieldText, ...style.fieldText }, numberOfLines: 1 }, date ? `${formatDate(date)} ${formatTime(date)}` : 'Select')),
                react_1.default.createElement(react_native_modal_1.default, { isVisible: modalVisible, style: { ...styles.modal, ...style.modal }, backdropOpacity: 0.3 },
                    react_1.default.createElement(react_native_1.View, { style: { ...styles.modalContainer, ...style.modalContainer } },
                        react_1.default.createElement(react_native_1.View, { style: {
                                ...styles.pickerHeaderContainer,
                                ...style.pickerHeaderContainer,
                            } },
                            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => pressCancel() },
                                react_1.default.createElement(react_native_1.Text, { style: { ...styles.cancelText, ...style.cancelText } }, "Cancel")),
                            react_1.default.createElement(react_native_1.View, { style: { ...styles.doneButton, ...style.doneButton } },
                                react_1.default.createElement(react_native_1.Button, { onPress: () => pressDone(), title: "Done", disabled: date === tempDate ? true : false }))),
                        react_1.default.createElement(react_native_1.View, { style: { ...styles.pickerContainer, ...style.pickerContainer } }, renderIOSPicker())))));
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            return null;
        }
    };
    return react_1.default.createElement(react_native_1.View, null, renderPlatform());
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
    stateContainer: {
        alignItems: 'center',
        width: 75,
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    inputTitleContainer: {
        width: 75,
        marginBottom: 4,
    },
    inputTitle: {
        color: '#7D7D7D',
        borderColor: '#7D7D7D',
        fontSize: 10,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    fieldTextContainer: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    fieldText: {
        width: width - 32 - 20,
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: '400',
        color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        alignSelf: 'center',
    },
    arrowForward: {
        color: 'black',
        opacity: 0.3,
        marginRight: 7,
    },
});
// Exports
exports.default = DatetimePicker;
