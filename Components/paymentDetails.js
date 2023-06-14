import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  Pressable,
} from "react-native";
import { auth, db } from "./Config";
import {
  addDoc,
  getDoc,
  getDocs,
  ref,
  where,
  collection,
  doc,
  query,
  setDoc,
} from "firebase/firestore";

export default function PaymentDetails({ navigation, route }) {
  const [saveCardDetails, setSaveCardDetails] = useState(false);

  const [CardverfVal, setCardverfVal] = useState("");
  const [cardverfValError, setCardverfValError] = useState("");
  const [cardverfValFocused, setCardverfValFocused] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [cardNumError, setCardNumError] = useState("");
  const [cardNumFocused, setCardNumFocused] = useState(false);
  const [CardExpDate, setCardExpDate] = useState("");
  const [CardExpYear, setCardExpYear] = useState("");
  const [cardDateError, setCardDateError] = useState("");
  const [cardDateFocused, setDateFocused] = useState(false);
  const [cardYearError, setYearError] = useState("");
  const [cardYearFocused, setCardYearFocused] = useState(false);
  const [payData, setPayData] = useState([]);
  const [invalidMessage, setInvalidMessage] = useState("");

  let userId = auth?.currentUser?.email;
  console.log(userId);

  const handleSaveCardDetailsToggle = () => {
    setSaveCardDetails(!saveCardDetails);
  };

  const add = async () => {
    if (
      cardNum === "" ||
      CardverfVal === "" ||
      CardExpDate === "" ||
      CardExpYear === ""
    ) {
      if (cardNum === "") {
        setCardNumError("Enter your Card Number!!");
        setCardNumFocused(true);
      } else if (cardNum !== "" && cardNum.length < 16) {
        setCardNumError("Card Number must be 16 characters!!");
        setCardNumFocused(true);
      } else {
        setCardNumError("");
        setCardNumFocused(false);
      }
      if (CardverfVal === "") {
        setCardverfValError("Enter your Card Verification Value!!");
        setCardverfValFocused(true);
      } else if (CardverfVal !== "" && CardverfVal.length < 3) {
        setCardverfValError(
          "Card Verification Value must be less then 3 characters!!"
        );
        setCardverfValFocused(true);
      } else {
        setCardverfValError("");
        setCardverfValFocused(false);
      }
      if (CardExpDate === "" || CardExpYear === "") {
        setCardDateError("Enter your Expiration date!!");
        setDateFocused(true);
        setYearError("");
        setCardYearFocused(true);
      } else if (
        (CardExpDate !== "" && CardExpDate.length < 2) ||
        (CardExpYear !== "" && CardExpYear.length < 2)
      ) {
        setCardDateError("The expiration date is not vaild !!");
        setDateFocused(true);
        setYearError("");
        setCardYearFocused(true);
      } else {
        setCardDateError("");
        setDateFocused(false);
        setYearError("");
        setCardYearFocused(false);
      }
    } else {
      const docRef = await addDoc(collection(db, "paymentDetails"), {
        CardExpDate: CardExpDate,
        CardExpYear: CardExpYear,
        CardverfVal: CardverfVal,
        cardNum: cardNum,
      });
      navigation.navigate("TrackOrder");
    }

    console.log("Document id from checkout ", docRef.id);
    console.log(
      "hello from mnoosh payment ",
      CardExpDate,
      CardExpYear,
      CardverfVal,
      cardNum
    );
  };

 

  const handelBoth = () => {
    console.log("hii mnoosh from both payment ");
    add();
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <Text style={styles.title}>Card Payment</Text>
      <View style={styles.content}>
        <View style={styles.space} />
        <Text style={styles.boldTextLarge}>Summary Payment</Text>
        <View style={styles.paymentDetails}>
          <Text style={styles.subtitle}>Sub-total: 5000 QR</Text>
          <Text style={styles.subtitle}>Discount: 0%</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitle}>Total Amount: 5000 QR</Text>
        </View>

        <View style={{ margin: 15, width: 400 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5, marginLeft: 5 }}>
                        Summary Payment
                    </Text>
                    <View style={[{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15 }]} >
                        <View
                            style={[
                                {
                                    width: 320,
                                    margin: 3,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                },
                            ]}
                        >
                            <Text style={{ fontSize: 15 }}>Sub-Total</Text>
                            <Text style={{ fontSize: 15 }}>{route.params.subAmount}QR</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            {
                                marginBottom: 3,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            },
                        ]}
                    >
                        <View
                            style={[
                                {
                                    width: 320,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginLeft: 15,
                                },
                            ]}
                        >
                            <Text style={{ margin: 5, fontSize: 15 }}>Discount</Text>
                            {route.params.discountValue ? (
                                <Text style={{ margin: 3 }}>{route.params.discountValue} %</Text>
                            ) : (
                                <Text style={{ margin: 3 }}>0 %</Text>
                            )}
                        </View>
                    </View>
                    <View
                        style={[
                            {
                                marginBottom: 3,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderTopWidth: 1,
                                borderColor: "#d3d3d3",
                                width: 350,
                                marginLeft: 10,
                            },
                        ]}
                    >
                        <View
                            style={[
                                {
                                    width: 320,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginLeft: 15,
                                },
                            ]}
                        >
                            <Text style={{ margin: 5, fontSize: 15 }}>Total Amount</Text>
                            {route.params.discountValue ? (
                                <Text style={{ margin: 3 }}>{route.params.subAmount} QR</Text>
                            ) : (
                                <Text style={{ margin: 3 }}>{route.params.discountTotal} QR</Text>
                            )}
                            {/* <Text style={{ margin: 5, fontSize: 15 }}>{discountTotal}QR</Text> */}
                        </View>
                    </View>
                </View>

        <Text style={styles.boldTextLarge}>Card Details</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            placeholder="Card Number"
            onChangeText={(text) => setCardNum(text)}
          />
          {(cardNum === "" && cardNumFocused === true) || cardNumFocused ? (
            <Text style={styles.error}>{cardNumError}</Text>
          ) : null}
          <Text style={styles.label}>Card expiry date</Text>
          <View style={styles.expiryContainer}>
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="MM"
              onChangeText={(text) => setCardExpDate(text)}
            />
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="YY"
              onChangeText={(text) => setCardExpYear(text)}
            />
          </View>
          {(CardExpDate === "" && cardDateFocused === true) ||
          cardDateFocused ? (
            <Text style={styles.error}>{cardDateError}</Text>
          ) : null}
          {(CardExpYear === "" && cardYearFocused === true) ||
          cardYearFocused ? (
            <Text style={styles.error}>{cardYearError}</Text>
          ) : null}
          <Text style={styles.label}>Card Verification Value</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="CVV"
            onChangeText={(text) => setCardverfVal(text)}
          />
          {(CardExpDate === "" && cardverfValFocused === true) ||
          cardverfValFocused ? (
            <Text style={styles.error}>{cardverfValError}</Text>
          ) : null}
          <View style={styles.checkboxContainer}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={saveCardDetails ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleSaveCardDetailsToggle}
              value={saveCardDetails}
            />
            <Text style={styles.checkboxText}>
              For faster and more secure checkout save your card details
            </Text>
          </View>
        </View>
        <View style={styles.space} />
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Images/payment.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Pressable style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>Pay now</Text>
        </Pressable>
        <View style={styles.space} />
      </View>
      <View style={styles.space} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  space: {
    height: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 25,
  },
  content: {
    flex: 1,
  },
  boldTextLarge: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  paymentDetails: {
    marginTop: 10,
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
  },
  cardDetails: {
    marginTop: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  expiryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expiryInput: {
    width: "45%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#998184",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
});