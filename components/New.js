import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const New = () => {
    return (
        <ScrollView>
            <View style={{ display: 'flex', alignItems: 'center', marginTop: 25, marginBottom: 25 }}>
                {[
                    {
                        title: "Machine Learning v1.0",
                        author: "Robbertson Connie",
                        price: "$100",
                        duration: "12 hours",
                    },
                    {
                        title: "Affiliate Marketing v1.0",
                        author: "Yusif Ibrahim",
                        price: "$10",
                        duration: "2 hours",
                    },
                    {
                        title: "Science v1.0",
                        author: "Robbertson Markin",
                        price: "$200",
                        duration: "17 hours",
                    },
                    {
                        title: "Business Administrator v1.0",
                        author: "Sir Allan Bans",
                        price: "$1200",
                        duration: "11 hours",
                    },
                    {
                        title: "Introduction To Structural Engineering v1.0",
                        author: "Lecturer Dickson Carson",
                        price: "$300",
                        duration: "26 hours",
                    },
                    {
                        title: "Introduction to Machine Learning v1.0",
                        author: "Mr Mark Attah Mensah",
                        price: "$110",
                        duration: "7 hours",
                    },
                ].map((course, index) => (
                    <TouchableOpacity key={index}>
                        <View style={styles.course}>
                            <Image
                                source={require('../assets/profileImage.png')}
                                style={{ marginLeft: 20, padding: 30, borderRadius: 10 }}
                            />
                            <View style={styles.details}>
                                <Text style={{ fontWeight: 500, fontSize: 14, color: "rgba(31, 31, 57, 1)" }}>
                                    {course.title}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: 400,
                                        color: "rgba(184, 184, 210, 1)",
                                        fontSize: 12,
                                        padding: 5,
                                    }}
                                >
                                    <FontAwesome5
                                        name="user-alt"
                                        size={12}
                                        style={{ color: "rgba(184, 184, 210, 1)" }}
                                    />
                                    {course.author}
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text
                                        style={{
                                            color: 'rgba(61, 92, 255, 1)',
                                            fontSize: 16,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {course.price}
                                    </Text>
                                    <Text
                                        style={{
                                            color: 'rgba(255, 105, 5, 1)',
                                            fontSize: 10,
                                            backgroundColor: "rgb(233, 202, 182)",
                                            fontWeight: 400,
                                            borderRadius: 10,
                                            padding: 5,
                                            marginLeft: 10,
                                        }}
                                    >
                                        {course.duration}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}
 
export default New;

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