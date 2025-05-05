import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './tabs/tabs';



<<<<<<< HEAD
import HomeScreen from './Screens/HomeScreen';


=======
>>>>>>> 63dea8a187c96f0f0c277782df4f675393085e66
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      
      </Stack.Navigator>
=======
       <RootStack/>
>>>>>>> 63dea8a187c96f0f0c277782df4f675393085e66
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
