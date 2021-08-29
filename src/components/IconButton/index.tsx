import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './style'
interface props {
    style?: ViewStyle
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}

export default index

