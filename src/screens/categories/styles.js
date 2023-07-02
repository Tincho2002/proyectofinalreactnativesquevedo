import { StatusBar, StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGray,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
});
