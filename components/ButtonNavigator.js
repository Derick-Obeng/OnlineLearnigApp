// components/ButtonNavigator.js
import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity ,Text} from 'react-native';
import { FlatList ,Image} from 'react-native-gesture-handler';





// onPress={() => {
//   setTimeout(() => {
//     navigation.navigate('All');
//   }, 00); // 300 milliseconds delay
// }}



const ButtonNavigator = ({ navigation }) => {
  return (<View>
    <View style={styles.row}>
     
        <TouchableOpacity onPress={() => navigation.navigate('All')} style={styles.buts}>
            <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('New')} style={styles.buts}>
            <Text style={styles.text}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Popular')} style={styles.buts}>
            <Text style={styles.text}>Popular</Text>
        </TouchableOpacity>
        
    </View>


    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buts:{
    borderRadius:10,
    backgroundColor:'lightblue',
    width:100,
    display:'flex',
    justifyContent:'center',
    height:40

  },
 text:{
textAlign:'center',


 }
});

export default ButtonNavigator;
