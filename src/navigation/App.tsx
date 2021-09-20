import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Splash from '../pages/Splash';
import OnboardScreen from '../pages/Onboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Otp from '../pages/Otp';
import FinalAuth from '../pages/FinalAuth';
import NeedHelp from '../pages/NeedHelp';
import SelectLocation from '../pages/SelectLocation';
import Prescription from '../pages/Prescription';
import Order from '../pages/Order';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Foicon from 'react-native-vector-icons/Foundation';
import Fa5icon from 'react-native-vector-icons/FontAwesome5';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Mcicon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BLACK, GREY, PRIMARY, WHITE } from '../assets/colors';
import LabTest from '../pages/LabTest'
import Medicine from '../pages/Medicine'
import AllProducts from '../pages/AllProduct';
import Filter from '../pages/Filter';
import Cart from '../pages/Cart';
import AddLocation from '../pages/AddLocation';
import ViewProduct from '../pages/ViewProduct';
import DoctorConsultants from '../pages/DoctorConsultlation';
import DoctorConsultantRedirect from '../pages/DoctorConsultantRedirect';
import SelectForm from '../pages/SelectForm';
import DoctorProfile from '../pages/DoctorProfile';
import AppointmentCheckout from '../pages/AppointmentCheckout';
import AppointmentHistory from '../pages/AppointmentHistory';
import AppointmentView from '../pages/AppointmentView';
import Col from '../components/Column';
import HeaderContainer from '../components/HeadingContainer';
import Hr from '../components/HorizentalLine';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';
import auth, { firebase } from '@react-native-firebase/auth';
import { sign_in } from '../store/actions/action';
import { connect } from 'react-redux';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../assets/sizes';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function TopNav() {
    const { Navigator, Screen } = createMaterialTopTabNavigator();
    const Header = () => {
        const cartItems: Array<{}> = useSelector(selector => selector.project.cart)
        const { Navigator, Screen } = createMaterialTopTabNavigator();
        const navigation = useNavigation();
        function move_to_cart() {
            navigation.navigate("Cart")
        }
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: PRIMARY }}>
                    <View style={styles.top__header}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Eicon name="menu" size={ICON_SIZE + 10} color={WHITE} />
                            </TouchableOpacity>
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
                            <TouchableOpacity style={{ position: 'relative' }} onPress={move_to_cart} >
                                <Faicon name="shopping-cart" size={ICON_SIZE} color={WHITE} />
                                {cartItems.length > 0 && <View style={styles.cartIcon}>
                                    <Text style={{ fontSize: FONT_SMALL, color: WHITE }}>{cartItems.length}</Text>
                                </View>}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.search__Bar}>
                        <TextInput placeholder="Search medicine and product" placeholderTextColor={GREY} style={{ flex: 1 }} />
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
                tabBarItemStyle: { width: 200 },
                tabBarStyle: { backgroundColor: PRIMARY },
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: { backgroundColor: WHITE, marginVertical: DEFAUTL_SPACE / 2 }
            }}>
                <Screen name="Medicines" component={Medicine} />
                <Screen name="Doctor consultlation" component={DoctorConsultantRedirect} />
                <Screen name="Piils reminder" component={NeedHelp} />
                <Screen name="Lab test" component={NeedHelp} />
            </Navigator>
        </>
    );
}
function Consultant_TopNav() {
    const { Navigator, Screen } = createMaterialTopTabNavigator();
    return (
        <>
            <Header onBackPress={() => { }} onClick={() => { }} title="Consultant Form" style={{ backgroundColor: PRIMARY }} text={{ color: WHITE }} iconColor={WHITE} />
            <Navigator screenOptions={{
                tabBarActiveTintColor: WHITE,
                tabBarInactiveTintColor: GREY,
                tabBarLabelStyle: { fontSize: FONT_SMALL, color: WHITE, fontWeight: 'bold' },
                tabBarItemStyle: { width: 200 },
                tabBarStyle: { backgroundColor: PRIMARY },
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: { backgroundColor: WHITE, marginVertical: DEFAUTL_SPACE / 2 }
            }}>
                <Screen name="Appointment History" component={AppointmentHistory} />
                <Screen name="View Appointment" component={AppointmentView} />
            </Navigator>
        </>
    );
}
function SidenavDoctor() {
    const Drawer = createDrawerNavigator();
    const drawerContent = (props: { navigation: { navigate: Function } }) => {
        return (
            <View style={styles.drawer}>
                <DrawerContentScrollView>
                    <Col style={{ backgroundColor: PRIMARY, padding: INLINE_GAP }}>
                        <Text style={[styles.header, { color: WHITE }]}>Hii Ajay</Text>
                        <HeaderContainer>
                            <Text style={[styles.desc, { color: WHITE }]}>Rightmajay@gmail.com</Text>
                            <Text style={[styles.desc, { fontFamily: 'Nunito-Bold', color: WHITE }]}>Edit</Text>
                        </HeaderContainer>
                    </Col>
                    <Col>
                        <DrawerItem label="My Order" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Foicon name="shopping-cart" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="Lab Test" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Fa5icon name="hand-point-right" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="My Consultation" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Micon name="perm-contact-cal" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('ConsultantTopNav') }} />
                        <DrawerItem label="Pills Remainder" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Ioicon name="notifications" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="My prescription" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Mcicon name="clipboard-list-outline" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="Manage address" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Fa5icon name="location-arrow" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="Need help?" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Fa5icon name="thumbs-up" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="About us" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Mcicon name="face-profile" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="Privacy Policy" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Micon name="policy" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <DrawerItem label="Terms And Conditions" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Mcicon name="folder-multiple-outline" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { props.navigation.navigate('AppointmentView') }} />
                        <Hr />
                        <DrawerItem label="Setting" labelStyle={[styles.desc, { fontFamily: 'Nunito-Bold' }]} icon={() => <Ioicon name="md-settings-sharp" size={ICON_SIZE + 10} color={PRIMARY} />} onPress={() => { }} />
                        <PrimaryButton title="Sign out" onPress={() => { }} button_style={{ borderWidth: BORDER_WIDTH, borderColor: PRIMARY, backgroundColor: WHITE, margin: DEFAUTL_SPACE }} text_style={{ color: PRIMARY }} />
                    </Col>

                </DrawerContentScrollView>
            </View>
        );
    }
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={drawerContent}>
            <Drawer.Screen name="AppointmentHistory" component={DoctorConsultants} />
            <Drawer.Screen name="AppointmentView" component={AppointmentView} />
            <Drawer.Screen name="ConsultantTopNav" component={Consultant_TopNav} />
        </Drawer.Navigator>
    );
}
function App() {
    const { Navigator, Screen } = createNativeStackNavigator();
    const user = firebase.auth().currentUser?.uid;
    return (
        user ? <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="Home" component={TopNav} />
            <Screen name="NeedHelp" component={NeedHelp} />
            <Screen name="SelectLocation" component={SelectLocation} />
            <Screen name="Prescription" component={Prescription} />
            <Screen name="Order" component={Order} />
            <Screen name="LabTest" component={LabTest} />
            <Screen name="ProductPage" component={AllProducts} />
            <Screen name="ViewProduct" component={ViewProduct} />
            <Screen name="Filter" component={Filter} />
            <Screen name="Cart" component={Cart} />
            <Screen name="AddLocation" component={AddLocation} />
            <Screen name="DoctorConsultant" component={SidenavDoctor} />
            <Screen name="SelectForm" component={SelectForm} />
            <Screen name="DoctorProfile" component={DoctorProfile} />
            <Screen name="AppointmentCheckout" component={AppointmentCheckout} />
            <Screen name="AppointmentHistory" component={AppointmentHistory} />
            <Screen name="AppointmentView" component={AppointmentView} />
            <Screen name="Profile" component={Profile} />
        </Navigator> :
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen name="Splash" component={Splash} />
                <Screen name="Onboard" component={OnboardScreen} />
                <Screen name="Login" component={Login} />
                <Screen name="Otp" component={Otp} />
                <Screen name="Signup" component={Signup} />
                <Screen name="FinalAuth" component={FinalAuth} />
                <Screen name="NeedHelp" component={NeedHelp} />
                <Screen name="Profile" component={Profile} />
                <Screen name="Home" component={TopNav} />
                <Screen name="SelectLocation" component={SelectLocation} />
                <Screen name="Prescription" component={Prescription} />
                <Screen name="Order" component={Order} />
                <Screen name="LabTest" component={LabTest} />
                <Screen name="ProductPage" component={AllProducts} />
                <Screen name="ViewProduct" component={ViewProduct} />
                <Screen name="Filter" component={Filter} />
                <Screen name="Cart" component={Cart} />
                <Screen name="AddLocation" component={AddLocation} />
                <Screen name="DoctorConsultant" component={SidenavDoctor} />
                <Screen name="SelectForm" component={SelectForm} />
                <Screen name="DoctorProfile" component={DoctorProfile} />
                <Screen name="AppointmentCheckout" component={AppointmentCheckout} />
                <Screen name="AppointmentHistory" component={AppointmentHistory} />
                <Screen name="AppointmentView" component={AppointmentView} />
            </Navigator>
    );
}
const mapDispatchToProps = {
    sign_in
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
    },
    cartIcon: { width: 20, height: 20, borderRadius: BORDER_RADIUS_CIRCULAR, backgroundColor: 'red', position: 'absolute', bottom: -15, justifyContent: 'center', alignItems: 'center' }
    , drawer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    header: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    desc: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Regular'
    }
})