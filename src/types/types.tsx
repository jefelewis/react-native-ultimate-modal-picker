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

// TypeScript Type: Modal Header Container Style
export interface ModalHeaderContainerStyle {
  modalHeaderContainerLight: {
    height?: number,
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: number,
  },
  modalHeaderContainerDark: {
    height?: number,
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: number,
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

// TypeScript Type: Done Text Style
export interface DoneTextStyle {
  doneTextLight: {
    color?: string,
  },
  doneTextDark: {
    color?: string,
  },
};

// TypeScript Type: Modal Content Container Style
export interface ModalContentContainerStyle {
  modalContentContainerLight: {
    height?: number,
    backgroundColor?: string,
  },
  modalContentContainerDark: {
    height?: number,
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

// TypeScript Type: Divider Style
export interface DividerStyle {
  dividerLight: {
    marginTop?: number,
    marginBottom?: number,
    borderBottomWidth?: number,
    borderColor?: string,
  },
  dividerDark: {
    marginTop?: number,
    marginBottom?: number,
    borderBottomWidth?: number,
    borderColor?: string,
  },
};


// PICKER
// TypeScript Types: Picker Item
export interface PickerItem {
  key: number | string;
  label: string;
  value: string;
};
