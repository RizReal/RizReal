import React from 'react';
import { Image, ImageBackground, StyleSheet, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

console.log("App executed2");
function WelcomeScreen(props) {
    return (
      
        <ImageBackground 
        style= {styles.backgraound}
        source={require('../assets/sun.jpg') } >
        <View style={styles.loginButton}></View>
        <View style={styles.RegisterButton}></View>

        </ImageBackground>
        
        
    );
}

const styles = StyleSheet.create({
    backgraound:{
        flex: 1,
        justifyContent: 'flex-end'
       
    },
    loginButton: {
        width: '100%', 
        height: 70 ,
        backgroundColor: "#fc5c65", 
        

    },
    RegisterButton: {
        width: '100%', 
        height: 70 ,
        backgroundColor: "#4ecdc4", 
       

    }

})
export default WelcomeScreen;