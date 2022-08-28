/* global __DEV__ */

import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles.js";
import auth from "@react-native-firebase/auth";
import { firebase } from "../../firebase/config";
import { useFetch } from "../../hooks/useFetch.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  // Sign in Firebase
  const onLoginPress = () => {
    if (Platform.OS === "web") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (response) => {
          const uid = response.user.uid;
          let user = await useFetch("users", "GET", null, "/" + uid);
          if (user.payload === null) {
            Alert.alert(
              "User Not Found",
              "Please sign up to create an account",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Sign Up",
                  onPress: navigation.navigate("Registration"),
                },
              ]
            );
          } else {
            setUser(true);
            let res = await AsyncStorage.setItem(
              "isLoggedIn",
              JSON.stringify(true)
            );
            navigation.navigate("Home", { user: user.payload });
          }
        })
        .catch((error) => {
          Alert.alert(
            "User Not Found",
            "Your username or password are incorrect",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Sign Up",
                onPress: () => navigation.navigate("Registration"),
              },
            ]
          );
        });
    } else {
      // Add Login Functionality Here
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (response) => {
          const uid = response.user.uid;
          let user = await useFetch("users", "GET", null, "/" + uid);
          if (user.payload === null) {
            Alert.alert(
              "User Not Found",
              "Please sign up to create an account",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Sign Up",
                  onPress: navigation.navigate("Registration"),
                },
              ]
            );
          } else {
            setUser(true);
            let res = await AsyncStorage.setItem(
              "isLoggedIn",
              JSON.stringify(true)
            );
            navigation.navigate("Home", { user: user.payload });
          }
        })
        .catch((error) => {
          Alert.alert(
            "User Not Found",
            "Your username or password are incorrect",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Sign Up",
                onPress: () => navigation.navigate("Registration"),
              },
            ]
          );
        });
    }
  };

  function resetPassword() {
   auth().sendPasswordResetEmail(email);
   Alert.alert(
    "Reset Password",
    "An email to reset your password has been sent to your account",
    [
      {
        text: "Ok",
        style: "Ok",
      },
     
    ]
  );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/clouds.png")}
        style={styles.bgStyles}
      />
      <KeyboardAwareScrollView
        style={[{ flex: 1, width: "100%" }, styles.keyContainer]}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingVertical: 0 }}
      >
     
        <Image
          style={styles.logo}
          source={require("../../assets/images/connect.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text onPress={resetPassword} style={styles.password}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Go</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
       
        </View>
       
      </KeyboardAwareScrollView>
      <Image
          style={styles.footerImage}
          source={require("../../assets/images/homepage.png")}
        />
    </View>
  )
}
