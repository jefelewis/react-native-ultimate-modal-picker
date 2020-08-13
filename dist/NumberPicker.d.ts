/// <reference types="react" />
interface Props {
    title?: string;
    defaultValue?: string;
    onChange: (item: any) => any;
}
declare const NumberPicker: (props: Props) => JSX.Element;
export default NumberPicker;
