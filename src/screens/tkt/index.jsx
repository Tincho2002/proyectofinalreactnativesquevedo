import { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import { ImageSelector, NumberContainer } from "../../components";

const MIN_NUMBER = 1000000;
const MAX_NUMBER = 99999999;

const generateRandomTkt = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomTkt = Math.floor(Math.random() * (max - min) + min);
  if (randomTkt === exclude) {
    return generateRandomTkt(min, max, exclude);
  } else {
    return randomTkt;
  }
};

const Tkt = ({ userDni }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomTkt(MIN_NUMBER, MAX_NUMBER, userDni)
  );
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  const onHandlerChangeText = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Ticket</Text>
      <Text style={styles.title}>
        With this number withdraw a surprise prize for your pet...
      </Text>
      <NumberContainer number={currentGuess} />
      <Text style={styles.title}>Please fill in your pet's details</Text>
      <Text style={styles.title}>Enter your pet's name</Text>
      <TextInput
        style={styles.input}
        placeholder="pet's name"
        onChangeText={onHandlerChangeText}
        value={text}
      />
      <ImageSelector onImage={onImage} />
    </View>
  );
};

export default Tkt;
