import * as React from 'react';
import { ContainerStyle, LabelTextStyle, FieldTextStyle, CancelTextStyle, DoneTextStyle, ModalHeaderContainerStyle, ModalContentContainerStyle, PickerItemTextStyle, PickerItem } from '../../types/types';
interface Props {
    items: Array<PickerItem>;
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
declare const DropdownList: React.FC<Props>;
export default DropdownList;
