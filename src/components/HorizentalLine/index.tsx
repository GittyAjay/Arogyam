import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { styles } from './style'
interface props {
    style?: ViewStyle
}
const index: React.FC<props> = (props) => {
    return (
        <View style={[styles.line, props.style]}>
        </View>
    )
}

export default index


