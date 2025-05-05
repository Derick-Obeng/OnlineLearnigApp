import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const categories = ['Design', 'Painting', 'Coding', 'Music', 'Visual Identity', 'Mathematics'];
const durations = ['3-8 Hours', '8-14 Hours', '14-20 Hours', '20-24 Hours', '24-30 Hours'];

export default function App() {
    const [modalVisible, setModalVisible] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [price, setPrice] = useState(50);
    const [selectedDuration, setSelectedDurations] = useState(null);
  
  const navigation=useNavigation();
  
    const toggleCategory = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((item) => item !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };
  
    const onClearFilters = () => {
      setSelectedCategories([]);
      setPrice(50);
      setSelectedDurations(null);
    };
  
    const onApplyFilters = () => {
      console.log('Applying filters:', {
        selectedCategories,
        price,
        selectedDuration,
      });
      
      setModalVisible(false);
    };
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.cloudBackground}/>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {/* X Button */}
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.closeButton}>
              <EvilIcons name="close" size={34} color="black"  />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Search Filter</Text>

            {/* Categories */}
            <Text style={styles.label}>Categories</Text>
            <View style={styles.categoryWrap}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => toggleCategory(category)}
                  style={[
                    styles.categoryButton,
                    selectedCategories.includes(category) && styles.selectedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategories.includes(category) && styles.selectedText,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Price */}
            <Text style={styles.label}>Price</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#4a6cf7"
              maximumTrackTintColor="#d3d3d3"
              value={price}
              onValueChange={(value) => setPrice(value)}
            />
            <Text style={styles.priceText}>$20 to ${price}</Text>

            {/* Duration */}
            <Text style={styles.label}>Duration</Text>
            <View style={styles.durationWrap}>
              {durations.map((duration) => (
                <TouchableOpacity
                  key={duration}
                  onPress={() => setSelectedDurations(duration)}
                  style={[
                    styles.durationButton,
                    selectedDuration === duration && styles.selectedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.durationText,
                      selectedDuration === duration && styles.selectedText,
                    ]}
                  >
                    {duration}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.clearButton} onPress={onClearFilters}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyButton} onPress={onApplyFilters}>
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 150,
      borderTopLeftRadius: 30,
      alignItems: "center",
      borderTopRightRadius: 30,
      padding: 10,
    },
    cloudBackground: {
      position: 'absolute',
      top: -100,
      width: '200%',
      height: 200,
      backgroundColor: '#4a6cf7',
      borderBottomLeftRadius: 300,
      borderBottomRightRadius: 300,
      transform: [{ scaleX: 1.2 }],
      zIndex: -1,
    },
    
    closeButton: {
      alignSelf: 'flex-start',
    },
    closeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 20,
      alignSelf: "center"
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10,
    },
    categoryWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    categoryButton: {
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginRight: 8,
      marginBottom: 10,
    },
    selectedButton: {
      backgroundColor: '#4a6cf7',
    },
    categoryText: {
      color: '#000',
    },
    selectedText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    priceText: {
      fontSize: 16,
      fontWeight: '500',
      marginTop: 10,
    },
    durationWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    durationButton: {
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginRight: 8,
      marginBottom: 10,
    },
    durationText: {
      color: '#000',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderTopWidth: 1,
      borderColor: '#ddd',
      backgroundColor: 'white',
    },
    applyButton: {
      flex: 1,
      backgroundColor: '#4a6cf7',
      paddingVertical: 12,
      borderRadius: 25,
      marginTop: 30,
      alignItems: 'center',
    },
    applyButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    clearButton: {
      flex: 1,
      backgroundColor: '#e0e0e0',
      paddingVertical: 10,
      borderRadius: 25,
      marginTop: 30,
      alignItems: 'center',
    },
    clearButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
      