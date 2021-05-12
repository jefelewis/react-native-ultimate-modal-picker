// TypeScript Type: Font Weight
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

// TypeScript Type: Text Transform
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';

// TypeScript Type: Container
export interface Container {
  backgroundColor?: string,
  borderColor?: string,
  borderBottomWidth?: number,
};

// TypeScript Type: Label Text
export interface LabelText {
  fontFamily?: string,
  fontSize?: number,
  fontWeight?: FontWeight,
  textTransform?: TextTransform,
  color?: string,
};

// TypeScript Type: Date Time Picker Styles
export interface DateTimePickerStyles {
  containerLight: Container,
  containerDark: Container,
  labelTextLight: LabelText,
  labelTextDark: LabelText,
};
