import * as React from 'react';
import { ContainerStyle, LabelTextStyle, FieldTextStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle } from '../../types/types';
interface Props {
    onChange: (value: string) => void;
    title?: string;
    defaultValue?: string;
    darkMode?: boolean;
    customStyleContainer?: ContainerStyle;
    customStyleLabelText?: LabelTextStyle;
    customStyleFieldText?: FieldTextStyle;
    customStyleModalHeaderContainer?: ModalHeaderContainerStyle;
    customStyleCancelText?: CancelTextStyle;
    customStyleDoneText?: DoneTextStyle;
    customStyleModalContentContainer?: ModalContentContainerStyle;
    customStylePickerItemText?: PickerItemTextStyle;
}
declare const DropdownMeasurements: React.FC<Props>;
export default DropdownMeasurements;
