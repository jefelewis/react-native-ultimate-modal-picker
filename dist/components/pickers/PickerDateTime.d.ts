import React from 'react';
import { ContainerStyle, LabelTextStyle } from '../../types/types';
interface Props {
    onChange: (date: Date) => void;
    title?: string;
    darkMode?: boolean;
    customStyleContainer?: ContainerStyle;
    customStyleLabelText?: LabelTextStyle;
}
declare const PickerDateTime: React.FC<Props>;
export default PickerDateTime;
