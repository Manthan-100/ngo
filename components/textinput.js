import { TextInput, Button, DefaultTheme } from 'react-native-paper';

export default function TextInput_ (props={}) {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: '#000', // Black text color for input text and label
    },
  };

  const { label, placeHolder } = props;

  return (
    <TextInput
      placeholderTextColor={'#FF0000'}
      underlineColor="transparent"
      label={label}
      style={{
        borderWidth: 1,
        borderColor: '#D3D3D3', // Light grey color for border
        borderRadius: 5, // Adjust as needed
        backgroundColor: '#fff',
        marginTop: 10,
        paddingHorizontal: 10, // Add padding for text inside input
        height: 50, // Specify height
        width: '100%', // Full width
        color: '#000', // Black text color for input text
      }}
      theme={theme}
      {...props}
    />
  );
}
