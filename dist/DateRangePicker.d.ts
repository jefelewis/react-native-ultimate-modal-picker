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
    divider?: ViewStyle;
    toFromDateContainer?: ViewStyle;
    dateInfoContainer?: ViewStyle;
    dateText?: TextStyle;
    text?: TextStyle;
}
interface Props {
    title?: string;
    mode: 'calendar' | 'spinner' | 'default';
    onFromChange: (newDate: Date | string) => Date | string | void;
    onToChange: (newDate: Date | string) => Date | string | void;
    style?: Style;
}
declare const DateRangePicker: ({ onFromChange, onToChange, mode, title, style, }: Props) => JSX.Element;
export default DateRangePicker;
