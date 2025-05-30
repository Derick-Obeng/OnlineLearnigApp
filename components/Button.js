import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'

export default function Button({title , onPress}) {
  return (
    
    
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    
   
  )
}

const styles = StyleSheet.create({
touchable: {
  backgroundColor: '#2525BE',
  width: 320,
  height: 40,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft:20,
  marginTop:20,
},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})