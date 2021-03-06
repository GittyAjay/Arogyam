import React from 'react'
import { KeyboardTypeOptions, TextInput, TextStyle } from 'react-native'
import { GREY } from '../../assets/colors'
import { styles } from './style'
interface props {
    placeholder: string,
    type: KeyboardTypeOptions,
    onChangeMethod: (input: string) => void
    style: TextStyle
}
const index: React.FC<props> = (props) => {
    return (<TextInput multiline={true} placeholder={props.placeholder} placeholderTextColor={GREY} style={[props.style, styles.inputBox]} keyboardType={props.type} onChangeText={value => props.onChangeMethod(value)} />)
}

export default index

