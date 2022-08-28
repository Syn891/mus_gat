import { StyleSheet, Dimensions } from "react-native";
let windowHeight = Dimensions.get("window").height;
let windowWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  topBar: {
    height: windowHeight / 14,
    backgroundColor: "white",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navtext: {
    fontFamily: "Marker Felt",
    fontSize: 17,
    color: "#EB9F48",
    marginRight: 10

  },
  topBarText: {
    fontFamily: "Marker Felt",
    fontSize: 22,
    color: "#EB9F49",
  },
  blobs: {
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  sideBar: {
    position: "absolute",
    height: windowHeight - 25,
    width: windowWidth / 1.5,
    backgroundColor: "#FCF5F2",
    zIndex: 1,
    alignSelf: "flex-end",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  navRow: {
    display: "flex",
    alignItems: "flex-end",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#EDB8BC",
    paddingBottom: 25,
    paddingTop: 25
  },
  signOut: {
    fontFamily: "Marker Felt",
    fontSize: 17,
    color: "#6984F2",
  },
  navRowRight: {
    borderBottomWidth: 1,
    borderColor: "#EDB8BC",

    // padding: 15
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  btnPress: {
    paddingLeft: 30,
    paddingBottom: 25,
    paddingTop: 25,
  },
  btnNormal: {
    paddingLeft: 30,
    paddingBottom: 25,
    paddingTop: 25,
  },
  // gradientBackground: {
  //   // height: windowHeight / 2,
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   zIndex: -1,
  // },
});
