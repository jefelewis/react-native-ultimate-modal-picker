// Imports: Dependencies
import React, { useState, useRef } from 'react';
import { Appearance, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Dark Mode
const colorScheme = Appearance.getColorScheme();

// TypeScript Types: Props
interface Props {
  title: string;
  // currentValue: string;
  value: (text: string) => string | void;
  // onChange: any
}

// Component: Text Field
const TextField: React.FC<Props> = (props): JSX.Element => {
  // React Hooks: State
  const [ value, setValue ] = useState<string>('');

  // Text Input: Reference
  // const textInputRef: React.RefObject<TextInput> = React.useRef();

  // Props
  const { title, ...otherProps } = props;

  // Handle Change
  const handleChange = (text: string): void => {
    // Set Value
    setValue(text);

    // Send Value To Props
    props.value(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{props.title}</Text>

      <TextInput
        // ref={textInputRef}
        style={styles.input}
        // {...otherProps}
      >
      </TextInput>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    height: 'auto',
    marginBottom: 12,
  },
  inputTitle: {
    color: '#7D7D7D',
    borderColor: '#7D7D7D',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  input: {
    height: 40,
    fontSize: 17,
    color: '#000000',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

// Exports
export default TextField;
