import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title='Open' onPress={handleOpenPress}/>
        <Button title='Close' onPress={handleClosePress}/>
        <BottomSheet
        index={1}
        snapPoints={snapPoints}
        >
        <View>
          <Text>Bottom Sheet Content</Text>
        </View>
      </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomSheet: {
        backgroundColor: '#fff',
        padding: 16,
    },
})