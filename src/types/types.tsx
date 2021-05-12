// TypeScript Type: Font Weight
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

// TypeScript Type: Text Transform
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';

// TypeScript Type: Date Time Picker Styles
export interface DateTimePickerStyles {
  containerLight: {
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: string,
  },
  containerDark: {
    backgroundColor?: string,
    borderColor?: string,
    borderBottomWidth?: string,
  },
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
