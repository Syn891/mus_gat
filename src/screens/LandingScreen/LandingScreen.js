import React from "react";
import {
  Text,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styles.js";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "./IntroSlides.js";

export default function LandingScreen({ navigation, extraData, showApp }) {
  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const renderItem = ({ item }) => {
    const image = item.backgroundImage;
    return (
      <View style={[{ backgroundColor: item.backgroundColor }, styles.slide]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={item.imageStyle}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  };
  const renderNextButton = () => {
    return <View style={styles.buttonCircle}></View>;
  };
  const renderDoneButton = () => {
    return <View style={styles.buttonCircle}></View>;
  };

  const on_Done_all_slides = () => {
    showApp(true);
  };

  const on_Skip_slides = () => {
    showApp(true);
  };

  return (
    <>
      <AppIntroSlider
        style={styles.slider}
        renderItem={renderItem}
        data={slides}
        showSkipButton={true}
        showNextButton={true}
        onDone={on_Done_all_slides}
        onSkip={on_Skip_slides}
      />
    </>
  );
}
