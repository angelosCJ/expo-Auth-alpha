// Import necessary functions from Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAMSVD1wV3DI5R_jTXDb9moF9sQRVz283s",
  authDomain: "expoauth-c46c6.firebaseapp.com",
  projectId: "expoauth-c46c6",
  storageBucket: "expoauth-c46c6.appspot.com",
  messagingSenderId: "864071944909",
  appId: "1:864071944909:web:9598aa209c2587ae4ab784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

// Handle authentication persistence manually
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Save user to AsyncStorage
    await AsyncStorage.setItem('@user', JSON.stringify(user));
  } else {
    // Clear AsyncStorage if user logs out
    await AsyncStorage.removeItem('@user');
  }
});

export { auth };
