import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const not_found = () => {
    return (
        <View style={styles.container}>
            <Text>Not Found</Text>
        </View>
    )
}

export default not_found

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
