import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function OnboardingScreen3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Start Your Journey</Text>

      {/* Image inside a custom box */}
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.AOxLgS2grfPQ7tUTnmMntAHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
          }}
          style={styles.image}
        />
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Ready to explore breathtaking destinations? Create your account now and unlock endless possibilities!
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <FontAwesome name="arrow-right" size={18} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Login / Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
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
    marginBottom: 20,
  },
  button: {
    width: "100%", // Set the button to take the full width of the screen
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28a745",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
});