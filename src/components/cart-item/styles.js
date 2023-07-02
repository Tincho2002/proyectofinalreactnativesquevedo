import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: COLORS.moccasin,
    shadowColor: COLORS.darkGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: COLORS.brightRed,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.moccasin,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  quantity: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: COLORS.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontFamily: "Inter-Bold",
    color: COLORS.text,
    marginBottom: 5,
  },
  name: {
    fontSize: 15,
    fontFamily: "Inter-Bold",
    color: COLORS.brightRed,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 3,
    marginBottom: 10,
  },
  bodyImage: {
    flex: 1,
    backgroundColor: COLORS.moccasin,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 60,
    height: 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
});
