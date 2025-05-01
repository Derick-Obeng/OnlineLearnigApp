import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import All from './All';
import New from './New';
import Popular from './Popular';
import ButtonNavigator from './ButtonNavigator';
import Header from './header';


const Stack = createNativeStackNavigator();

const Navbar = () => {
  return (
    <Stack.Navigator
      initialRouteName="All"
      screenOptions={{
        animation: 'slide_from_right', // For horizontal slide transition
        header: ({ navigation }) => <ButtonNavigator navigation={navigation} />,
      }}
    >
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Popular" component={Popular} />
    </Stack.Navigator>
  );
};

export default Navbar;
