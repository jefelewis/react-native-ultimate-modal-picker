/// <reference types="react" />
import { ViewStyle, TextStyle } from 'react-native';
interface Style {
    container?: ViewStyle;
    modal?: ViewStyle;
    modalContainer?: ViewStyle;
    pickerHeaderContainer?: ViewStyle;
    pickerContainer?: ViewStyle;
    doneButton?: ViewStyle;
    cancelText?: TextStyle;
    inputTitleContainer?: ViewStyle;
    inputTitle?: TextStyle;
    fieldTextContainer?: ViewStyle;
    fieldText?: TextStyle;
}
interface Props {
    title?: string;
    defaultValue?: string;
    onChange: (item: any) => any;
    style?: Style;
}
declare const NumberPicker: ({ defaultValue, onChange, title, style, }: Props) => JSX.Element;
export default NumberPicker;
