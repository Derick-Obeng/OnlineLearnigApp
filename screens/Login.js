import React, { useState } from 'react';
import { StyleSheet, Text, View ,StatusBar, TextInput,Image } from 'react-native';
import Button from '../components/Button';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login({navigation}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style= {styles.header}>Login</Text>
       
      </View>
     
      <View style={styles.email}>
        <Text style={styles.etext}>Your email</Text>
        <TextInput style={styles.input}/>
      </View>

      <View style={styles.password}>
        <Text style={styles.passText}>Password</Text>
         
        
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 20, borderWidth: 1, borderColor:'gray', borderRadius: 10,width: 320}}>
        <TextInput style={styles.secondInput} secureTextEntry={!showPassword} />
        <Entypo name={showPassword ? 'eye-with-line' : "eye"} size={24} color="black" onPress={() => setShowPassword(!showPassword)} 
          style={styles.eye}/>
      </View>

      <View>
        <Text style={styles.forget}>Forget password?</Text>
        <Button title='Log in' style={styles.button} onPress={()=>navigation.navigate('Tabs')} />
      </View>

      <View style={styles.anAccount}>
        <Text style={styles.account}>Don't have an account? <Text style={styles.signup}> Sign up</Text></Text>
       
      </View>

      <View style={styles.with}>
        <View style={styles.textHolder}>
         <Text style={styles.or}> or login with</Text>
         </View>
          <View style = {{
        height: 2,
        backgroundColor: 'rgba(112,112,112, 0.2)',
        width: '90%',
        marginLeft: 20
      }}/>
         
      </View>

      <Image source={require('../assets/google.jpeg')} style={{width: 40, height: 40, marginLeft: 130, marginTop: 20}} />
      <Image source={require('../assets/facebook.jpeg')} style={{width: 50, height: 70, marginLeft: 200, marginTop: -50}} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  head: {
    padding: 70,
    backgroundColor:'#ddd' ,
    marginBottom:30
    
    
  },
  eye:{
    marginRight: 30,
  },
  textHolder: {
    backgroundColor: "white",
    height: 40,
    width: 100,
    position:'absolute',
    bottom: -15,
    left: 130,
    zIndex:100,
    alignItems:'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: 320,
    marginLeft:10,
    borderRadius: 10,
  },
  email: {
    fontSize: 20,
    color: 'grey',
    marginLeft: 10,
  },
  etext: {
    marginLeft: 10,
    color: 'gray',
  },
  password: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 10,
  },
  secondInput: {
    height: 40,
    paddingLeft: 10,
    width:'88%',
    borderRadius: 10,
  },
  passText: {
    marginLeft: 10,
     color: 'gray',
  },
  forget:{
    marginLeft: 230,
    color: 'grey',
    },
  button: {
    marginLeft: 10,
    backgroundColor: '#B6C0C0',
    borderRadius: 10,
    width: 120,
    height: 10,
    marginTop: 40,
  },
  anAccount: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 100,
  },
  account: {
    color: 'grey',
    textAlign:'center'
  },
  signup: {
    color: 'blue',
  },
  or: {
    color: 'grey',
   alignItems: 'center',
   justifyContent: 'center',
    

  },
  with: {
    marginVertical: 50,
    flexDirection: 'column',
    
   
   
  },
});
