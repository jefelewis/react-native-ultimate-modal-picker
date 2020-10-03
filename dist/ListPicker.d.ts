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
    items: Array<Item>;
    onChange: (item: any) => any;
    style?: Style;
}
interface Item {
    label: string;
    value: string;
    key: number | string;
}
declare const ListPicker: ({ defaultValue, items, onChange, title, style, }: Props) => JSX.Element;
export default ListPicker;
