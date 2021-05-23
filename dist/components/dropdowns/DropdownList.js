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
            return (<react_native_1.View style={renderContainerStyle()}>
          <react_native_1.View style={styles.labelContainer}>
            <react_native_1.Text style={renderLabelTextStyle()}>{props.title === undefined ? 'List' : props.title}</react_native_1.Text>
          </react_native_1.View>

          <react_native_1.TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
            <react_native_1.Text style={renderFieldTextStyle()} numberOfLines={1}>{value ? value : 'Select'}</react_native_1.Text>
          </react_native_1.TouchableOpacity>

          <react_native_modal_1.default isVisible={modalVisible} style={styles.modal} backdropOpacity={.30}>
            <react_native_1.View style={styles.modalContainer}>
              <react_native_1.View style={renderModalHeaderContainerStyle()}>
                <react_native_1.TouchableOpacity onPress={() => pressCancel()}>
                    <react_native_1.Text style={renderCancelTextStyle()}>Cancel</react_native_1.Text>
                  </react_native_1.TouchableOpacity>

                  <react_native_1.View style={styles.doneButtonContainer}>
                    <react_native_1.Button title="Done" onPress={() => pressDone()} disabled={value === tempValue ? true : false} color={renderDoneTextStyle()}/>
                  </react_native_1.View>
              </react_native_1.View>

              <react_native_1.View style={renderModalContentContainerStyle()}>
                <picker_1.Picker selectedValue={tempValue !== undefined ? tempValue : value} onValueChange={(value) => selectValue(value)}>
                  {props.items.map((item, i) => {
                    return (<picker_1.Picker.Item key={i} label={item.label} value={item.value} color={renderPickerItemStyle()}/>);
                })}
                </picker_1.Picker>
              </react_native_1.View>
            </react_native_1.View>
          </react_native_modal_1.default>
        </react_native_1.View>);
        }
        // Platform: Android
        else if (react_native_1.Platform.OS === 'android') {
            return (<react_native_1.View style={renderContainerStyle()}>
          <react_native_1.View style={styles.labelContainer}>
            <react_native_1.Text style={renderLabelTextStyle()}>{props.title}</react_native_1.Text>
          </react_native_1.View>

          <picker_1.Picker mode="dropdown" selectedValue={value} style={{ height: 60, width: width - 16 }} onValueChange={(value) => setValue(value)}>
            {props.items.map((item, i) => {
                    return (<picker_1.Picker.Item key={i} label={item.label} value={item.value} color={renderPickerItemStyle()}/>);
                })}
          </picker_1.Picker>
        </react_native_1.View>);
        }
    };
    return (<>{renderPicker()}</>);
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
