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
    { id: 1, label: 'User Type ' },
    { id: 2, label: 'First Name' },
    { id: 3, label: 'Last Name' },
    { id: 4, label: 'Email Id' },
    { id: 5, label: 'User Name' },
    { id: 6, label: 'Password' },
    { id: 7, label: 'Confirm Password' },
    { id: 7, label: 'DIN Number' },
    { id: 8, label: 'Date Of Birth' },
    { id: 9, label: 'Gender' },
    { id: 10, label: 'Contact Number', nextLabel: 'Address Information' },

    { id: 11, label: 'Address Line 1' },
    { id: 12, label: 'Address Line 2' },
    { id: 13, label: 'Area' },
    { id: 14, label: 'State' },
    { id: 15, label: 'City' },
    { id: 16, label: 'PIN Code', nextLabel: 'Bank Details' },

    { id: 11, label: 'Bank Name' },
    { id: 12, label: 'Account Name' },
    { id: 13, label: 'Account Number' },
    { id: 14, label: 'IFSC Code' },
    { id: 15, label: 'Branch Name', nextLabel: 'Qualification' },

    { id: 16, label: 'Qualification', nextLabel: 'Verification Details' },

    { id: 17, label: 'ID Type' },
    { id: 18, label: 'ID Number', nextLabel: 'Emergency Contact' },

    { id: 18, label: 'Name' },
    { id: 19, label: 'Phone Number' },
    { id: 20, label: 'Relation' },
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
          Basic Information
        </Text>
      </View>

      <View>
        {inputs?.map((item) => (
          <View key={item.id}>
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
          </View>
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
