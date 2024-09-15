import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";

export default function VerifyAccountScreen() {
  const [code, setCode] = useState(new Array(4).fill(""));
  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
  const handleInput = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }
    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.contanier}>
      <Text style={styles.headerText}>Verification Code</Text>
      <Text style={styles.subText}>
        Please enter the verification code sent to your email address
      </Text>
      <View>
        {code.map((_, index) => (
          <TextInput
            key={index}
            style={styles.inputBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleInput(text, index)}
            value={code[index]}
            ref={inputs.current[index]}
            returnKeyType="done"
            autoFocus={index === 0 ? true : undefined}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
