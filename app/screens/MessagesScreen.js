import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages= [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/user.png'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/user.png'),
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
            <ListItem
                title = {item.title}
                description = {item.description}
                image = {item.image}
                onPress={() => console.log('Message selected')}
            /> }
            ItemSeparatorComponent={ListItemSeparator}
        />
    </Screen>
    );
}


export default MessagesScreen;