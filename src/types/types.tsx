// STYLES
// TypeScript Type: Font Weight
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

// TypeScript Type: Text Transform
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';

// TypeScript Type: Container Style
export interface ContainerStyle {
  containerLight: {
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: number,
  },
  containerDark: {
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: number,
  },
};

// TypeScript Type: Label Text Style
export interface LabelTextStyle {
  labelTextLight: {
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: FontWeight,
    textTransform?: TextTransform,
    color?: string,
  },
  labelTextDark: {
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: FontWeight,
    textTransform?: TextTransform,
    color?: string,
  },
};

// TypeScript Type: Field Text Style
export interface FieldTextStyle {
  fieldTextLight: {
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: FontWeight,
    textTransform?: TextTransform,
    color?: string,
  },
  fieldTextDark: {
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: FontWeight,
    textTransform?: TextTransform,
    color?: string,
  },
};

// TypeScript Type: Cancel Text Style
export interface CancelTextStyle {
  cancelTextLight: {
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: FontWeight,
    textTransform?: TextTransform,
    color?: string,
  },
  cancelTextDark: {
    fontFamily?: string,
    fontSize?: number,
    fontWeight?: FontWeight,
    textTransform?: TextTransform,
    color?: string,
  },
};

// TypeScript Type: Modal Header Container Style
export interface ModalHeaderContainerStyle {
  modalHeaderContainerLight: {
    height?: string,
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: number,
  },
  modalHeaderContainerDark: {
    height?: string,
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: number,
  },
};

// TypeScript Type: Modal Content Container Style
export interface ModalContentContainerStyle {
  modalContentContainerLight: {
    height?: string,
    backgroundColor?: string,
  },
  modalContentContainerDark: {
    height?: string,
    backgroundColor?: string,
  },
};

// TypeScript Type: Picker Item Text Style
export interface PickerItemTextStyle {
  pickerItemTextLight: {
    color?: string,
  },
  pickerItemTextDark: {
    color?: string,
  },
};


// PICKER
// TypeScript Types: Picker Item
export interface PickerItem {
  key: number | string;
  label: string;
  value: string;
};
