import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
const { Navigator, Screen } = createNativeStackNavigator();

function App() {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}
export const AppNavigator = () => (
    <NavigationContainer>
        <App />
    </NavigationContainer>
);