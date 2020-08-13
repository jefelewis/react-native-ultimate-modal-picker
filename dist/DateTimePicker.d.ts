/// <reference types="react" />
interface Props {
    title?: string;
    onChange: (date: Date | string) => Date | string | void;
}
declare const DatetimePicker: (props: Props) => JSX.Element;
export default DatetimePicker;
