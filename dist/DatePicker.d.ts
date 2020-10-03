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
    mode: 'calendar' | 'spinner' | 'default';
    onChange: (date: Date | string) => Date | string | void;
    style?: Style;
}
declare const DatePicker: ({ onChange, mode, title, style, }: Props) => JSX.Element;
export default DatePicker;
