import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, {useEffect,useRef} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon, { Icons } from '../components/Icons';
import * as Animatable from 'react-native-animatable';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import AccountScreen from '../screens/AccountScreen';
import Colors from '../constants/Colors';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import CourseScreen from '../screens/CourseScreen';
import CourseFilterScreen from '../screens/CourseFilterScreen';


const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Octicons, icon: 'home', component: HomeScreen },
    { route: 'Course', label: 'Course', type: Icons.FontAwesome, icon: 'book', component: CourseScreen },
    { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: CourseFilterScreen },
    { route: 'Message', label: 'Message', type: Icons.MaterialCommunityIcons, icon: 'message-text-outline', component: MessageScreen },
    { route: 'Account', label: 'Account', type: Icons.MaterialCommunityIcons, icon: 'account', component: AccountScreen },
];

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);
    const { colors } = useTheme()
    const bgColor = colors.background;
    
  
    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1);
        textRef.current.transitionTo({ scale: 1 });
      } else {
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2);
        textRef.current.transitionTo({ scale: 0 });
      }
    }, [focused])
  
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
        <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
          <View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
            <Animatable.View ref={circleRef} style={styles.circle} />
            <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary}/>
          </View>
          <Animatable.Text ref={textRef} style={[styles.text]}> {item.label} </Animatable.Text>
        </Animatable.View>
      </TouchableOpacity>
    )
}

function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function Tabs() {
  return (
   <View style={{ flex: 1 }}>
        <Tab.Navigator screenOptions={{ 
        headerShown: false ,
        tabBarStyle: styles.tabBar,}}>
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarButton: (props) => <TabButton {...props} item={item} />,
                            tabBarShowLabel: false,
                        }}
                    />
                )
            })}
        </Tab.Navigator>
   </View>
  )
}

export default RootStack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        margin: 16,
        borderRadius: 16,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: Colors.white,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 25,
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: '500'
    }
})