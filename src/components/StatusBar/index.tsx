import React from 'react'
import { StatusBar, StatusBarAnimation, StatusBarStyle } from 'react-native';
const STYLES: StatusBarStyle[] = ['default', 'dark-content', 'light-content'];
const TRANSITIONS: StatusBarAnimation[] = ['fade', 'slide', 'none'];
interface props {
    color: string
}
const statusBar: React.FC<props> = (props: { color: string }) => {
    const { color } = props;
    return (
        <StatusBar
            animated={true}
            backgroundColor={color}
            barStyle={STYLES[0]}
            showHideTransition={TRANSITIONS[0]}
            hidden={false}
        />
    );
}
export default statusBar;

