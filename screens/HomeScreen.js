import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('Course')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});







// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const HomeScreen = () => {
//   return (
//     <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//       <Text >HomeScreen</Text>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})