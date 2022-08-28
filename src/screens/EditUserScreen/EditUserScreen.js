import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  DeviceEventEmitter,
} from "react-native";
import styles from "../EditUserScreen/styles";
import { useFetch } from "../../hooks/useFetch";
import auth from "@react-native-firebase/auth";
import NavBar from "../../components/NavBar/NavBar";

function EditUserScreen(props) {
  let user = props.route.params.user;

  const [editedUser, setEditedUser] = useState(user);

  function changeUserDetails(text, name) {
    let newUser = {};

    if (name === "participants") {
      newUser = {
        ...editedUser,
        participants: text,
      };
      setEditedUser(newUser);
    } else {
      newUser = {
        ...editedUser,
        fullName: text,
      };
      setEditedUser(newUser);
    }
  }

  const confirmDelete = () =>
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: deleteAccount },
      ]
    );

  async function deleteAccount() {
    await useFetch("users", "DELETE", {}, `/${user._id}`);
    deleteUser();
  }

  async function saveEditedUser() {
    if (
      editedUser.fullName !== user.fullName ||
      editedUser.participants !== user.participants
    ) {
      await useFetch(
        "users",
        "PUT",
        {
          fullName: editedUser.fullName,
          participants: editedUser.participants,
        },
        `/${user._id}`
      );

      DeviceEventEmitter.emit("settingUser", { editedUser });

      Alert.alert(
        "Changes saved",
        "Changes saved"[
          {
            text: "OK",
            onPress: props.navigation.navigate("Home", { user: editedUser }),
          }
        ]
      );
    } else {
      Alert.alert(
        "no Changes saved",
        "no Changes saved"[{ text: "OK", onPress: props.navigation.goBack() }]
      );
    }
  }

  async function deleteUser() {
    try {
      await auth().currentUser.delete();

      props.navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    try {
      await auth().signOut();

      props.navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <>
    
          <NavBar navigation={props.navigation} text="Edit Account" user={editedUser} />
     
    <View style={styles.view}>
    <Image
        source={require("../../assets/images/clouds.png")}
        style={styles.bgStyles}
      />
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Edit Name:</Text>
          <TextInput
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholder={user.fullName}
            onChangeText={(text) => changeUserDetails(text, "name")}
            underlineColorAndroid="transparent"
            autoCapitalize="words"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label} >Number of Family Members:</Text>
          <TextInput
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => changeUserDetails(text, "participants")}
            name="participants"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            style={styles.input}

          />
        </View>
        <View>
          <Text style={styles.label}>Email Address:</Text>
          <TextInput
            placeholderTextColor="#aaaaaa"
            placeholder="Name"
            value={user.email}
            onChange={changeUserDetails}
            underlineColorAndroid="transparent"
            autoCapitalize="words"
            editable={false}
            style={styles.input}

          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={saveEditedUser}>
            <Text style={styles.text}>Save</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => props.navigation.goBack()}
          >
            <Text style={styles.text}>Cancel</Text>
          </Pressable>
        </View>
        <Pressable style={styles.delete} onPress={confirmDelete}>
          <Text style={styles.text}>Delete Account</Text>
        </Pressable>
        <Pressable style={styles.logout} onPress={() => logout(props)}>
          <Text style={styles.text}>Sign Out</Text>
        </Pressable>
      </View>
     
    </View>
    </>
  );
}

export default EditUserScreen;
