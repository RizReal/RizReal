import React from 'react';
import { Text, StyleSheet,Platform } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontWeight: '200'
        //fontFamily: Platform.OS 

    }
})

export default AppText;