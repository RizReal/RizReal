import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import {Swipeable} from 'react-native-gesture-handler/Swipeable';

import ListItemDeleteAction from '../components/ListItemDeleteAction';
const InitialMessages= [
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

    const [messages, setMessages] = useState(InitialMessages);
    const handelDelete = message => {
    setMessages(messages.filter (m => m.id !== message.id ));
    }

    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
                <ListItem
                 title = {item.title}
                 description = {item.description}
                 image = {item.image}s
                 onPress={() => console.log('Message selected',item)}
                 renderRightActions={ () =>
                                    <ListItemDeleteAction onPress={() => handelDelete(item)}/>
                                    }

                >
                </ListItem>
            }
            ItemSeparatorComponent={ListItemSeparator}
            ></FlatList>
           
        </Screen>
    );
}

export default MessagesScreen;

 /* function MessagesScreen(props) {
 


        <Screen>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => 
           <ListItem
               title = {item.title}
               description = {item.description}
               image = {item.image}
                onPress={() => console.log('Message selected',item)}
                renderRightActions={() =>  (
                <View style={{
                        backgroundColor: 'red',
                       width: 70,
                       }}>
                   </View>
    )}
            /> )}
            ItemSeparatorComponent={ListItemSeparator}
        
    
    
     </Screen>
     */
