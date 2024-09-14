import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";

export default function OnboardingScreen() {
  let [fontsLoaded, fontEror] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontEror) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image source={require("@/assets/logo.png")} style={styles.logo} />
          <Image
            source={require("@/assets/onboarding/shape_9.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            source={require("@/assets/onboarding/shape_3.png")}
            style={styles.titleTextShape1}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learning With
          </Text>
          <Image
            style={styles.titleTextShape2}
            source={require("@/assets/onboarding/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleTextShape3}
            source={require("@/assets/onboarding/shape_6.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            GündüzApp
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            The best way to learn anything is to start from the basics.
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]} onPress={()=> router.push("/(routes)/welcome-intro") }>
            Getting Started
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
