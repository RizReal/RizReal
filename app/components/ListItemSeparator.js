import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ListItemSeparator() {
    return (
       <View style= {styles.saparator}/>
    );
}
const styles = StyleSheet.create({
    saparator:
    {
        width: '70%',
        marginLeft: '15%',
        height: 1,
        backgroundColor: colors.light,
        
    }
})

export default ListItemSeparator;