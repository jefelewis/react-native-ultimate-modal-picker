import React from 'react';
import { ContainerStyle, LabelTextStyle } from '../../types/types';
interface Props {
    mode: 'spinner' | 'default' | 'clock';
    onChange: (date: Date) => void;
    title?: string;
    darkMode?: boolean;
    customStyleContainer?: ContainerStyle;
    customStyleLabelText?: LabelTextStyle;
}
declare const PickerTime: React.FC<Props>;
export default PickerTime;
