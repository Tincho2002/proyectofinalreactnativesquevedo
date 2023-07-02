import { COLORS } from "../../constants";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: COLORS.primary,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: 'Inter-Bold',
  },
});
