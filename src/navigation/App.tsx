import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import OnboardScreen from '../pages/Onboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Otp from '../pages/Otp';
import FinalAuth from '../pages/FinalAuth';
import NeedHelp from '../pages/NeedHelp';
import SelectLocation from '../pages/SelectLocation';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import { BLACK, GREY, PRIMARY, WHITE } from '../assets/colors';
import LabTest from '../pages/LabTest'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../assets/sizes';
function TopNav() {
    const { Navigator, Screen } = createMaterialTopTabNavigator();
    const Header = () => {
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: PRIMARY }}>
                    <View style={styles.top__header}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Eicon name="menu" size={ICON_SIZE + 10} color={WHITE} />
                            <View style={{ flexDirection: 'column', paddingLeft: INLINE_GAP, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', color: WHITE }}>Location</Text>
                                    <TouchableOpacity>
                                        <Evicon name="chevron-down" size={ICON_SIZE + 10} color={WHITE} onPress={() => navigation.navigate("SelectLocation")

                                        } />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: WHITE }}>utter pradesh 2221106</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Ficon name="settings" size={ICON_SIZE} color={WHITE} style={{ paddingRight: INLINE_GAP }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Faicon name="shopping-cart" size={ICON_SIZE} color={WHITE} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.search__Bar}>
                        <TextInput placeholder="Search medicine and product" style={{ flex: 1 }} />
                        <TouchableOpacity>
                            <Ioicon name="md-search" size={ICON_SIZE} color={GREY} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <>
            <Header />
            <Navigator screenOptions={{
                tabBarActiveTintColor: WHITE,
                tabBarInactiveTintColor: GREY,
                tabBarLabelStyle: { fontSize: FONT_SMALL, color: WHITE, fontWeight: 'bold' },
                tabBarItemStyle: { width: 140 },
                tabBarStyle: { backgroundColor: PRIMARY },
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: { backgroundColor: WHITE, marginVertical: DEFAUTL_SPACE / 2 }
            }}>
                <Screen name="lab test" component={LabTest} />
                <Screen name="Medicines" component={NeedHelp} />
                <Screen name="Piils reminder" component={NeedHelp} />
                <Screen name="Lab test" component={NeedHelp} />
            </Navigator>
        </>
    );
}
function App() {
    const { Navigator, Screen } = createNativeStackNavigator();
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="Splash" component={Splash} />
            <Screen name="Onboard" component={OnboardScreen} />
            <Screen name="Login" component={Login} />
            <Screen name="Signup" component={Signup} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Otp" component={Otp} />
            <Screen name="FinalAuth" component={FinalAuth} />
            <Screen name="NeedHelp" component={NeedHelp} />
            <Screen name="Home" component={TopNav} />
            <Screen name="SelectLocation" component={SelectLocation} />
        </Navigator>
    );
}

export const AppNavigator = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
    },
    top__header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: INLINE_GAP,
    },
    search__Bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: INLINE_GAP,
        marginVertical: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: DEFAUTL_SPACE
    }
})