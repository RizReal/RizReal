import React from 'react';
import { View,StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, description, image, onPress}) {
    return (
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
            
        <View style={styles.container}>
            <Image style={styles.image} source={image}  
            />
            <View>
                <Text style={styles.title}>{title}</Text>
                <AppText style={styles.description}>{description}</AppText>
            </View>
        </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        margin:10

    },
    description:{

    },
    title:{
        paddingTop:20,
        fontWeight: '500',
        fontSize: 18,
    }
})

export default ListItem;