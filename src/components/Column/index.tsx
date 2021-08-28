import React from 'react'
import { ViewStyle, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
interface props {
    style?: ViewStyle,
}
const index: React.FC<props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

export default index

