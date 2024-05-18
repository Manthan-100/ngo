import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import DashBoard from '../screens/dashboard';
import { Provider } from 'react-native-paper';
import { createContext } from 'react';

const Stack = createNativeStackNavigator();

export const AuthContext = createContext();

export default function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const headerStyles = {};
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'rgb(51, 102, 255)',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackVisible: false,
            }}>
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
}
