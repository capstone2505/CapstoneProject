// Checkout Done 
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput, SafeAreaView, Button } from 'react-native'
import { SelectCountry } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//DB work
import { auth, db } from './Config';
import { getDocs, collection, query, where , doc, getDoc , addDoc ,setDoc} from "firebase/firestore";

const Checkout = ({ navigation, route }) => {
  
  const total = route.params.total
  console.log("mbnm,gmhgkmgn");
  console.log(total);
  const discountValue = route.params.discountValue
  const discountTotal = route.params.discountTotal
  const subAmount = route.params.subAmount

  const [profile, setProfile] = useState()
  let userId = auth?.currentUser?.email;
  // const id = userId.toCase();
  console.log(userId);

  useEffect(() => {
    readAllWhere();
  }, [userId]);

  const readAllWhere = async () => {
    const docRef = doc(db, 'user', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(data);
      setProfile(data);  
    }
  }
  console.log('profile');
  console.log(profile);

  const local_data = [
    {
      value: '1',
      lable: 'Select City',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '2',
      lable: 'Country 2',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '3',
      lable: 'Country 3',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];

  const [country, setCountry] = useState('1');

  ///////////// Date picker /////////////
  

  useEffect(() => {
    // Do something with the selected date
    console.log('Selected Date:', selectedDate);
  }, [selectedDate]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
  };


  ///////////// Time picker /////////////

  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  const showPicker = () => {
    setIsVisible(true);
  };

  const hidePicker = () => {
    setIsVisible(false);
  };

  const handleConfirmTime = (selectedDate) => {
    setDate(selectedDate);
    hidePicker();
  };

  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [streetNumber, setStreetNumber] = useState()
  const [streetName, setStreetName] = useState()
  const [buildingNumber, setBuildingNumber] = useState()
  const [city,setCity]=useState()

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const datestring = selectedDate.toLocaleDateString()
  const timestring = date.toLocaleTimeString()
  const [errorMessage, setErrorMessage] = useState("");

  const addAddress = async () => {
    const docRef = doc(db, "checkout", userId);
    await setDoc(docRef, {
      streetNumber:streetNumber,
          streetName:streetName,
          buildingNumber:buildingNumber,
          email:email,
          contact:contact,
          datestring:datestring,
          timestring:timestring,
          city:city
    })
      .then(() => {
        console.log("Data submitted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });


      const docRef2 = doc(db, "user", userId);
      await setDoc(docRef2, {
        address:{
          streetName:streetName,
            buidingNum:buildingNumber,
            city:city,
            streetNum:streetNumber
        },
      },{merge:true})
        .then(() => {
          console.log("Data submitted successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
  };
// ...

const handleConfirmButton = () => {
  if (!streetNumber || !streetName || !buildingNumber || !city || !contact || !email || !selectedDate || !date) {
    // Display an error message or perform any desired action
    const errorMessage = "Please fill All the Fields !!!";
    setErrorMessage(errorMessage);
    return;
  }

  navigation.navigate({
    name: "ConfirmOrder",
    params: {
      discountValue: discountValue,
      discountTotal: discountTotal,
      subAmount: subAmount,
    }
  });
}

// ...

const ConfirmandSave = () => {
  addAddress();
  handleConfirmButton();
};

// ...

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: 'bold' }}>Add Address</Text>
      {/* address stuff  */}
      
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        
        <View style={[styles.txt, { flexDirection: 'row', marginBottom: 0 }]}>
          <Octicons name='number' color={'#998184'} size={20} />
          <TextInput style={{ color: 'black' }}
            placeholder="  Street Number"
            value={streetNumber}
            onChangeText={(txt) => setStreetNumber(txt)}
          />
        </View>
        <View style={[styles.txt, { flexDirection: 'row', marginBottom: 0 }]}>
        <MaterialIcons name='edit-road' color={'#998184'} size={20} />
          <TextInput style={{ color: 'black' }}
            placeholder="  Street Name"
            value={streetName}
            onChangeText={(txt) => setStreetName(txt)}
          />
        </View>
        <View style={[styles.txt, { flexDirection: 'row', marginBottom: 0 }]}>
        <MaterialCommunityIcons name='office-building-marker-outline' color={'#998184'} size={20} /> 
          <TextInput style={{ color: 'black' }}
            placeholder="Building Number"
            value={buildingNumber}
            onChangeText={(txt) => setBuildingNumber(txt)}
          />
        </View>
        
        <View style={[styles.txt, { flexDirection: 'row', marginBottom: 0 }]}>
          <FontAwesome5 name='city' color={'#998184'} size={20} />
          <TextInput style={{ color: 'black' }}
            placeholder="  Enter City"
            value={city}
            onChangeText={(txt) => setCity(txt)}
          />
        </View>
      </View>
{/* the end of the address  */}
      <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: 'bold'}}>Contact Info</Text>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={[styles.txt, { flexDirection: 'row', marginBottom: 0 }]}>
          <Fontisto name='email' color={'#998184'} size={20} />
          <TextInput style={{ color: 'black' }}
            placeholder="Example@gmail.com"
            value={email}
            onChangeText={(txt) => setEmail(txt)}
          />
        </View>
        <View style={[styles.txt, { flexDirection: 'row', marginBottom: 0 }]}>
          <FontAwesome name='phone' color={'#998184'} size={20} />
          <TextInput style={{ color: 'black' }}
            placeholder="  +974 0000 0000"
            value={contact}
            onChangeText={(txt) => setContact(txt)}
          />
        </View>
      </View>

      <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: 'bold'}}>Select Event Date and Time</Text>
      <View style={{ alignItems: 'center', marginBottom: 20 , marginTop: 10 }}>

        <View style={{ flexDirection: 'row' }}>
          <Pressable onPress={showDatePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Date</Text>
          </Pressable>
          <DateTimePickerModal
          //onPress={setSelectedDate}
          onChangeText={txt => setSelectedDate(txt)}  
          isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
          />
          {selectedDate && (
            <Text style={[styles.button, styles.txt, { color: '#998184', width: 240 }]}>Selected Date: {selectedDate.toLocaleDateString()} </Text>
          )}
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Pressable onPress={showPicker} style={[styles.button]}>
            <Text style={[styles.buttonText]}>Select Time</Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={isVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hidePicker}
          />
          <Text style={[styles.button, styles.txt, { color: '#998184', width: 240 }]}>Selected Time: {date.toLocaleTimeString()}</Text>
        </View>
      </View>
            
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={{ marginBottom: 30, marginTop: 10, alignSelf: 'center', alignItems: 'center', backgroundColor: '#998184', width: 300, height: 50, borderRadius: 8, padding: 8, marginTop: 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={ConfirmandSave}>
            <Text style={{ color: 'white', marginTop: 5, fontSize: 20 }}> Confirm Order</Text>
          </Pressable>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    height: 20,
    width: 330,
    backgroundColor: '#F7EBED',
    borderRadius: 22,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,

  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  searchIcon: {
    padding: 10,
  },
  txt: {
    width: 350,
    padding: 10,
    borderRadius: 8,
    margin: 6,
    backgroundColor: '#F7EBED',
  },
  button: {
    backgroundColor: '#998184',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
  errorText:{color: "red", fontSize:20}
});