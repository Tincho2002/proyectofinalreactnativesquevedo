import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightyellow,
    flex: 1,
    marginHorizontal: "auto",
    width: 400,
    padding: 25,
  },
  title: {
    fontSize: 16,
    paddingBottom: 5,
  },
  input: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
