import { View, Text,Image ,StyleSheet,TextInput,FlatList,ImageBackground, TouchableOpacity} from "react-native";


const activities=[
    {
        id: '1',
        title: 'language',
        image: require('../assets/Frame.png'),
      },
      {
        id: '2',
        title: 'Painting',
        image: require('../assets/Frame2.png'),
      },
      {
        id: '3',
        title: 'Sunset Beach',
        image: require('../assets/Frame.png'),
      },
      {
        id: '4',
        title: 'Painting',
        image: require('../assets/Frame2.png'),
      },
      {
        id: '5',
        title: 'Sunset Beach',
        image: require('../assets/Frame2.png'),
      },
]


const Item = ({ title, image }) => (
    <View style={styles.backgroundColor}>
    <Image source={image} style={styles.image} />
    <Text style={styles.text}>{title}</Text>
  </View>

  );
  


const Activities = () => {
    return ( <View style={styles.container}>
<FlatList 
data={activities}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(
  <TouchableOpacity >
        <Item title={item.title} image={item.image}/>

  </TouchableOpacity>
)}
horizontal

/>
<Text style={{fontSize:18, fontWeight:500, paddingTop:20, paddingBottom:20,marginLeft:20}}>Chooce your course</Text>
<View>
    
</View>
    </View> );
}




const styles=StyleSheet.create({
    flatlistimages:{
        width:118,
        height  :87
    },
    backgroundColor:{
        backgroundColor:"rgba(206,236,254,1)",
        height:87,
        width:160,
        marginRight:10,
        position:"relative",
        borderRadius:10 ,
marginTop:20    
    },
    image:{
        paddingTop:0,
        position:"absolute",
        marginTop:0,
    },
    text:{
        marginTop:50,
        marginLeft:90,
        backgroundColor:"white",
        borderRadius:10,
        padding:5

    },
  
})
 
export default Activities;