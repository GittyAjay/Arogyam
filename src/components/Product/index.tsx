import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Dimension, FONT_SMALL } from '../../assets/sizes';
import { globalstyles } from '../../globalcss';
import { styles } from './style'
interface props {
    categories_name: String,
    style?: object,
    text?: object,
    background: String,
    onClick: () => void,
}
const index: React.FC<props> = (props) => {
    const { WIDTH } = Dimension();
    return (
        <TouchableOpacity style={[styles.container, props.style,]} onPress={props.onClick}>
            <View style={[styles.card, { width: WIDTH / 2 - 20, backgroundColor: `${props.background}` }]}>
                {props.children}
            </View>
            {props.categories_name && <Text style={[globalstyles.title__bold, globalstyles.align_center, props.text, { fontSize: FONT_SMALL }]}>{props.categories_name.length < 15 ? props.categories_name : `${props.categories_name.substr(0, 15)}..`}</Text>}
        </TouchableOpacity>
    )
}

export default index

