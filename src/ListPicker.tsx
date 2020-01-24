// Imports: Dependencies
import React, { useState } from 'react';
import { Dimensions, Platform, Picker, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
// import Icon from 'react-native-vector-icons/Ionicons';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title?: string;
  items: Array<Item>;
  onChange: (item: string) => string;
}

interface Item {
  label: string;
  value: string;
  key: number | string;
  color: string;
};

// Component: List Picker
const ListPicker = (props: Props) => {
  // React Hooks: State
  const [ modalVisible, toggle ] = useState(false);
  const [ item, setItem ] = useState();

  // Toggle Modal
  const toggleModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggle((modalVisible: boolean) => !modalVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select Item
  const selectItem = (item: string) => {
    try {
      // React Hook: Set Item
      setItem(item);

      // React Props: onChange
      props.onChange(item);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render iOS Picker
  const renderIOSPicker = (props: Props) => {
    try {
      return (
        <Picker
          selectedValue={item}
          onValueChange={(item) => selectItem(item)}>
          {props.items.map((item: Item) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.key || item.label}
              />
            );
          })}
        </Picker>
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render Platform
  const renderPlatform = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        return (
          <View style={styles.container}>
            <View style={styles.inputTitleContainer}>
            <Text style={styles.inputTitle}>{props.title === undefined ? 'List' : props.title}</Text>
            </View>

            <TouchableOpacity onPress={() => toggleModal()} style={styles.fieldTextContainer}>
              <Text style={styles.fieldText} numberOfLines={1}>{item !== undefined ? item : 'Select'}</Text>

              {/* <Icon name="ios-arrow-forward" size={22} style={styles.arrowForward}/> */}
            </TouchableOpacity>

            <Modal isVisible={modalVisible} style={styles.modal}>
              <View style={styles.modalContainer}>
                <View style={styles.pickerHeaderContainer}>
                  <TouchableOpacity onPress={() => toggleModal()} >
                    <Text style={styles.doneText}>Done</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.pickerContainer}>
                  {renderIOSPicker(props)}
                </View>
              </View>
            </Modal>
          </View>
        );
      }

      // Check Platform (Android)
      if (Platform.OS === 'android') {
        return (
          <View style={styles.container}>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>{props.title}</Text>
            </View>

            <View style={styles.fieldTextContainer}>
              <Picker
                selectedValue={item}
                style={{height: 60, width: width - 16}}
                onValueChange={selectItem}
                prompt="Fuck"
                mode="dropdown">
                {props.items.map((item: Item) => {
                  return (
                    <Picker.Item
                      label={item.label}
                      value={item.value}
                      key={item.key || item.label}
                      color={item.color}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {renderPlatform()}
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width - 32,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
  },
  modal: {
    margin: 0,
  },
  modalContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pickerHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    width: width,
    backgroundColor: '#FAFAF8',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerContainer: {
    height: 220,
    width: width,
    // backgroundColor: '#CFD3D9',
    backgroundColor: 'white',
  },
  doneText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 17,
    marginRight: 16,
  },
  stateContainer: {
    alignItems: 'center',
    width: 75,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputTitleContainer: {
    width: 75,
    marginBottom: 4,
  },
  inputTitle: {
    color: '#7D7D7D',
    borderColor: '#7D7D7D',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  fieldTextContainer: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,    
  },
  fieldText: {
    width: width - 32 - 20,
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    alignSelf: 'center',
  },
  arrowForward: {
    color: 'black',
    opacity: .3,
    marginRight: 7,
  },
});

// Exports
export default ListPicker;
