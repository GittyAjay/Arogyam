import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GREY, WHITE } from '../../assets/colors'
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
            <Text style={props.text}>{props.name}</Text>
            {props.children}
        </TouchableOpacity>
    )
}

export default index

