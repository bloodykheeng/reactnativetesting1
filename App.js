import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView , Image , TouchableHighlight, Button, Alert,ScrollView, Platform , StatusBar , Dimensions, ImageBackground } from  'react-native';
import {AppLoading} from "expo";

import  Test from './components/test1';
import  Test2 from './components/Test2';


export default function App() {
 return(
   <ScrollView>
   <Test2 />
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:Platform.OS == "android" ? StatusBar.currentHeight : 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plattype: {
 color : Platform.OS == "android" ? "green" : "red"
  },
});
