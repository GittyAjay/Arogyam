import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GREY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH } from '../../assets/sizes'
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

const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
        height: 110,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderColor: GREY,
        borderWidth: BORDER_WIDTH,
    }
})
