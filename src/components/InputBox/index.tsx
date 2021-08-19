import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE } from '../../assets/sizes'
import { styles } from './style'
interface props {
    placeholder: string,
    type: KeyboardTypeOptions,
    onChangeMethod: (input: string) => void
    style: {}
}
const index: React.FC<props> = (props) => {
    return (<TextInput multiline={true} placeholder={props.placeholder} style={[props.style, styles.inputBox]} keyboardType={props.type} onChangeText={value => props.onChangeMethod(value)} />)
}

export default index

