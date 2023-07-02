import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    /*flex: 1,*/
    backgroundColor: COLORS.gainsboro,
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
  },
});
