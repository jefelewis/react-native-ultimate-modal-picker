import * as React from 'react';
import { ContainerStyle, LabelTextStyle, DividerStyle, TitleTextStyle } from '../../types/types';
interface Props {
    mode: 'calendar' | 'spinner' | 'default';
    onFromChange: (newDate: Date) => void;
    onToChange: (newDate: Date) => void;
    title?: string;
    darkMode?: boolean;
    customStyleContainer?: ContainerStyle;
    customStyleTitleText?: TitleTextStyle;
    customStyleLabelText?: LabelTextStyle;
    customStyleDivider?: DividerStyle;
}
declare const DateRangePicker: React.FC<Props>;
export default DateRangePicker;
