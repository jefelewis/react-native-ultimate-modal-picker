import * as React from 'react';
import { ContainerStyle, LabelTextStyle } from '../../types/types';
interface Props {
    mode: 'calendar' | 'spinner' | 'default';
    onChange: (date: Date) => void;
    title?: string;
    darkMode?: boolean;
    customStyleContainer?: ContainerStyle;
    customStyleLabelText?: LabelTextStyle;
}
declare const PickerDate: React.FC<Props>;
export default PickerDate;
