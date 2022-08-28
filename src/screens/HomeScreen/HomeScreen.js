import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  DeviceEventEmitter,
} from "react-native";

import * as Location from "expo-location";
import { useEffect, useState } from "react";
import styles from "./styles.js";
import { useIsFocused } from "@react-navigation/native";
import NavBar from "../../components/NavBar/NavBar";

const HomeScreen = (props) => {
  const [currentUser, setCurrentUser] = useState(props.route.params.user);
  
  const [errorMsg, setErrorMsg] = useState(null);
  const [status, setStatus] = useState(null);
  const [text, setText] = useState("Waiting...");
  const isFocused = useIsFocused();


  // GET LOCATION
  async function getLoc() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    setStatus(status);
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    if (errorMsg) {
      setText(errorMsg);
    } else if (location) {
      setText(JSON.stringify(location));
    }
  }

  useEffect(() => {
  
    getLoc();
    
      const willFocusSubscription = props.navigation.addListener('focus', () => {
        getLoc();
    });

    return willFocusSubscription;

  }, [props, text]);

  DeviceEventEmitter.addListener("settingUser", (e) => {
    setCurrentUser(e.editedUser);
  });

  useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners("settingUser");
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/images/blobs.png")}
        style={styles.bgStyles}
      />
      {/* Navbar for Homescreen */}
      <NavBar
        text={"For You"}
        user={currentUser}
        navigation={props.navigation}
        leftButton={"logout"}
      />

      <SearchBar navigation={props.navigation} user={currentUser} />
      {/* Random activity based on weather conditions of users location */}
      <View style={styles.greeting}>
        <Image
          source={require("../../assets/images/blobs.png")}
          style={styles.blobs}
        />
        <View style={styles.left}>
          <Text style={styles.heading}>Hello</Text>
          <View style={styles.right}>
            <Text style={styles.heading}>
              Random Text
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
