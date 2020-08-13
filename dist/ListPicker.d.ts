/// <reference types="react" />
interface Props {
    title?: string;
    defaultValue?: string;
    items: Array<Item>;
    onChange: (item: any) => any;
}
interface Item {
    label: string;
    value: string;
    key: number | string;
}
declare const ListPicker: (props: Props) => JSX.Element;
export default ListPicker;
