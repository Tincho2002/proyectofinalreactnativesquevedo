import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <Image
          resizeMode="contain"
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
