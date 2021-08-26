import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BLACK, GREY, WHITE, YELLOW } from '../../assets/colors'
import Eicon from 'react-native-vector-icons/Entypo';
import { Dimension, FONT_LARGE, FONT_MID, FONT_SMALL } from '../../assets/sizes';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import { styles } from './style'
import { ColorValue } from 'react-native';
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
            <Text style={{ fontSize: FONT_MID, alignSelf: 'center', marginBottom: DEFAUTL_SPACE / 2, fontWeight: 'bold', fontFamily: "Nunito-SemiBold" }}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default index

