import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Dimension, FONT_SMALL } from '../../assets/sizes';
import { globalstyles } from '../../globalcss';
import { styles } from './style'
interface props {
    name: String,
    style?: object,
    text?: object,
    background: String,
    onClick: () => void,
}
const index: React.FC<props> = (props) => {
    const { WIDTH } = Dimension();
    return (
        <TouchableOpacity style={[styles.container]} onPress={props.onClick}>
            <View style={[styles.card, props.style, { width: WIDTH / 2 - 20, backgroundColor: `${props.background}` }]}>
                {props.children}
            </View>
            <Text style={[globalstyles.title__bold, globalstyles.align_center, props.text, { fontSize: FONT_SMALL }]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default index

