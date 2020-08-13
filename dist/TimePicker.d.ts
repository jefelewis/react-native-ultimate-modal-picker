/// <reference types="react" />
interface Props {
    title?: string;
    mode: 'spinner' | 'default' | 'clock';
    onChange: (date: Date | string) => Date | string | void;
}
declare const TimePicker: (props: Props) => JSX.Element;
export default TimePicker;
