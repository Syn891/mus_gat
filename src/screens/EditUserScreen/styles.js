import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    marginRight: 10,
    backgroundColor: "pink",
    padding: 8,
    borderRadius: 8,
    width: windowWidth / 2 - 45,
    elevation: 2
  },
  text: {
    textAlign: "center",
    fontFamily: "Marker Felt",
    fontSize: 14,
    color: "white",
  },
  delete: {
    backgroundColor: "orange",
    marginTop: 20,
    padding: 8,
    borderRadius: 8,
    elevation: 2

  },
  logout: {
    backgroundColor: "grey",
    marginTop: 20,
    padding: 8,
    borderRadius: 8,
    elevation: 2

  },
  view: {
    height: windowHeight - windowHeight / 15 - 95,
    backgroundColor: "#FCF5F2",

  },

  bgStyles: {
    position: "absolute",
    resizeMode: "repeat",
    width: windowWidth,
    backgroundColor: "#FCF5F2",
    zIndex: -2,
  },
  form: {
    elevation: 10,
    shadowColor: '#EDB8BC',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFFCF9',
    borderColor: '#FCF5F2',
    borderWidth: 1

  },
  label: {
    fontFamily: "Marker Felt",
    fontSize: 18,
    color: "#74BFC6",
    marginBottom: 10,
  },
  input: {
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    fontFamily: "Mukta-Bold",
    fontSize: 16,
  }
});
