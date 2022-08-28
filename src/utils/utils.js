import { useFetch } from "../hooks/useFetch.js";
import auth from "@react-native-firebase/auth";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export async function getWeatherWithCoords(lat, lng) {
  let data = await useFetch("weather", "GET", null, `/?lat=${lat}&lon=${lng}`);
  return data.payload.current.condition;
}

export async function logout(props) {
  try {
    await auth().signOut();
    props.navigation.navigate("Login");
  } catch (e) {
    console.log(e);
  }
}

export function goBack(navigation) {
  return (
    <Ionicons
      name="md-chevron-back-sharp"
      size={30}
      onPress={() => navigation.goBack()}
      color='#544a4e'
    />
  );
}

export function renderHearts(
  position,
  fave,
  setFave,
  activity,
  userID,
  isFaved
) {
  if (fave === true || isFaved === true) {
    return (
      <TouchableOpacity
        onPress={() =>
          addToFavourites(position, fave, setFave, userID, activity)
        }
      >
        <AntDesign name="heart" color="red" size={20} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() =>
          addToFavourites(position, fave, setFave, userID, activity)
        }
      >
        <AntDesign name="hearto" color="#60341A" size={20} />
      </TouchableOpacity>
    );
  }
}


async function addToFavourites(position, fave, setFave, userID, activity) {
  setFave(!fave);

  let faveActivities = await useFetch("users", "GET", null, `/${userID}`);

  if (!fave) {
    let query = { favourites: activity };
    let output = useFetch("users", "PUT", query, `/${userID}`);
  } else {
    let query = {
      favourites: [...faveActivities.payload.favourites, activity],
    };
    let output = useFetch("users", "PUT", query, `/${userID}?pull=true`);
  }

}

export function filterToggle(navigation, user, page) {
  navigation.navigate(page, { user });
}

export function renderStars(value, size) {
  let val = [];
  if (value % 1) {
    var decimal = value - Math.floor(value);
    decimal = Math.round(decimal * 100) / 100;
    var whole = value - decimal;
    for (let i = 1; i < whole; i++) {
      val.push(
        <FontAwesome
          key={Math.random() + i}
          name="star"
          size={size}
          color="#FFD600"
        />
      );
    }
    val.push(
      <FontAwesome
        key={Math.random()}
        name="star-half-full"
        size={size}
        color="#FFD600"
      />
    );
  } else {
    for (let i = 1; i < value; i++) {
      val.push(
        <FontAwesome
          key={Math.random() + i}
          name="star"
          size={size}
          color="#FFD600"
        />
      );
    }
  }

  if (val.length < 5) {
    let remainder = 5 - val.length;
    for (let i = 0; i < remainder; i++) {
      val.push(
        <FontAwesome
          key={Math.random() + i}
          name="star-o"
          size={size}
          color="#FFD600"
        />
      );
    }
  }

  return val.map((v) => {
    return v;
  });
}


export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}