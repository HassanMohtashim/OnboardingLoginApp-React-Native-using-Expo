import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Arrow Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()} // Navigates to the previous screen
      >
        <FontAwesome name="arrow-left" size={24} color="#007BFF" />
      </TouchableOpacity>

      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push("/login")} // Navigates to the login screen
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Plan Your Adventure</Text>

      {/* Image inside a custom box */}
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: "https://4.bp.blogspot.com/-1mU0rijjHIc/WY3nA3SygSI/AAAAAAAABdo/LsaO8oe5JPYaJVvSaSHxvNU_3y_ymYQrgCLcBGAs/s1600/Naran%2BValley.jpg",
          }}
          style={styles.image}
        />
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Explore breathtaking destinations and create lasting memories with our
        easy-to-use planning tools.
      </Text>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screen3")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 20,
    justifyContent: "space-between", // Spacing between elements
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20, // Positioning on the top-left corner
    padding: 10,
    zIndex: 10, // Ensures the button appears above other elements
  },
  skipButton: {
    position: "absolute",
    top: 10,
    right: 20, // Positioning on the top-right corner
    padding: 10,
    zIndex: 10, // Ensures the button appears above other elements
  },
  skipButtonText: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 40, // Adds space from the top of the screen
  },
  imageBox: {
    alignSelf: "center",
    width: 300, // Custom width for the image box
    height: 200, // Custom height for the image box
    borderRadius: 15, // Rounded corners for the image box
    overflow: "hidden", // Ensures image stays within box
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    marginTop: 20,
  },
  image: {
    width: "100%", // Image fills the entire box
    height: "100%", // Image fills the entire box
    resizeMode: "cover", // Ensures the image fits well inside the box
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 50, // Increased padding for a wider button
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 30, // Adds space from the bottom of the screen
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});