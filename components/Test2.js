import React from 'react';
import {View, Text, StatusBar,Platform,StyleSheet} from 'react-native';
import {AppLoading} from"expo";
import {useFonts,Raleway_200ExtraLight} from "@expo-google-fonts/raleway";

function Test2(){
  let [fontsLoaded ,error] = useFonts({
    Raleway_200ExtraLight
  })
  if(!fontsLoaded){return <AppLoading/>}
  return(
    <View style={styles.container}>
    <Text style={styles.textc}>SHADOWS</Text>
    <View style={styles.div}></View>
    <View style={styles.div1}></View>
    <View>
    <Text>Good Morning</Text>
    <Text style={{fontFamily:"Raleway_200ExtraLight",fontSize:30}}>Morning</Text>
    <Text>Hello world</Text>
    </View>
    </View>
    );
}
export default Test2;

const styles = StyleSheet.create({
  textc:{alignSelf : "center"},
  container:{
padding : Platform.OS == "android" ? StatusBar.currentHeight : 30},
  div : {
    backgroundColor :"red",
    width:100,height:100},
  div1 : {
    backgroundColor:"dodgerblue",
    width:200,
    height:200,
    borderColor: "green",
    margin:10,
   // borderWidth:10,
   // borderTopWidth:20,
    borderRadius:10,
    shadowColor:"grey",
    shadowOpacity:1,
    shadowRadius:10,
    elevation:10,
    shadowOffset:{width:10,height:10},
    },
  })