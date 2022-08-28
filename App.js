import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  LandingScreen,
  EditUserScreen,

} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  const [showMainApp, setShowMainApp] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("isLoggedIn");
      value = JSON.parse(value);
      if (value !== null) {
        value ? setUser(true) : setUser(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect( () => {
     getData();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Home">
              {(props) => (
                <HomeScreen {...props} extraData={user} setUser={setUser} />
              )}
            </Stack.Screen>

            <Stack.Screen options={{ headerShown: false }} name="Edit Account Details" component={EditUserScreen} />
  
            <Stack.Screen options={{ headerShown: false }} name="Login">
              {(props) => <LoginScreen {...props} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name="Registration">
              {(props) => <RegistrationScreen {...props} setUser={setUser} />}
            </Stack.Screen>
          </>
        ) : !user && showMainApp ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Login">
              {(props) => <LoginScreen {...props} setUser={setUser} />}
            </Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name="Registration">
              {(props) => <RegistrationScreen {...props} setUser={setUser} />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen options={{ headerShown: false }} name="Landing">
            {(props) => (
              <LandingScreen
                {...props}
                extraData={showMainApp}
                showApp={setShowMainApp}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

