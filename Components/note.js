  //   const add = async () => {

  //     if (!CardNum || !CardExpDate|| !CardExpYear || !CardverfVal || !saveCardDetails ) {
  //       console.log('Please fill in all fields');
  //       //return;

  //     }

  //     else{
  //     const docRef = await addDoc(collection(db, "paymentDetails"), {
  //       CardNum: CardNum, CardExpDate: CardExpDate,CardExpYear: CardExpYear,CardverfVal:CardverfVal,saveCardDetails:saveCardDetails
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //     handleRegister()
  //     console.log("hii from add")
  // }

  // }
  // const compareWithFirestore = async () => {
  //   try {
  //     // Create a Firestore query to retrieve documents that match the user data
  //     const q = query(collection(db, 'paymentDetails'), where('CardNum', '==', userData));

  //     // Execute the query and get the matching documents
  //     const querySnapshot = await getDocs(q);

  //     // Check if any matching documents were found
  //     if (!querySnapshot.empty) {
  //       // Perform your desired action when a match is found
  //       console.log('User data found in Firestore');
  //     } else {
  //       // Perform your desired action when no match is found
  //       console.log('User data not found in Firestore');
  //     }
  //   } catch (error) {
  //     console.error('Error comparing with Firestore:', error);
  //   }
  // };
