import * as React from 'react';  //import necessary modules from react and React natve 
import { View ,Image} from 'react-native';    //View is a component of react native that helps in organizing the elements on the screen.
import SignupScreen from './pages/sign-up-page/signUp';   //Importing the SignUpScreen component from the specified file path F39F5A



// Main App component
//This component created to show the sign Up screen to the User.
export default function App() {
  return (
    // Main container view with flex styling
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#205295'}}>    
      {/* Render the SignUpScreen component */}
      <SignupScreen />
    </View>
  );
}






