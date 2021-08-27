import React from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style'
import Aicon from 'react-native-vector-icons/AntDesign'
import { WHITE } from '../../assets/colors'
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

