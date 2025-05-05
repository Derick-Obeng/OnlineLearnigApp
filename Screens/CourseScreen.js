import React from 'react';
import Header from '../components/header';
import Activities from '../components/Activities';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navbar from '../components/CourseNavBar';

export default function Course() {
  return (   
    <GestureHandlerRootView>
      <Header/>
      <Activities/>
      <Navbar /> 
  </GestureHandlerRootView>
  );
}



