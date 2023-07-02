import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.total}>USD {item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.brightRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
