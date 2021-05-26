"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const picker_1 = require("@react-native-picker/picker");
const react_native_modal_1 = __importDefault(require("react-native-modal"));
;
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
// Component: Dropdown (List)
const DropdownList = (props) => {
    // React Hooks: State
    const [modalVisible, toggle] = react_1.useState(false);
    const [tempValue, setTempValue] = react_1.useState('');
    const [value, setValue] = react_1.useState('');
    // React Hooks: Lifecycle Method
    react_1.useEffect(() => {
        // Check If Default Value Exists
        if (props.defaultValue) {
            setValue(props.defaultValue);
        }
        else {
            // Set State
            setValue('Select');
        }
    }, [props.defaultValue]);
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
    // Render Field Text Style
    const renderFieldTextStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                fontFamily: props.customStyleFieldText?.fieldTextDark.fontFamily ? props.customStyleFieldText.fieldTextDark.fontFamily : 'System',
                fontSize: props.customStyleFieldText?.fieldTextDark.fontSize ? props.customStyleFieldText.fieldTextDark.fontSize : 17,
                fontWeight: props.customStyleFieldText?.fieldTextDark.fontWeight ? props.customStyleFieldText.fieldTextDark.fontWeight : '400',
                color: props.customStyleFieldText?.fieldTextDark.color ? props.customStyleFieldText.fieldTextDark.color : '#FFFFFF',
                alignSelf: 'center',
            });
        }
        // Light Mode
        else {
            return ({
                fontFamily: props.customStyleFieldText?.fieldTextLight.fontFamily ? props.customStyleFieldText.fieldTextLight.fontFamily : 'System',
                fontSize: props.customStyleFieldText?.fieldTextLight.fontSize ? props.customStyleFieldText.fieldTextLight.fontSize : 17,
                fontWeight: props.customStyleFieldText?.fieldTextLight.fontWeight ? props.customStyleFieldText.fieldTextLight.fontWeight : '400',
                color: props.customStyleFieldText?.fieldTextLight.color ? props.customStyleFieldText.fieldTextLight.color : '#000000',
                alignSelf: 'center',
            });
        }
    };
    // Render Modal Header Container Style
    const renderModalHeaderContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: width,
                height: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.height ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.height : 45,
                backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.backgroundColor : '#383838',
                borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderColor : '#E9E9EB',
                borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerDark.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerDark.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
            });
        }
        // Light Mode
        else {
            return ({
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: width,
                height: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.height ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.height : 45,
                backgroundColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.backgroundColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.backgroundColor : '#FFFFFF',
                borderColor: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderColor ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderColor : '#CED4DA',
                borderBottomWidth: props.customStyleModalHeaderContainer?.modalHeaderContainerLight.borderBottomWidth ? props.customStyleModalHeaderContainer.modalHeaderContainerLight.borderBottomWidth : react_native_1.StyleSheet.hairlineWidth,
            });
        }
    };
    // Render Cancel Text Style
    const renderCancelTextStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                marginLeft: 16,
                fontFamily: props.customStyleCancelText?.cancelTextDark.fontFamily ? props.customStyleCancelText.cancelTextDark.fontFamily : 'System',
                color: props.customStyleCancelText?.cancelTextDark.color ? props.customStyleCancelText.cancelTextDark.color : '#0884FE',
                fontWeight: props.customStyleCancelText?.cancelTextDark.fontWeight ? props.customStyleCancelText.cancelTextDark.fontWeight : '400',
                fontSize: props.customStyleCancelText?.cancelTextDark.fontSize ? props.customStyleCancelText.cancelTextDark.fontSize : 17,
            });
        }
        // Light Mode
        else {
            return ({
                marginLeft: 16,
                fontFamily: props.customStyleCancelText?.cancelTextLight.fontFamily ? props.customStyleCancelText.cancelTextLight.fontFamily : 'System',
                color: props.customStyleCancelText?.cancelTextLight.color ? props.customStyleCancelText.cancelTextLight.color : '#007AFF',
                fontWeight: props.customStyleCancelText?.cancelTextLight.fontWeight ? props.customStyleCancelText.cancelTextLight.fontWeight : '400',
                fontSize: props.customStyleCancelText?.cancelTextLight.fontSize ? props.customStyleCancelText.cancelTextLight.fontSize : 17,
            });
        }
    };
    // Render Done Text Style
    const renderDoneTextStyle = () => {
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
    const renderModalContentContainerStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                width: width,
                height: props.customStyleModalContentContainer?.modalContentContainerDark.height ? props.customStyleModalContentContainer.modalContentContainerDark.height : 250,
                backgroundColor: props.customStyleModalContentContainer?.modalContentContainerDark.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerDark.backgroundColor : '#121312',
            });
        }
        // Light Mode
        else {
            return ({
                width: width,
                height: props.customStyleModalContentContainer?.modalContentContainerLight.height ? props.customStyleModalContentContainer.modalContentContainerLight.height : 250,
                backgroundColor: props.customStyleModalContentContainer?.modalContentContainerLight.backgroundColor ? props.customStyleModalContentContainer.modalContentContainerLight.backgroundColor : '#FFFFFF',
            });
        }
    };
    // Render Picker Item Text Style
    const renderPickerItemStyle = () => {
        // Dark Mode
        if (props.darkMode) {
            return ({
                color: props.customStylePickerItemText?.pickerItemTextDark.color ? props.customStylePickerItemText.pickerItemTextDark.color : '#FFFFFF',
            });
        }
        // Light Mode
        else {
            return ({
                color: props.customStylePickerItemText?.pickerItemTextLight.color ? props.customStylePickerItemText.pickerItemTextLight.color : '#000000',
            });
        }
    };
    // Toggle Modal
    const toggleModal = () => {
        // Platform: iOS
        if (react_native_1.Platform.OS === 'ios') {
            // React Hook: Toggle Modal
            toggle((modalVisible) => !modalVisible);
        }
    };
    // Press Cancel
    const pressCancel = () => {
        // Set State
        setTempValue(value);
        // Toggle Modal
        toggleModal();
    };
    // Press Done
    const pressDone = () => {
        // Set State
        setValue(tempValue);
        // Props: onChange
        props.onChange(tempValue);
        // Toggle Modal
        toggleModal();
    };
    // Select Value
    const selectValue = (value) => {
        // Platform: iOS
        if (react_native_1.Platform.OS === 'ios') {
            // Set State
            setTempValue(value);
        }
        // Platform: Android
        else if (react_native_1.Platform.OS === 'android') {
            // Set State
            setValue(value);
            // Props: onChange
            props.onChange(value);
        }
    };
    // Render Picker
    const renderPicker = () => {
        // Platform: iOS:
        if (react_native_1.Platform.OS === 'ios') {
            return (jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: renderContainerStyle() }, { children: [jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: styles.labelContainer }, { children: jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderLabelTextStyle() }, { children: props.title === undefined ? 'List' : props.title }), void 0) }), void 0),
                    jsx_runtime_1.jsx(react_native_1.TouchableOpacity, Object.assign({ onPress: () => toggleModal(), style: styles.fieldTextContainer }, { children: jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderFieldTextStyle(), numberOfLines: 1 }, { children: value ? value : 'Select' }), void 0) }), void 0),
                    jsx_runtime_1.jsx(react_native_modal_1.default, Object.assign({ isVisible: modalVisible, style: styles.modal, backdropOpacity: .30 }, { children: jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: styles.modalContainer }, { children: [jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: renderModalHeaderContainerStyle() }, { children: [jsx_runtime_1.jsx(react_native_1.TouchableOpacity, Object.assign({ onPress: () => pressCancel() }, { children: jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderCancelTextStyle() }, { children: "Cancel" }), void 0) }), void 0),
                                        jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: styles.doneButtonContainer }, { children: jsx_runtime_1.jsx(react_native_1.Button, { title: "Done", onPress: () => pressDone(), disabled: value === tempValue ? true : false, color: renderDoneTextStyle() }, void 0) }), void 0)] }), void 0),
                                jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: renderModalContentContainerStyle() }, { children: jsx_runtime_1.jsx(picker_1.Picker, Object.assign({ selectedValue: tempValue !== undefined ? tempValue : value, onValueChange: (value) => selectValue(value) }, { children: props.items.map((item, i) => {
                                            return (jsx_runtime_1.jsx(picker_1.Picker.Item, { label: item.label, value: item.value, color: renderPickerItemStyle() }, i));
                                        }) }), void 0) }), void 0)] }), void 0) }), void 0)] }), void 0));
        }
        // Platform: Android
        else if (react_native_1.Platform.OS === 'android') {
            return (jsx_runtime_1.jsxs(react_native_1.View, Object.assign({ style: renderContainerStyle() }, { children: [jsx_runtime_1.jsx(react_native_1.View, Object.assign({ style: styles.labelContainer }, { children: jsx_runtime_1.jsx(react_native_1.Text, Object.assign({ style: renderLabelTextStyle() }, { children: props.title }), void 0) }), void 0),
                    jsx_runtime_1.jsx(picker_1.Picker, Object.assign({ mode: "dropdown", selectedValue: value, style: { height: 60, width: width - 16 }, onValueChange: (value) => setValue(value) }, { children: props.items.map((item, i) => {
                            return (jsx_runtime_1.jsx(picker_1.Picker.Item, { label: item.label, value: item.value, color: renderPickerItemStyle() }, i));
                        }) }), void 0)] }), void 0));
        }
    };
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: renderPicker() }, void 0));
};
// Styles
const styles = react_native_1.StyleSheet.create({
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
exports.default = DropdownList;
