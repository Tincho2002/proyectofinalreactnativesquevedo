import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const ProductItem = ({ item, onSelected, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View>
          <Text style={styles.price}>USD {item.price}</Text>
          <Text style={styles.appearance}>appearance: {item.appearance}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
