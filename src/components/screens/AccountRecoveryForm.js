import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";

export default function AccountRecoveryForm({ navigation }) {
  const [email, setEmail] = useState("");

  const handleSendInstructions = () => {
    // Your logic for sending instructions
  };

  return (
    <View style={[styles.container, { backgroundColor: "white", marginTop: -180 }]}>
    <Image source={require("../../../assets/images/accrecovery.png")} style={{ width: 300, height: 250, marginBottom: 10, marginTop: -120, justifyContent: 'center', alignItems: 'center', marginStart: 10 }} />

      <Text style={[styles.text, { color: "black", marginBottom: 20 }]}>Restore Password</Text>

      {/* Text Input for Email Address */}
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="E-mail Address"
          label="E-mail Address"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Send Reset Instructions Button */}
      <Button
        mode="contained"
        icon="email"
        style={styles.button}
        onPress={handleSendInstructions}
        disabled={!email} // Disable the button if email is empty
      >
        Send Reset Instructions
      </Button>

      {/* Back to Login Text Link */}
      <Text
        style={[styles.backToLogin, { color: "gray", marginBottom: 8 }]}
        onPress={() => navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 50,
    width: 380,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginBottom: 20,
    justifyContent: "center", // Center items vertically
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 380,
  },
  backToLogin: {
    marginTop: 2,
  },
});
