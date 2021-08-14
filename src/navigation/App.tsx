import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import OnboardScreen from '../pages/Onboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Otp from '../pages/Otp';
import FinalAuth from '../pages/FinalAuth';
import NeedHelp from '../pages/NeedHelp';
const { Navigator, Screen } = createNativeStackNavigator();

function App() {
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
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}
export const AppNavigator = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
);