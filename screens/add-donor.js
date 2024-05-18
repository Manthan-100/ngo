import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Button, DefaultTheme } from 'react-native-paper';
import TextInput from '../components/textinput';

export default function AddDonor() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: '#000', // Black text color for input text and label
    },
  };

  const inputs = [
    { id: 1, label: 'Donar Type' },
    { id: 2, label: 'Full Name' },
    { id: 3, label: 'Email' },
    { id: 4, label: 'Phone', nextLabel: 'Address Information' },

    { id: 11, label: 'Country' },
    { id: 12, label: 'Area' },
    { id: 13, label: 'State' },
    { id: 14, label: 'City' },
    { id: 15, label: 'Pin Code', nextLabel: 'User Identification Details' },
 
    { id: 15, label: 'PAN Number', nextLabel: 'Payment Details' },

    { id: 16, label: 'Currency' },
    { id: 17, label: 'Donation Amount' },
    { id: 18, label: 'Donation Purpose' },
    { id: 19, label: 'Donated For' },
    { id: 20, label: 'Payment Method' },

  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', margin: 6, padding: 10 }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          padding: 10,
          marginHorizontal: 12,
        }}>
        <Text
          style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          General Information
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
        Register
      </Button>
    </ScrollView>
  );
}
