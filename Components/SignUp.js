import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { auth, db } from "./Config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, ConfirmsetPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [nameFocused, setNameFocused] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);

  const [contactError, setContactError] = useState("");
  const [contactFocused, setContactFocused] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const [invalidMessage, setInvalidMessage] = useState("");

  const handleRegister = () => {
    console.log("jjjjj");

    //email
    if (email === "") {
      setEmailError("Enter your email!!");
      setEmailFocused(true);
    } else if (email !== "" && invalidMessage === "auth/email-already-in-use") {
      setEmailError("This Email already in use!");
      setEmailFocused(true);
    } else if (email !== "" && invalidMessage === "auth/invalid-email") {
      setEmailError("Invalid email format!");
      setEmailFocused(true);
    } else {
      setEmailError("");
      setEmailFocused(false);
    }

    //password
    if (password === "") {
      setPasswordError("Enter your password!!");
      setPasswordFocused(true);
    } else if (password !== "" && password.length < 6) {
      setPasswordError("Password must be at least 6 characters!!");
      setPasswordFocused(true);
    } else {
      setPasswordError("");
      setPasswordFocused(false);
    }

    // conform password
    if (password !== "" && password.length < 6 && confirmPassword === "") {
      setConfirmPasswordError("Confirm your password!!");
      setConfirmPasswordFocused(true);
      setPasswordError("Password must be at least 6 characters!!");
      setPasswordFocused(true);
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords didn’t match. Try again!!");
      setConfirmPasswordFocused(true);
    } else {
      setConfirmPasswordError("");
      setConfirmPasswordFocused(false);
    }

    // Contact
    if (contact === "") {
      setContactError("Enter your phone number !!");
      setContactFocused(true);
    } else if (contact.length != 8) {
      setContactError("Your phone number must be 8 digits !!");
      setContactFocused(true);
    } else {
      setContactError("");
      setContactFocused(false);
    }

    // name
    if (name === "") {
      setNameError("Enter your Name !!");
      setNameFocused(true);
    } else if (name !== "") {
      setNameError("");
      setNameFocused(false);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Done");
        submitUserData(); // Submit the data to the "user" collection here
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error.message);
        let e = error.code;
        setInvalidMessage(e);
        console.log(invalidMessage);
      });
  };

  const submitUserData = async () => {
    const docRef = doc(db, "user", email.toLocaleLowerCase());
    console.log(email, password, name, contact);
    await setDoc(docRef, {
      email: email.toLocaleLowerCase(),
      name: name,
      contact: contact,
      address: { city: "", streetNum: "", streetName: "", buidingNum: "" },
    })
      .then(() => {
        console.log("Data submitted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const clear = async () => {
    console.log("this is clear");
    setName("");
    setContact("");
    setEmail("");
    setPassword("");
    ConfirmsetPassword("");
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{ backgroundColor: "white", width: 450, height: 1200 }}
      >
        <View>
          <Image
            style={{ width: 400, height: 200, borderRadius: 30 }}
            source={require("../assets/Images/choose.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 25, marginLeft: 10, marginBottom: 10 }}>
            {" "}
            Create account
          </Text>
        </View>
        <View>
          <Text style={[styles.txtstyle]}>Email</Text>
          <TextInput
            placeholder="Email Address"
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  (email === "" && emailFocused === true) || emailFocused
                    ? "red"
                    : "grey",
              },
            ]}
            onChangeText={(text) => setEmail(text)}
          />
          {(email === "" && emailFocused === true) || emailFocused ? (
            <Text style={styles.error}>{emailError}</Text>
          ) : null}

          <Text style={[styles.txtstyle]}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  (password === "" && passwordFocused === true) ||
                  passwordFocused
                    ? "red"
                    : "grey",
              },
            ]}
            onChangeText={(text) => setPassword(text)}
          />
          {(password === "" && passwordFocused === true) || passwordFocused ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : null}

          <Text style={[styles.txtstyle]}>Confirm Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  (confirmPassword === "" && confirmPasswordFocused === true) ||
                  confirmPasswordFocused
                    ? "red"
                    : "grey",
              },
            ]}
            onChangeText={(text) => ConfirmsetPassword(text)}
          />
          {(confirmPassword === "" && confirmPasswordFocused === true) ||
          confirmPasswordFocused ? (
            <Text style={styles.error}>{confirmPasswordError}</Text>
          ) : null}

          <Text style={[styles.txtstyle]}>Name</Text>
          <TextInput
            placeholder="Your Name"
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  (name === "" && nameFocused === true) || nameFocused
                    ? "red"
                    : "grey",
              },
            ]}
            onChangeText={(text) => setName(text)}
          />
          {(name === "" && nameFocused === true) || nameFocused ? (
            <Text style={styles.error}>{nameError}</Text>
          ) : null}

          <Text style={[styles.txtstyle]}>Contact</Text>
          <TextInput
            placeholder="+974"
            style={[
              styles.textInput,
              {
                borderBottomColor:
                  (contact === "" && contactFocused === true) || contactFocused
                    ? "red"
                    : "grey",
              },
            ]}
            onChangeText={(text) => setContact(text)}
          />
          {(contact === "" && contactFocused === true) || contactFocused ? (
            <Text style={styles.error}>{contactError}</Text>
          ) : null}
        </View>
        <View>
          <Pressable
            onPress={handleRegister}
            style={{
              alignItems: "center",
              backgroundColor: "#998184",
              borderRadius: 10,
              marginRight: 5,
              width: 300,
              marginLeft: 68,
              marginTop: 25,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                margin: 10,
                width: 140,
                height: 30,
                fontSize: 20,
              }}
            >
              {" "}
              SIGN UP
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  txtstyle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  },
  textInput: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    fontSize: 20,
    margin: 25,
    // width: 390,
    marginBottom: 5,
  },
  error: {
    color: "red",
    // marginTop: 15,
  },
});
