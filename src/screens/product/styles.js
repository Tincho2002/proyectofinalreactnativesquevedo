import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.lightyellow,
    paddingTop: 20,
  },
  name: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    paddingVertical: 20,
  },
  appearance: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: 260,
  },
  quantity: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
    paddingVertical: 20,
  },
});
