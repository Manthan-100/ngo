import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
//import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AddEmployee from '../screens/add-employee';
import ViewEmployee from '../screens/employee-list';
import AddDonor from '../screens/add-donor';
import DisplayDonor from '../screens/display-donor';
import AddPurpose from '../screens/add-purpose';
import DisplayPurpose from '../screens/display-purpose';
import CreateEvent from '../screens/create-event';
import EventList from "../screens/event-list"
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashBoard from '../screens/dashboard';
//import AddEmployee from '../screens/add-employee';
import { View, Text, TouchableOpacity } from 'react-native';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Ionicons
      name="menu"
      size={24}
      color={colors.text}
      style={{ marginLeft: 10 }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const DashboardStack = () => (
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
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        headerShown: false,
        headerLeft: () => <CustomHeader navigation={navigation} />,
        headerTitleAlign: 'center',
      })}
    />
    <Stack.Screen
      name="Dashboard"
      component={DashBoard}
      options={({ navigation }) => ({
        headerShown: false,
        headerLeft: () => <CustomHeader navigation={navigation} />,
        headerTitleAlign: 'center',
      })}
    />
    <Stack.Screen
      name="Add Employee"
      component={AddEmployee}
      options={({ navigation }) => ({
        headerShown: false,
        headerLeft: () => <CustomHeader navigation={navigation} />,
        headerTitleAlign: 'center',
      })}
    />
    <Stack.Screen
      name="Display Employee"
      component={ViewEmployee}
      options={({ navigation }) => ({
        headerShown: false,
        headerLeft: () => <CustomHeader navigation={navigation} />,
        headerTitleAlign: 'center',
      })}
    />
  </Stack.Navigator>
);

const Navigation = (props) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem("token")
      props?.setIsLoggedIn && props?.setIsLoggedIn(false);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Provider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Dashboard"
            component={DashboardStack}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Add Employee"
            component={AddEmployee}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="View Employee"
            component={ViewEmployee}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Add Donor"
            component={AddDonor}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Display Donor"
            component={DisplayDonor}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Add Purpose"
            component={AddPurpose}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Display Purpose"
            component={DisplayPurpose}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Create Event"
            component={CreateEvent}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Drawer.Screen
            name="Event List"
            component={EventList}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              ),
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
