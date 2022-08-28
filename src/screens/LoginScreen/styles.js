import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FCF5F2",
  },
  title: {},
  keyContainer: {
    display: "flex",
    alignContent: "center",
  },
  logo: {
    flex: 1,
    alignSelf: "center",
    marginTop: 50,
    width: windowWidth,
    resizeMode: "contain",
    height: 130,
  },
  input: {
    height: 48,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    fontFamily: "Roboto",
  },
  button: {
    backgroundColor: "#EB9F49",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "Roboto",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  footerLink: {
    color: "#87cfd6",
    fontWeight: "bold",
    fontSize: 16,
    fontWeight: "700",
  },
  bgStyles: {
    position: "absolute",
    resizeMode: "repeat",
    width: windowWidth,
    height: windowHeight,
    zIndex: -2,
  },
  password: {
    textAlign: "right",
    marginRight: 30,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  footerImage: {
    position: "absolute",
    resizeMode: "contain",
    width: windowWidth - 50,
    height: windowHeight + 170,
    justifyContent: "flex-end",
    zIndex: -1,
  },
});
