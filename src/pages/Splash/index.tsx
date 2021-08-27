import React from 'react'
import { Text, View, Image } from 'react-native'
import StatusBar from '../../components/StatusBar';
import { PRIMARY } from '../../assets/colors';
import { styles } from './style';
const index = (props: { navigation: { push: Function } }) => {
    setTimeout(() => {
        props.navigation.push("Onboard");
    }, 2000);
    return (
        <>
            <StatusBar color={PRIMARY} />
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo__img} />
                <Text style={styles.logo__text}>AROGYAM</Text>
            </View>
        </>
    )
}
export default index

