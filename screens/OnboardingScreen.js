import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


function OnboardingScreen({navigation}) {
    
  return (
    <View style={styles.container}>
      <Text>OnboardingScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Tabs')}/>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})