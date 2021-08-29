import React from 'react'
import { KeyboardTypeOptions, TextInput, TextStyle, TouchableOpacity } from 'react-native'
import { GREY } from '../../assets/colors'
import { styles } from './style'
import Aicon from 'react-native-vector-icons/AntDesign';
import { ICON_SIZE } from '../../assets/sizes';
interface props {
    placeholder: string,
    type: KeyboardTypeOptions,
    onChangeMethod: (input: string) => void
    style: TextStyle
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[props.style, styles.inputBox]}>
            <TextInput multiline={true} placeholder={props.placeholder} placeholderTextColor={GREY} keyboardType={props.type} onChangeText={value => props.onChangeMethod(value)} />
            <Aicon name="search1" size={ICON_SIZE} color={GREY} />
        </TouchableOpacity>
    )
}

export default index

