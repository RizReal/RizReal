import react from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Platform, TouchableOpacity} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from "./app/components/Card";
import AppText from "./app/components/AppText";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import ListingDetailsScareen from "./app/screens/ListingDetailsScareen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  console.log("App executed1");

//return <WelcomeScreen/>;
//return  <ListingDetailsScareen />;
return <MessagesScreen />;
 }


