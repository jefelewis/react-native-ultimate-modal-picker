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
// Component: List Picker
const ListPicker = (props) => {
    // React Hooks: State
    const [modalVisible, toggle] = react_1.useState(false);
    const [tempItem, setTempItem] = react_1.useState('');
    const [item, setItem] = react_1.useState('');
    // React Hooks: Lifecycle Method
    react_1.useEffect(() => {
        // Check If Default Value Exists
        if (props.defaultValue) {
            setItem(props.defaultValue);
        }
        else {
            setItem('Select');
        }
    }, []);
    // Toggle Modal
    const toggleModal = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Toggle Modal
            toggle((modalVisible) => !modalVisible);
        }
    };
    // Select Item
    const selectItem = (item) => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Set Temp State
            setTempItem(item);
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            // React Hook: Set Item
            setItem(item);
            // React Props: onChange
            props.onChange(item);
        }
    };
    // Render iOS Picker
    const renderIOSPicker = () => {
        return (react_1.default.createElement(picker_1.Picker, { selectedValue: tempItem !== undefined ? tempItem : item, onValueChange: (item) => selectItem(item) }, props.items.map((item) => {
            return (react_1.default.createElement(picker_1.Picker.Item, { label: item.label, value: item.value, color: colorScheme === 'dark' ? '#FFFFFF' : '#000000', key: item.key || item.label }));
        })));
    };
    // Press Cancel
    const pressCancel = () => {
        // Set Temp Item
        setTempItem(item);
        // Toggle Modal
        toggleModal();
    };
    // Press Done
    const pressDone = () => {
        // React Hook: Set Item
        setItem(tempItem);
        // Props: onChange
        props.onChange(tempItem);
        // Toggle Modal
        toggleModal();
    };
    // Render Platform
    const renderPlatform = () => {
        // Check Platform (iOS)
        if (react_native_1.Platform.OS === 'ios') {
            return (react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.View, { style: styles.inputTitleContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.inputTitle }, props.title === undefined ? 'List' : props.title)),
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => toggleModal(), style: styles.fieldTextContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.fieldText, numberOfLines: 1 }, item ? item : 'Select')),
                react_1.default.createElement(react_native_modal_1.default, { isVisible: modalVisible, style: styles.modal, backdropOpacity: .30 },
                    react_1.default.createElement(react_native_1.View, { style: styles.modalContainer },
                        react_1.default.createElement(react_native_1.View, { style: styles.pickerHeaderContainer },
                            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => pressCancel() },
                                react_1.default.createElement(react_native_1.Text, { style: styles.cancelText }, "Cancel")),
                            react_1.default.createElement(react_native_1.View, { style: styles.doneButton },
                                react_1.default.createElement(react_native_1.Button, { onPress: () => pressDone(), title: "Done", disabled: item === tempItem ? true : false }))),
                        react_1.default.createElement(react_native_1.View, { style: styles.pickerContainer }, renderIOSPicker())))));
        }
        // Check Platform (Android)
        else if (react_native_1.Platform.OS === 'android') {
            return (react_1.default.createElement(react_native_1.View, { style: styles.container },
                react_1.default.createElement(react_native_1.View, { style: styles.inputTitleContainer },
                    react_1.default.createElement(react_native_1.Text, { style: styles.inputTitle }, props.title)),
                react_1.default.createElement(react_native_1.View, { style: styles.fieldTextContainer },
                    react_1.default.createElement(picker_1.Picker, { selectedValue: item, style: { height: 60, width: width - 16 }, onValueChange: (item) => selectItem(item), mode: "dropdown" }, props.items.map((item) => {
                        return (react_1.default.createElement(picker_1.Picker.Item, { label: item.label, value: item.value, key: item.key || item.label }));
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
        width: width - 32,
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
        opacity: .3,
        marginRight: 7,
    },
});
// Exports
exports.default = ListPicker;
