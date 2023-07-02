import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
  },
  number: {
    fontSize: 15,
    fontFamily: "Inter-Regular",
    color: COLORS.white,
  },
});
