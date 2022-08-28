import { StyleSheet, Dimensions } from "react-native";

let windowHeight = Dimensions.get("window").height;
let windowWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  container: {
    display: "flex",
    height: 500,
    height: windowHeight - 30,
    backgroundColor: "#FBF6F3",
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  bgStyles: {
    position: "absolute",
    resizeMode: "repeat",
    width: windowWidth,
    zIndex: -2,
  },
  blobs: {
    position: "absolute",
    resizeMode: "cover",
    width: '100%',
    height: '100%',
    zIndex: -3,
    borderRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#74BFC6",
  },
  left: {
    padding: 10
  },
  img: {
    height: 70,
    width:70,
    position: 'absolute',

    alignSelf: 'flex-end',
    transform: [{ rotate: "-5deg" }]

  },
  gradientBackground: {
    height: windowHeight / 2,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: -1,
    
  },
  toggleBar: {
    backgroundColor: "#E89149",
    marginTop: 10,
    height: 45,
    borderColor: "#DCA586",
    borderWidth: 1,
    width: "85%",
    borderRadius: 15,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  randomAct: {
    height: windowHeight / 3,
    marginTop: 10,
    paddingTop: 7,
  },
  activityDetailRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  participants: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    fontFamily: "Mukta-Bold",
    fontSize: 15,
    color: "#544a4e",
  },
  greeting: {
    backgroundColor: "#FCF5F2",
    marginTop: "2%",
    marginLeft: "7%",
    marginRight: "7%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: 'white',
    // paddingBottom: 30,
    borderRadius: 20,
    elevation: 2
  },
  subtitle: {
    fontFamily: "Marker Felt",
    fontSize: 21,
    paddingLeft: "8%",
    marginTop: "4%",
    marginBottom: "1%",
    color: "#FD7593",
  },
});
