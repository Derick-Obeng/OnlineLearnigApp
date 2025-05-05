import { View, Text,Image ,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


const Header = () => {
    const navigation=useNavigation();
    return (
        <View style={{display:'flex',alignItems:'center'}}>
            <View style={styles.header}>
                <Text style={{fontSize:24, fontWeight:700,marginLeft:0,color:"rgba(31,31,57,1)",marginTop:11,fontFamily:'Poppins'}}>Course</Text>

                <Image  source={require('../assets/profileImage.png')}/>
            </View>

           <View style={{display:'flex',flexDirection:'row'}}>
           <View style={styles.searchBar}>
                <TextInput  placeholder="Find course" style={{width:295,height:48,backgroundColor:"rgba(244,243,253,1)",marginTop:10,paddingLeft:40,fontWeight:400,fontSize:14}}/>
                <AntDesign name="search1" size={24} color="rgba(184,184,210,1)" style={styles.searchIcon}/>
</View>
<TouchableOpacity onPress={()=>navigation.navigate('CourseFilterScreen')} style={styles.filter}>

    <Image source={require('../assets/stroke.png')} style={styles.stroke}/>

    </TouchableOpacity>
           </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        gap:220,
        marginTop:20,
        marginTop:50

    },
    searchBar:{
        position:'relative'
    },
    searchIcon:{
        position:'absolute',
        marginTop:25,
        marginLeft:10,
        
    },
    stroke:{
        marginTop:15,
        height:30,
        width:30,
        marginLeft:10

    },
    filter:{
       

    }
 
   

})
 
export default Header;