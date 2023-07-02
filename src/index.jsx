import { useFonts } from "expo-font";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";

import { Header } from "./components";
import { init } from "./db";
import AppNavigator from "./navigation";
import { Onboarding, Start, Ticket } from "./screens/index";
import store from "./store/index";
import { styles } from "./styles";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Onboarding />
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  const headerTitle = userNumber ? "Your Ticket" : "Get into DNI";

  const onStart = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? (
      <Ticket userNumber={userNumber} />
    ) : (
      <Start onStart={onStart} />
    );
  return (
    (
      <View style={styles.container}>
        <Header title={headerTitle} />
        <Content />
      </View>
    ),
    (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  );
}
