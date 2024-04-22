import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import colors from '../config/colors';


function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
             <View style={styles.container}>
                 <MaterialCommunityIcons name="trash-can" size={45} color={colors.white}/>
             </View>
        </TouchableWithoutFeedback>

    );
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colors.denger,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;