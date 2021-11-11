//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image , TouchableHighlight, Button, Alert, Platform , StatusBar , Dimensions, ImageBackground } from  'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'


     function Test() {
  //console.log(Dimensions.get("screen"))
  console.log(useDimensions())
  console.log(useDeviceOrientation())
  return (
    
    <View>
    
    <View style={styles.container}>
      <Text>
      the bloody kheeng first app
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum demarco
      
      </Text>
      <Image style={{resizeMode:"contain" ,width:400,height:500}}  source={require("../assets/img/istockphoto-1141049173-612x612.jpg")}/>
      <TouchableHighlight onPress={ console.log("ive been pressed hlo")} >
      <Image style={{width:400,height:300}} source={{uri : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"}}/>
      </TouchableHighlight>
      <Text> image end </Text>
      <Button title="clickme" onPress={()=> alert("button pressed") } />
     <Button title="alert button" onPress={()=>{ Alert.alert("mytitle","my message",[{text:"yes"},{text:"no"}])}}/> 
     <Button title="display console" onPress = {()=> Alert.alert("hello","how are you doing bro",[{text:"yes",onPress:()=> console.log("he chose yes")},{text:"no",onPress:()=> console.log("he chose no")}])}/>
     <Button title="ios button" onPress={()=> Alert.prompt("ios only","Are you an ios user bro",(text)=>console.log(text))}/>
  <Button title="platform" onPress={()=> console.log(Platform.OS)} />
  <Text style = {styles.plattype} >Lorem Ipsum lllllkhjsjshhsbshshhhhshehhhehhehehhehehehbebehbebebee </Text>
  <Text>{Platform.OS}</Text>
  <Text>{StatusBar.currentHeight}</Text>
    </View>
   
   
   
    <View style={{
flexWrap:"wrap",
    flex:1,backgroundColor:"green",height:500,width:500,justifyContent:"center"}}>
    
   <View
style={{height:100, width:200, backgroundColor:"yellow",alignSelf:"center"}}
    ></View>
    <View
style={{height:100, width:100, backgroundColor:"blue",position:"absolute", alignSelf:"center"}}
    ></View>
    </View>
    
    <View style={{flex:1, height:500}}>
    <ImageBackground source={require("../assets/img/wintersoldier.jpg")}
    style={{flex:1,height:400}}
    >
    <Text>Winter soldier</Text>
    </ImageBackground>
    </View>
   
  
    </View>
  );
}
export default Test;

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
