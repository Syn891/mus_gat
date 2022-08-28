import React, { useState } from "react";
import { Text, TouchableOpacity, Pressable, TouchableHighlight, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import { goBack } from "../../utils/utils";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";

const NavBar = (props) => {
  const { user } = props;
  
  async function logout() {
    try {
      await auth().signOut();

      props.navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  }
  function renderButton() {
    if (props.leftButton === "logout") {
      return (
        <View style={styles.topBar}>
          <FontAwesome5
            name="user-circle"
            size={32}
            color={"rgb(255, 251, 249)"}
          />

          <Text style={styles.topBarText}>{props.text}</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Edit Account Details", { user })
            }
          >
            <AntDesign
              onPress={() => setShow(true)}
              name="menu-unfold"
              size={26}
              color="#544a4e"
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.topBar}>
          {goBack(props.navigation)}
          <Text style={styles.topBarText}>{props.text}</Text>
          <AntDesign
            onPress={() => setShow(true)}
            name="menu-fold"
            size={26}
            color="#544a4e"
          />
        </View>
      );
    }
  }

  const [show, setShow] = useState(false);

  const [ isPress, setIsPress ] = useState(false);

  var touchProps = {
    activeOpacity: 1,
    underlayColor: '#EDB8BC',                               
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };


  function close(screen) {
    setShow(false);
    props.navigation.navigate(screen, { user });
  }
  return (
    <>
      {show ? (
     
        <View show={show} style={styles.sideBar}>
        <Image
        source={require("../../assets/images/blobs.png")}
        style={styles.blobs}
      />
          <View style={styles.navRow}>
            <AntDesign
              onPress={() => setShow(false)}
              name="menu-fold"
              size={26}
              color="black"
            />
          </View>
          <View style={styles.navRowRight}>
            <TouchableHighlight {...touchProps} onPress={() => close("Home")}>
              <View style={styles.buttonRow}>
              <Text style={styles.navtext}>Home</Text>
              <Ionicons name="home" size={24} color="#78B29E" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.navRowRight}>
            <TouchableHighlight {...touchProps} onPress={() => close("FilterScreen")}>
            <View style={styles.buttonRow}>
              <Text style={styles.navtext}>Filter Search</Text>
              <Ionicons name="color-filter-outline" size={24} color="#EBC059" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.navRowRight}>
            <TouchableHighlight {...touchProps} onPress={() => close("ReviewScreen")}>
            <View style={styles.buttonRow}>

              <Text style={styles.navtext}>My Reviews</Text>
              <Feather name="book-open" size={22} color="#74BFC6" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.navRowRight}>
            <TouchableHighlight {...touchProps} onPress={() => close("FavouritesScreen")}>
            <View style={styles.buttonRow}>

              <Text style={styles.navtext}>My Favourites</Text>
              <Ionicons name="heart-outline" size={24} color="#DE3D00" />              
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.navRowRight}>
            <TouchableHighlight {...touchProps} onPress={() => close("Edit Account Details")}>
            <View style={styles.buttonRow}>

              <Text style={styles.navtext}>Profile</Text>
              <FontAwesome5 name="user-graduate" size={22} color="#FD7593" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.signOut}>
            <TouchableHighlight {...touchProps} onPress={() => logout(props)}>
              <Text style={styles.signOut}>Sign Out</Text>
            </TouchableHighlight>
          </View>
        

        </View>
      ) : (
        <></>
      )}

      {renderButton()}
    </>
  );
};

export default NavBar;
