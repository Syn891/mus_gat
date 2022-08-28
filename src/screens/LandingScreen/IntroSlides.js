import styles from "./styles.js";
export const slides = [
  {
    key: "k1",
    title: "Quality Time",
    text: "Spending time with family builds confidence for all of its members",
    image: {
      uri: "https://i.imgur.com/jr6pfzM.png",
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#F7BB64",
    backgroundImage: require("./assets/first-slide.png"),
  },
  {
    key: "k3",
    title: "Effortless Planning",
    text: "Browse a quick selection of activities to do together",
    image: {
      uri: "https://i.imgur.com/bXgn893.png",
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#4093D2",
    backgroundImage: require("./assets/third-slide.png"),
  },
  {
    key: "k2",
    title: "Save for Later",
    text: "Like the look of an activity but can't do it right now? Save it in your favourites!",
    image: {
      uri: "https://i.imgur.com/au4H7Vt.png",
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#F4B1BA",
    backgroundImage: require("./assets/second-slide.png"),
  },
  {
    key: "k4",
    title: "Review",
    text: "Leave reviews and read other's reviews before making a decision",
    image: {
      uri: "https://i.imgur.com/mFKL47j.png",
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#FF9E3B",
    backgroundImage: require("./assets/last-slide.png"),
  },
];
