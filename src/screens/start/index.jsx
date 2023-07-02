import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "./styles";
import { Card, NumberContainer } from "../../components/index";
import { COLORS } from "../../constants";

const Start = ({ navigation }) => {
  const [dniOption, setDniOption] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedDni, setSelectedDni] = useState(null);

  const onHandlerChangeText = (text) => {
    setDniOption(text.replace(/[^0-9]/g, ""));
  };

  const onHandlerConfirm = () => {
    const chosenDni = Number(dniOption);
    if (isNaN(chosenDni) || chosenDni <= 1000000 || chosenDni > 99999999) {
      Alert.alert(
        "Invalid DNI",
        "DNI has to be a number between 1000000 and 99999999",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setDniOption(""),
          },
        ]
      );
    } else {
      setConfirmed(true);
      setSelectedDni(chosenDni);
      setDniOption("");
    }
  };

  const onHandlerReset = () => {
    setDniOption("");
    setConfirmed(false);
    setSelectedDni(null);
  };

  /*const onHandlerStart = () => {
    onStart(selectedDni);
  };*/

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Selected DNI</Text>
        <NumberContainer number={selectedDni} />
        <Button
          title="Start"
          onPress={() => navigation.navigate("Tkt")}
          color={COLORS.brightRed}
        />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Let's go to game...</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Write DNI</Text>
          <TextInput
            placeholder="0"
            style={styles.input}
            keyboardType="number-pad"
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            onChangeText={onHandlerChangeText}
            value={dniOption}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={onHandlerReset}
              color={COLORS.brightRed}
            />
            <Button
              title="Confirm"
              onPress={onHandlerConfirm}
              color={COLORS.darkslategrey}
              disabled={dniOption === ""}
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Start;
