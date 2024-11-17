import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to validate the email
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Function to handle form submission
  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    // If validation passes, proceed with login logic
    if (valid) {
      console.log("Logging in with:", { email, password });
      // Here you would handle actual login logic (e.g., API call)
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Email Input */}
      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.passwordInput, passwordError ? styles.inputError : null]}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.toggle}>
            {passwordVisible ? "Hide" : "Show"}
          </Text>
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password Link */}
      <TouchableOpacity
        style={styles.forgotPasswordLink}
        onPress={() => console.log("Forgot Password")}
      >
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Link to Signup */}
      <TouchableOpacity style={styles.link} onPress={() => router.push("/signup")}>
        <Text style={styles.linkText}>Don't have an account? Signup!</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordInput: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  toggle: {
    color: "#007bff",
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    marginTop: 40,
  },
  linkText: {
    color: "#007bff",
    fontSize: 16,
  },
  forgotPasswordLink: {
    alignSelf: "flex-start",
    marginTop: 15,
  },
});