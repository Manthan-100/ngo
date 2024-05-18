import { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { TextInput, Button } from 'react-native-paper';
import { isEmpty } from 'lodash';
import MyContext from "../App";
import { AuthContext } from "../navigation/auth-nav"

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pressed, setIsPressed] = useState(false);
  const data = useContext(AuthContext);


  const handleSubmit = () => {
    console.log(email, password)
    setIsPressed(true);
    data.setIsLoggedIn(true)
    data.setIsLoggedIn && data.setIsLoggedIn(true);
  }

  return (
    <View
      style={[
        tw`flex-1 justify-center items-center`,
        { backgroundColor: 'rgb(35, 43, 56)' },
      ]}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '80%',
          //: '40%',
          padding: 24,
          borderRadius: 10,
        }}>
        <Text style={tw`text-xl font-bold`}>Sign In</Text>
        <Text style={tw`text-xx mt-3`}>To keep connected with us.</Text>
        <TextInput
          placeholderTextColor={'#FF0000'}
          helperText={'hi'}
          underlineColor="transparent"
          label="Email Address"
          style={tw` w-[100%] h-[50px] bg-[#e6e3e8] rounded-l-0 mt-10`}
          onChangeText={(e) => setEmail(e)}
          error={isEmpty(email) && pressed}
        />
        <TextInput
          placeholderTextColor={'#FF0000'}
          helperText={'hi'}
          underlineColor="transparent"
          label="Password"
          style={tw` w-[100%] h-[50px] bg-[#e6e3e8] rounded-l-0 mt-3`}
          onChangeText={(e) => setPassword(e)}
          error={isEmpty(password) && pressed}
        />
        <Button
          mode="contained"
          style={[
            tw`w-[100%] self-center mt-4 rounded-md mt-8 text-[#fff]`,
            { zIndex: 0, backgroundColor: 'rgb(51, 102, 255)' },
          ]}
          onPress={handleSubmit}
          >
          Login
        </Button>
      </View>
    </View>
  );
}
