import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import OnboardScreen from '../pages/Onboard';
const { Navigator, Screen } = createNativeStackNavigator();

function App() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name="Splash" component={Splash} />
            <Screen name="Onboard" component={OnboardScreen} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}
export const AppNavigator = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
);