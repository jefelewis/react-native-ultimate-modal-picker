declare type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
declare type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';
export interface ContainerStyle {
    containerLight: {
        backgroundColor?: string;
        borderColor?: string;
        borderBottomWidth?: number;
    };
    containerDark: {
        backgroundColor?: string;
        borderColor?: string;
        borderBottomWidth?: number;
    };
}
export interface LabelTextStyle {
    labelTextLight: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
    labelTextDark: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
}
export interface FieldTextStyle {
    fieldTextLight: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
    fieldTextDark: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
}
export interface ModalHeaderContainerStyle {
    modalHeaderContainerLight: {
        height?: number;
        backgroundColor?: string;
        borderColor?: string;
        borderBottomWidth?: number;
    };
    modalHeaderContainerDark: {
        height?: number;
        backgroundColor?: string;
        borderColor?: string;
        borderBottomWidth?: number;
    };
}
export interface CancelTextStyle {
    cancelTextLight: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
    cancelTextDark: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
}
export interface DoneTextStyle {
    doneTextLight: {
        color?: string;
    };
    doneTextDark: {
        color?: string;
    };
}
export interface ModalContentContainerStyle {
    modalContentContainerLight: {
        height?: number;
        backgroundColor?: string;
    };
    modalContentContainerDark: {
        height?: number;
        backgroundColor?: string;
    };
}
export interface PickerItemTextStyle {
    pickerItemTextLight: {
        color?: string;
    };
    pickerItemTextDark: {
        color?: string;
    };
}
export interface DividerStyle {
    dividerLight: {
        marginTop?: number;
        marginBottom?: number;
        borderBottomWidth?: number;
        borderColor?: string;
    };
    dividerDark: {
        marginTop?: number;
        marginBottom?: number;
        borderBottomWidth?: number;
        borderColor?: string;
    };
}
export interface TitleTextStyle {
    titleTextLight: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
    titleTextDark: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: FontWeight;
        textTransform?: TextTransform;
        color?: string;
    };
}
export interface PickerValue {
    label: string;
    value: string;
}
export {};
