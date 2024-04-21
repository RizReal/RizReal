import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

console.log("Screen");
function WelcomeScreen(props) {
    return (
      
        <ImageBackground 
       
        style= {styles.backgraound}
        source={require('../assets/sun.jpg') } >
        <View style={styles.logoContiner}>
            <Image style={styles.logo}source={require('../assets/logo.png')}></Image>
            <Text style={styles.logoTag}>Buy it, pices by pices</Text>

        </View>
        <View style={styles.buttonsContiner}>
        <AppButton title="login" onPress={() => console.log("TAPED")}></AppButton>
        <AppButton title="register" color="secondryColor" onPress={() => console.log("TAPED")}></AppButton>

        </View>

        </ImageBackground>
        
        
    );
}

const styles = StyleSheet.create({
    backgraound:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
       
    },
    RegisterButton: {
        width: '100%', 
        height: 70 ,
        backgroundColor: colors.secondryColor, 
       

    },
    logo: {
        width: 150, 
        height: 150 ,
    },
    logoContiner: {
        position: 'absolute',
        top: "10%",
        alignItems: 'center',
        
    },
    buttonsContiner:{
        padding: 40,
        width: "100%",
        top: "-5%"
        

    },
    logoTag: {
        fontSize: 20,
        fontWeight: "500",
        paddingVertical: 20,
    },

})
export default WelcomeScreen;