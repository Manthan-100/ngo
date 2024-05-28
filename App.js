import { useState, useEffect } from 'react';
import MainNavigation from './navigation/index';
import LoginNavigation from './navigation/auth-nav';
import { WebView } from 'react-native-webview';
import {decode, encode} from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (!global.btoa) {
    global.btoa = encode;
}
if (!global.atob) {
    global.atob = decode;
}

export default  function App() {
  const data = AsyncStorage.getItem("user");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        setIsLoggedIn(data ? true : false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return <Root isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}

const Root = ({ isLoggedIn, setIsLoggedIn }) => {
  return isLoggedIn ? (
    <MainNavigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <LoginNavigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
};
