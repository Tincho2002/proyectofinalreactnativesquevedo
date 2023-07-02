import { View } from "react-native";
import { OnboardFlow } from "react-native-onboard";

import { styles } from "./styles";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <OnboardFlow
        style={styles.onboardFlow}
        pages={[
          {
            title: "Welcome to VET-OK!! app",
            subtitle: "Designed especially for your best friend... YOUR PET!!!",
            imageUri:
              "https://criteriohidalgo.com/wp-content/uploads/2020/01/perro-gato-esterilizacion.jpg",
          },
        ]}
        type="fullscreen" // Change to either 'fullscreen', 'bottom-sheet', or 'inline'
      />
    </View>
  );
};

export default Onboarding;
