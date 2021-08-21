import React from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style'
interface props {
    style: ViewStyle,
    onPress: () => void,
    isDisable: boolean
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.card, props.style]} onPress={props.onPress} disabled={props.isDisable}>
            {props.children}
        </TouchableOpacity>
    )
}

export default index

