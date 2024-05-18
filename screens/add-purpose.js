import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Button, DefaultTheme } from 'react-native-paper';
import TextInput from '../components/textinput';

export default function AddEmployee() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: '#000', // Black text color for input text and label
    },
  };

  const inputs = [
    { id: 1, label: 'Select Purpose' },
    { id: 2, label: 'Select Event/Cause Type' },
    { id: 3, label: 'Event/Cause Title' },
    { id: 4, label: 'Add Description Here' },
    { id: 5, label: 'Media' },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff', margin: 6, padding: 10 }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          padding: 10,
          marginHorizontal: 12,
        }}>
        <Text
          style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          Donation Purpose
        </Text>
      </View>

      <View>
        {inputs?.map((item) => (
          <>
            <TextInput id={item.id} label={item.label} />
            {item.nextLabel && (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                  padding: 10,
                  marginHorizontal: 12,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  {item.nextLabel}
                </Text>
              </View>
            )}
          </>
        ))}
      </View>

      <Button
        mode="contained"
        style={[
          tw`w-[50%] self-center rounded-md my-10 text-[#fff] mx-10`,
          { zIndex: 0, backgroundColor: 'rgb(51, 102, 255)' },
        ]}>
        Submit
      </Button>
    </ScrollView>
  );
}
