import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DEFAUTL_SPACE } from '../../assets/sizes'

const not_found = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/emptyCart.png")} style={{ width: 100, height: 100, marginBottom: DEFAUTL_SPACE }} />
            <Text>CART IS EMPTY</Text>
        </View>
    )
}

export default not_found

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
