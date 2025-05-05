import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';


const logoImg = require('../assets/avatar.png');

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
      <Text style = {styles.message}>message             notifications</Text>
      <View style = {styles.secondview}>
        <Text style = {styles.name}>Bert Pullman</Text>
        <Text style = {styles.onlineText }> Online </Text>
        <Image source = {logoImg} 
              style = {styles.avatar}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"flex-start",
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 30,
  },
  message:{
    fontsize:15,
    width: 241,
    height: 33,
    alignSelf: 'center',
  },
  secondview:{
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    width: 335,
    height: 136,
    alignSelf: 'baseline',
    
    paddingLeft: 20,
    
    },
    name: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      paddingLeft: 70,
      paddingTop : 40,
      
      
    },
    onlineText:{
      fontSize: 15,
      paddingLeft: 65,
      color: 'grey',
    },
    avatar: {
      width: 50,
      height: 50,
      marginLeft: 15,
      paddingBottom: 30,
    },
});

export default MessageScreen;
