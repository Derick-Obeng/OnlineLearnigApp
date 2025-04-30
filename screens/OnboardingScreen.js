import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const DoneButtonComponent = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={{borderRadius: 5, padding: 10}}>
      <Text>Done</Text>
    </TouchableOpacity>
  )
}

const DotComponent = ({selected}) => {
  return (
    <View style={{
      width: selected ? 20 : 6,
      height: selected ? 10 : 6,
      borderRadius: 6,
      backgroundColor: selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)',
      marginHorizontal: 4,
    }}/>
    
  )
}
function OnboardingScreen({navigation}) {
    
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={() => navigation.replace('Tabs')}
        onDone={() => navigation.navigate('Tabs')}
        DoneButtonComponent={DoneButtonComponent}
        DotComponent={DotComponent}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/page1.png')} />,
      title: (
        <View style= {styles.group}>
          <Text style ={styles.title}>Numerous free</Text>
          <Text style ={styles.title}>trial courses</Text>
        </View>
      ),
      subtitle: (
        <View style={styles.subgroup}>
          <Text>Free courses for you to</Text>
          <Text>find your way to learning</Text>
        </View>
      ),
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/page2.png')} />,
      title: (
      <View style= {styles.group}>
        <Text style ={styles.title}>Quick and easy</Text>
        <Text style ={styles.title}>learning</Text>
      </View>),
      subtitle: (
        <View style={styles.subgroup}>
          <Text>Easy and fast learning at</Text>
          <Text>any time to help you</Text>
          <Text>improve various skills</Text>
        </View>
      ),
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/page3.png')} />,
      title: (
        <View style= {styles.group}>
          <Text style ={styles.title}>Create your own</Text>
          <Text style ={styles.title}>study plan</Text>
        </View>
      ),
      subtitle: (
        <View style={styles.subgroup}>
          <Text>Study according to the</Text>
          <Text>study plan, make study</Text>
          <Text>more motivated</Text>
        </View>
      ),
    },
  ]}
/>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    group: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    subgroup: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
   
})