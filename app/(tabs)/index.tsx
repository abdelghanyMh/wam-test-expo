import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Link href="/EmailSignup" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Email ou telephone</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate("SignupForm")}
      >
        <Text style={styles.buttonText}>Inscrivez-vous</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Google signup")}
      >
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Facebook signup")}
      >
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Apple signup")}
      >
        <Text style={styles.buttonText}>Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou</Text>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Déjà un compte ?</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text
          style={styles.footerText}
          //  onPress={() => navigation.goBack()}
        >
          Retour
        </Text>
        <Text
          style={styles.footerTextBlue}
          // onPress={() => navigation.navigate("Discover")}
        >
          Découvrir sans compte
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#00BFFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#00BFFF",
    fontSize: 16,
  },
  orText: {
    color: "gray",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  footerText: {
    color: "gray",
  },
  footerTextBlue: {
    color: "#00BFFF",
  },
});
