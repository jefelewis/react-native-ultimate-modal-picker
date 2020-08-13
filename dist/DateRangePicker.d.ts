/// <reference types="react" />
interface Props {
    title?: string;
    mode: 'calendar' | 'spinner' | 'default';
    onFromChange: (newDate: Date | string) => Date | string | void;
    onToChange: (newDate: Date | string) => Date | string | void;
}
declare const DateRangePicker: (props: Props) => JSX.Element;
export default DateRangePicker;
