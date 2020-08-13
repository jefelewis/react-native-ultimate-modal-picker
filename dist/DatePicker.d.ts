/// <reference types="react" />
interface Props {
    title?: string;
    mode: 'calendar' | 'spinner' | 'default';
    onChange: (date: Date | string) => Date | string | void;
}
declare const DatePicker: (props: Props) => JSX.Element;
export default DatePicker;
