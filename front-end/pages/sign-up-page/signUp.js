// Import necessary modules from the 'react' and 'react-native' libraries
import { View, Text, TextInput, Button, StyleSheet,Image,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
const logoImg = require('./images/image2.jpg')
// const Google_G_logoImg = require('./icons/Google_G_logo.svg.png')

// Define the SignUp functional component.
const SignupScreen = () => {
  // State variables to hold email and password using the 'useState' hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // create a function to handle signup
  const handleSignup = () => {
    // Implement signup logic here, e.g., send data to a backend API
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add API call or authentication logic here
  };

  // render the UI for SignUp Screen
  const Spacer = ({ size }) => <View style={{ width: 100, height: 20 }} />;

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={{width:390 ,height:250,borderRadius:30,padding:10}}/>
      {/* Display a welcome message. */}
      <Spacer size={100} />
      <Text style={styles.title}>Let's Sign Up!!!!</Text>
      <Spacer size={90} />
      {/* Text Input for entering email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Spacer size={90} />

      {/* TextInput for entering Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {/* <Spacer size={100} /> */}
      <Button title="               Sign Up               " onPress={handleSignup} />
      <Spacer size={100} />
      <Text style={{textAlign:'center', color:'black'}}>Or Sign up with...</Text>
      {/* <Image source={Google_G_logoImg}/> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  
  title: {
    fontSize: 24,
    marginBottom: 16,
    
  },

  input: {
    height: 40,
    width: 300,
    borderColor: '#9EC8B9',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },


  button: {
    width: 80, // Set the desired width for all buttons
    backgroundColor: '#3498db',
    borderRadius: 10,

  },
});

//hi i 'm dumindu
//This is a comment



export default SignupScreen;

