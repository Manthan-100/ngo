import { useState } from 'react';
import MainNavigation from './navigation/index';
import LoginNavigation from './navigation/auth-nav';
import { WebView } from 'react-native-webview';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <Root isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}

const Root = ({ isLoggedIn, setIsLoggedIn }) => {
  return isLoggedIn ? (
    <MainNavigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <LoginNavigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
};
