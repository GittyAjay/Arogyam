import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GREY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH } from '../../assets/sizes'
import { styles } from './style'
interface props {
    name: String,
    style: object,
    text: object,
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.card, props.style]} onPress={props.onClick}>
            {props.children}
            <Text style={props.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default index


