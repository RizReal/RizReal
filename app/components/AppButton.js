import React from 'react';
import { Text, View, StyleSheet } from 'react-native';;

import colors from '../config/colors'; 
import { TouchableOpacity } from 'react-native';

function AppButton({title, onPress, color = "primaryColor"}) {
    return (
        
        <TouchableOpacity style={[styles.AppButton, {backgroundColor: colors[color]}]} onPress={onPress}>
        
            <Text style={styles.AppText}>{title}</Text>
        
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    AppButton: {
      
        backgroundColor: colors.primaryColor, 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginVertical: 10,
        
    },
    AppText: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }


})

export default AppButton;