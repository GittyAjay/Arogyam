import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './style';
interface props {
    onPress: () => void,
    style: ViewStyle
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.poster, props.style]} onPress={props.onPress}>
        </TouchableOpacity>
    )
}

export default index

