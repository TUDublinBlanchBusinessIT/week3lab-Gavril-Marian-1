import {View, Text, TextInput,Button} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/Logo';

export default function App(){
  const [fullname, setFullname] = useState("Eoin");
  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("22 August 1990");
   function buttonClicked() {
    
    alert(`First name: ${fname}\nLast name: ${lname}\nDate of birth: ${dob}`); 
  }
  return(
    <View> 
    <Logo />
      <Text>Hello, World {fullname}</Text>
   
      <TextInput
        placeholder="Enter your name"
        onChangeText={setFullname}
      />
      <TextInput
        placeholder="Enter your firstname"
        onChangeText={setFname}
      />
      <TextInput
        placeholder="Enter your lastname"
        onChangeText={setLname}
      />
      <TextInput
        placeholder="Enter your date of birth"
        onChangeText={setDob}
      />

   

      <Button title="SUBMIT" onPress={buttonClicked} />

      <Text>Hello {fname} {lname}. You were born on {dob}</Text>
    </View>
  );
}
  