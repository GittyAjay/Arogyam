import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
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


