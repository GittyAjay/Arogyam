import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import StatusBar from '../../components/StatusBar';
import { PRIMARY, WHITE } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID } from '../../assets/sizes';
import { styles } from './style';
const index = (props: { navigation: { push: Function } }) => {
    setTimeout(() => {
        props.navigation.push("Onboard");
    }, 2000);
    return (
        <>
            <StatusBar color={PRIMARY} />
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.png')} style={{ width: 60, height: 60, marginBottom: DEFAUTL_SPACE }} />
                <Text style={styles.font}>AROGYAM</Text>
            </View>
        </>
    )
}
export default index

