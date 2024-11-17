import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function FirstOnboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome to TravelEase</Text>

      {/* Image inside a custom box */}
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.7d8ca80f195393caddf203625644be0f?rik=vJuRgMYLnYTPAw&pid=ImgRaw&r=0",
          }}
          style={styles.image}
        />
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Discover stunning destinations and book your dream vacations with ease!
        Let us make your travel unforgettable.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screen2")}
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
    justifyContent: "space-between", // Space between content and button
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center", // Centered title
    marginTop: 20, // Adds space from the top
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
    marginTop: 20, // Adds space between image and description
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