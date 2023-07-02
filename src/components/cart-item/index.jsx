import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { COLORS } from "../../constants";
import { addToCart } from "../../store/actions";

const CartItem = ({ item, onRemove }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyImage}>
          <Image
            resizeMode="contain"
            source={{ uri: item.image }}
            style={styles.image}
          />

          <Button
            style={{ ...styles.button, backgroundColor: "lightcoral" }}
            title="+ units"
            onPress={onAddToCart}
            color={COLORS.text}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.quantity}>{item.quantity} units</Text>
          <Text style={styles.price}>USD {item.price} (x unit)</Text>
        </View>

        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.brightRed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
