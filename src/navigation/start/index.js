import { COLORS } from "../../constants";
import { Start } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Inter-Bold",
        },
      }}
    >
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  );
};

export default StartNavigator;
