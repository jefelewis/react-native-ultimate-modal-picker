/// <reference types="react" />
interface Props {
    title: string;
    value: (text: string) => string | void;
}
declare const TextField: (props: Props) => JSX.Element;
export default TextField;
