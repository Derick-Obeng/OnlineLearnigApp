import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from '../components/header';
import Activities from '../components/Activities';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Navbar from '../components/CourseNavBar';
export default function Course() {
  return (   <GestureHandlerRootView>
    
 <Header/>
        <Activities/>
            <Navbar /> 
</GestureHandlerRootView>
  );
}



