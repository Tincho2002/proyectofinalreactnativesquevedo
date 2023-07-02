import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import { COLORS } from "../../constants";
import { Tkt } from "../../screens";

/*import Ionicons from "@expo/vector-icons/Ionicons";*/

/*import {
  MapsScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
  Tkt,
} from "../../screens";*/

/*import {
  MapsScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
} from "../screens/index";*/
/*import colors from "../utils/colors";*/

const Stack = createNativeStackNavigator();

const TicketNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ticket"
      screenOptions={{
        headerStyle: {
          /*backgroundColor: COLORS.primary,*/
          backgroundColor:
            Platform.OS === "android" ? COLORS.black : COLORS.secondary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Inter-Bold",
        },
      }}
    >
      <Stack.Screen name="Ticket" component={Tkt} />
    </Stack.Navigator>
  );
};

export default TicketNavigator;
