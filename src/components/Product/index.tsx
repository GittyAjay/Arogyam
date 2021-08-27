import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Dimension, FONT_MID } from '../../assets/sizes';
import { DEFAUTL_SPACE } from '../../assets/sizes'
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
            <View style={[styles.card, props.style, { width: WIDTH / 2 - 30, backgroundColor: `${props.background}` }]}>
                {props.children}
            </View>
            <Text style={[styles.heading, { alignSelf: 'center', marginBottom: DEFAUTL_SPACE / 2 }]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default index

