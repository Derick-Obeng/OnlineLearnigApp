import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Popular = () => {
    return (  
        <ScrollView> 
            <View style={{display:'flex',alignItems:'center',marginTop:25,marginBottom:25}}>
                <TouchableOpacity>
                    <View style={styles.course}>
                        <Image  source={require('../assets/profileImage.png')} style={{marginLeft:20,padding:30,borderRadius:10}}/>
                        <View style={styles.details}>
                            <Text style={{fontWeight:500, fontSize:14, color:"rgba(31, 31, 57, 1)"}}>African Stadies v1.0</Text>
                            <Text style={{fontWeight:400,color:"rgba(184, 184, 210, 1)", fontSize:12,padding:5}}><FontAwesome5 name="user-alt" size={12} style={{color:"rgba(184, 184, 210, 1)"}} />Robbertson Connie</Text>
                            <View style={{display:'flex', flexDirection:'row'}}>
                                <Text style={{color:'rgba(61, 92, 255, 1)',fontSize:16,fontWeight:700}}>$1000</Text >
                                <Text style={{color:'rgba(255, 105, 5, 1)',fontSize:10, backgroundColor:"rgb(233, 202, 182)",fontWeight:400,borderRadius:10,padding:5,marginLeft:10}}>116 hours</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.course}>
                    <Image  source={require('../assets/profileImage.png')} style={{marginLeft:20,padding:30,borderRadius:10}}/>
                    <View style={styles.details}>
                        <Text style={{fontWeight:500, fontSize:14, color:"rgba(31, 31, 57, 1)"}}>Introduction to python  v1.0</Text>
                        <Text style={{fontWeight:400,color:"rgba(184, 184, 210, 1)", fontSize:12,padding:5}}><FontAwesome5 name="user-alt" size={12} style={{color:"rgba(184, 184, 210, 1)"}} />Yusif Ibrahim</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{color:'rgba(61, 92, 255, 1)',fontSize:16,fontWeight:700}}>
            
                        $180    
                        </Text >
                        <Text style={{color:'rgba(255, 105, 5, 1)',fontSize:10, backgroundColor:"rgb(233, 202, 182)",fontWeight:400,borderRadius:10,padding:5,marginLeft:10}}>12 hours</Text>
                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.course}>
                    
                    <Image  source={require('../assets/profileImage.png')} style={{marginLeft:20,padding:30,borderRadius:10}}/>
                    <View style={styles.details}>
                        <Text style={{fontWeight:500, fontSize:14, color:"rgba(31, 31, 57, 1)"}}>Data Science v1.0</Text>
                        <Text style={{fontWeight:400,color:"rgba(184, 184, 210, 1)", fontSize:12,padding:5}}><FontAwesome5 name="user-alt" size={12} style={{color:"rgba(184, 184, 210, 1)"}} />Robbertson Connie</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{color:'rgba(61, 92, 255, 1)',fontSize:16,fontWeight:700}}>
            
                        $200    
                        </Text >
                        <Text style={{color:'rgba(255, 105, 5, 1)',fontSize:10, backgroundColor:"rgb(233, 202, 182)",fontWeight:400,borderRadius:10,padding:5,marginLeft:10}}>17 hours</Text>
                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.course}>
                    
                    <Image  source={require('../assets/profileImage.png')} style={{marginLeft:20,padding:30,borderRadius:10}}/>
                    <View style={styles.details}>
                        <Text style={{fontWeight:500, fontSize:14, color:"rgba(31, 31, 57, 1)"}}>Database Administrator v1.0</Text>
                        <Text style={{fontWeight:400,color:"rgba(184, 184, 210, 1)", fontSize:12,padding:5}}><FontAwesome5 name="user-alt" size={12} style={{color:"rgba(184, 184, 210, 1)"}} />Sir Allan Bans</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{color:'rgba(61, 92, 255, 1)',fontSize:16,fontWeight:700}}>
            
                        $120    
                        </Text >
                        <Text style={{color:'rgba(255, 105, 5, 1)',fontSize:10, backgroundColor:"rgb(233, 202, 182)",fontWeight:400,borderRadius:10,padding:5,marginLeft:10}}>22 hours</Text>
                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.course}>
                    
                    <Image  source={require('../assets/profileImage.png')} style={{marginLeft:20,padding:30,borderRadius:10}}/>
                    <View style={styles.details}>
                        <Text style={{fontWeight:500, fontSize:14, color:"rgba(31, 31, 57, 1)"}}>Web Development v1.0</Text>
                        <Text style={{fontWeight:400,color:"rgba(184, 184, 210, 1)", fontSize:12,padding:5}}><FontAwesome5 name="user-alt" size={12} style={{color:"rgba(184, 184, 210, 1)"}} />Lecturer Dickson Carson</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{color:'rgba(61, 92, 255, 1)',fontSize:16,fontWeight:700}}>
            
                        $300    
                        </Text >
                        <Text style={{color:'rgba(255, 105, 5, 1)',fontSize:10, backgroundColor:"rgb(233, 202, 182)",fontWeight:400,borderRadius:10,padding:5,marginLeft:10}}>26 hours</Text>
                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.course}>
                    
                    <Image  source={require('../assets/profileImage.png')} style={{marginLeft:20,padding:30,borderRadius:10}}/>
                    <View style={styles.details}>
                        <Text style={{fontWeight:500, fontSize:14, color:"rgba(31, 31, 57, 1)"}}>Introduction to Machine Learning v1.0</Text>
                        <Text style={{fontWeight:400,color:"rgba(184, 184, 210, 1)", fontSize:12,padding:5}}><FontAwesome5 name="user-alt" size={12} style={{color:"rgba(184, 184, 210, 1)"}} />Mr Mark Attah Mensah</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{color:'rgba(61, 92, 255, 1)',fontSize:16,fontWeight:700}}>
            
                        $110    
                        </Text >
                        <Text style={{color:'rgba(255, 105, 5, 1)',fontSize:10, backgroundColor:"rgb(233, 202, 182)",fontWeight:400,borderRadius:10,padding:5,marginLeft:10}}>7 hours</Text>
                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
        
            </View>;
            </ScrollView>
    );
}
 
export default Popular;

const styles=StyleSheet.create({
    course:{
        display:'flex',
        flexDirection:'row',
        boxShadow:'0px 5px 5px rgb(67, 59, 54)',
        paddingTop:15,
        paddingBottom:15,
        width:330,
        borderRadius:5,
        marginTop:25,
        
        
        

    },
    details:{
        marginLeft:40,
        
    }
})