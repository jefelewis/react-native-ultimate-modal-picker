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
const picker_1 = require("@react-native-community/picker");
const react_native_modal_1 = __importDefault(require("react-native-modal"));
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
// Dark Mode
const colorScheme = react_native_1.Appearance.getColorScheme();
;
// Component: State Picker Small
const StatePickerSmall = (props) => {
    // React Hooks: State
    const [modalVisible, toggle] = react_1.useState(false);
    const [tempState, setTempState] = react_1.useState();
    const [state, setState] = react_1.useState();
    // United States
    const unitedStates = [
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
    // Toggle Modal
    const toggleModal = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Toggle Modal
            toggle((modalVisible) => !modalVisible);
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            // Do Nothing (Android Uses Dropdown List)
        }
    };
    // Select State
    const selectState = (value) => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Set Temp State
            setTempState(value);
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            // React Hook: Set State
            setState(value);
            // React Props: onChange
            props.onChange(value);
        }
    };
    // Render iOS Picker
    const renderIOSPicker = () => {
        return (react_1.default.createElement(picker_1.Picker, { selectedValue: tempState !== undefined ? tempState : state, onValueChange: (value) => selectState(value) }, unitedStates.map((state) => {
            return (react_1.default.createElement(picker_1.Picker.Item, { label: state.label, value: state.value, color: colorScheme === 'dark' ? '#FFFFFF' : '#000000', key: state.key || state.label }));
        })));
    };
    // Press Cancel
    const pressCancel = () => {
        // Do Nothing To State
        setTempState(state);
        // Toggle Modal
        toggleModal();
    };
    // Press Done
    const pressDone = () => {
        // React Hook: Set State
        setState(tempState);
        // Props: onChange
        props.onChange(tempState);
        // Toggle Modal
        toggleModal();
    };
    // Render Platform
    const renderPlatform = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            return (react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.View, { style: styles.inputTitleContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.inputTitle }, props.title === undefined ? 'State' : props.title)),
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => toggleModal(), style: styles.fieldTextContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.fieldText }, state !== undefined ? state : 'Select')),
                react_1.default.createElement(react_native_modal_1.default, { isVisible: modalVisible, style: styles.modal, backdropOpacity: .30 },
                    react_1.default.createElement(react_native_1.View, { style: styles.modalContainer },
                        react_1.default.createElement(react_native_1.View, { style: styles.pickerHeaderContainer },
                            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => pressCancel() },
                                react_1.default.createElement(react_native_1.Text, { style: styles.cancelText }, "Cancel")),
                            react_1.default.createElement(react_native_1.View, { style: styles.doneButton },
                                react_1.default.createElement(react_native_1.Button, { onPress: () => pressDone(), title: "Done", disabled: state === tempState ? true : false }))),
                        react_1.default.createElement(react_native_1.View, { style: styles.pickerContainer }, renderIOSPicker())))));
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            return (react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.View, { style: styles.inputTitleContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.inputTitle }, "State")),
                react_1.default.createElement(react_native_1.View, { style: styles.fieldTextContainer },
                    react_1.default.createElement(picker_1.Picker, { selectedValue: state, style: { height: 60, width: width - 16 }, onValueChange: (state) => selectState(state) }, unitedStates.map((state) => {
                        return (react_1.default.createElement(picker_1.Picker.Item, { label: state.label, value: state.value, color: colorScheme === 'dark' ? '#FFFFFF' : '#000000', key: state.key || state.label }));
                    })))));
        }
    };
    return (react_1.default.createElement(react_native_1.View, null, renderPlatform()));
};
// Styles
const styles = react_native_1.StyleSheet.create({
    container: {
        display: 'flex',
        width: width,
        paddingLeft: 16,
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
        width: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
    fieldText: {
        fontFamily: 'System',
        fontSize: 17,
        fontWeight: '400',
        color: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        alignSelf: 'center',
    },
    arrowForward: {
        color: 'black',
        opacity: .3,
        marginRight: 7,
    },
});
// Exports
exports.default = StatePickerSmall;
