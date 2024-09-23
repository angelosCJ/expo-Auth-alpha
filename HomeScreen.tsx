import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Authenticate';

// Define the type for the stack's route parameters
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number; message: string };
};

// Typing for the navigation prop
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  // Access the navigation with proper types
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

   const logIn = async (e:any) =>{
     e.preventDefault();
     try {
        await signInWithEmailAndPassword(auth,email,password);
        navigation.navigate('Details', {
            itemId: 42,
            message: 'Hello from Home!',
          });
          console.log("log in successful");
     } catch (error) {
        console.log("unsuccessful log in",error);
     }
   }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In</Text>
     <TextInput placeholder='Email' value={email}  onChangeText={text => setEmail(text)}/>
     <TextInput  placeholder="Password" secureTextEntry={true}  onChangeText={ text => setPassword(text)} />
      <Button
        title="Log in"
        onPress={logIn}
      />
    </View>
  );
};

export default HomeScreen;
