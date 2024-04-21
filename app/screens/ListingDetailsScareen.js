import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text} from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';


function ListingDetailsScareen(props) {
    console.log("App executed2");
    return (
        <View>
           <Image style={styles.image}source={require('../assets/logo.png')}></Image>
            <View style={styles.detailsContainer}>
             
                <Text style={styles.title}>Miami Beach</Text>
                <Text style={styles.price}>340 000$</Text>
                <View style={styles.userContainer}>
             <ListItem
                image = {require('../assets/user.png')}
                title='maziar'
                description='5 listing'
            />
            </View>
           </View>
           

        </View>
    );
    }
    const styles = StyleSheet.create({
        detailsContainer: {
            padding: 20,
            
        },
        image: {
            width: '100%',
            height: 300
        },
        title: {
            fontSize: 24,
            fontWeight: '400'
        },
        price: {
            color: colors.secondryColor,
            fontWeight: 'bold',
            fontSize: 20,
        },
        userContainer: {
            marginVertical: 10,
        }
        
    })



export default ListingDetailsScareen;