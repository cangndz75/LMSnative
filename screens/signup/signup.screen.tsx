import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { commonStyles } from "@/styles/onboarding/common/common.styles";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [buttonSniper, setButtonSniper] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({
    password: "",
  });
  const [required, setRequired] = React.useState("");
  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$%^&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least one special character",
      });
      setUserInfo({ ...userInfo, password: value });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least one number",
      });
      setUserInfo({ ...userInfo, password: value });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least six characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleSignIn = () => {
    router.push("/(routes)/verifyAccount");
  };
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <ScrollView>
        <Image
          source={require("@/assets/sign-in/signup.png")}
          style={styles.signInImage}
        />
        <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Let's Get Started
        </Text>
        <Text style={styles.learningText}>
          Create an account to get all features.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { paddingLeft: 35 }]}
            keyboardType="email-address"
            value={userInfo.email}
            placeholder="can@gmail.com"
            onChangeText={(value) => {
              setUserInfo({ ...userInfo, email: value });
            }}
          />
          <Fontisto
            style={{ position: "absolute", left: 26, top: 16.8 }}
            name="email"
            size={20}
            color={"#A1A1A1"}
          />
          {required && (
            <View style={commonStyles.errorContainer}>
              <Entypo name="cross" size={18} color={"red"} />
            </View>
          )}
          <View>
            <TextInput
              style={commonStyles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue=""
              placeholder="******"
              onChangeText={handlePasswordValidation}
            />
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            <SimpleLineIcons
              style={styles.icon2}
              name="lock"
              size={20}
              color={"#A1A1A1"}
            />
          </View>
          {error.password && (
            <View style={[commonStyles.errorContainer, { top: 145 }]}>
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                {error.password}
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={{
            padding: 16,
            borderRadius: 8,
            marginHorizontal: 16,
            backgroundColor: "#2467EC",
            marginTop: 15,
          }}
          onPress={handleSignIn}
        >
          {buttonSniper ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Raleway_700Bold",
              }}
            >
              Sign Up
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            gap: 10,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="google" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="github" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpRedirect}>
          <Text style={{ fontSize: 18, fontFamily: "Raleway_700Bold" }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/(routes)/sign-up")}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Raleway_700Bold",
                color: "#2467EC",
                marginLeft: 5,
                marginTop: -2,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signInImage: {
    width: "60%",
    height: 250,
    alignSelf: "center",
    marginTop: 50,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
  },
  learningText: {
    textAlign: "center",
    fontSize: 15,
    color: "#575757",
    marginTop: 5,
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30,
  },
  input: {
    backgroundColor: "#fff",
    paddingLeft: 16,
    borderRadius: 8,
    height: 50,
    fontSize: 16,
    marginHorizontal: 16,
    color: "#A1A1A1",
  },
  visibleIcon: {
    position: "absolute",
    right: 30,
    top: 15,
  },
  icon2: {
    position: "absolute",
    left: 24,
    top: 16.8,
    marginTop: -2,
  },
  forgotSection: {
    alignSelf: "flex-end",
    marginRight: 30,
    marginTop: 20,
  },
  signUpRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 16,
    marginTop: 10,
  },
});
