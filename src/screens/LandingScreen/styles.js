import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "#E7CFC8",
    margin: 3,
    borderWidth: 2,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: windowHeight / 2.5,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    width: windowWidth,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  slide: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    display: "flex",
    height: windowHeight,

  },
  slider: {
    display: "flex",
    flex: 1,
  },
});
