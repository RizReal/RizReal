import React from 'react';
import { View,StyleSheet, Image, Text, AppText } from 'react-native';

import colors from '../config/colors';

function Card({title, subtitle, image}) {
    return (
        <View style={styles.Card}>
            <Image style={styles.image} source={image}></Image>
           
        </View>
    );
}

const styles = StyleSheet.create({
    Card: 
    {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,

    },
    image: {
        width: '100%',
        height: 200,
    },
})

export default Card;