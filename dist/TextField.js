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
Object.defineProperty(exports, "__esModule", { value: true });
// Imports: Dependencies
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
// Screen Dimensions
const { height, width } = react_native_1.Dimensions.get('window');
// Dark Mode
const colorScheme = react_native_1.Appearance.getColorScheme();
// Component: Text Field
const TextField = (props) => {
    // React Hooks: State
    const [value, setValue] = react_1.useState('');
    // Text Input: Reference
    // const textInputRef: React.RefObject<TextInput> = React.useRef();
    // Props
    const { title, ...otherProps } = props;
    // Handle Change
    const handleChange = (text) => {
        // Set Value
        setValue(text);
        // Send Value To Props
        props.value(text);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.inputTitle }, props.title),
        react_1.default.createElement(react_native_1.TextInput
        // ref={textInputRef}
        , { 
            // ref={textInputRef}
            style: styles.input })));
};
// Styles
const styles = react_native_1.StyleSheet.create({
    container: {
        height: 'auto',
        marginBottom: 12,
    },
    inputTitle: {
        color: '#7D7D7D',
        borderColor: '#7D7D7D',
        fontSize: 10,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    input: {
        height: 40,
        fontSize: 17,
        color: '#000000',
        borderColor: '#7D7D7D',
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
    },
});
// Exports
exports.default = TextField;
