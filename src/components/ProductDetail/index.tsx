import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BLACK, GREY, WHITE, YELLOW } from '../../assets/colors'
import Eicon from 'react-native-vector-icons/Entypo';
import { Dimension, FONT_LARGE, FONT_MID, FONT_SMALL } from '../../assets/sizes';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import { styles } from './style'
interface props {
    name: String,
    style: object,
    text: object,
    rating: number,
    star: number,
    mrp: number,
    discount: number,
    price: number,
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    const { WIDTH } = Dimension();
    return (
        <TouchableOpacity style={[styles.card, props.style, { width: (WIDTH / 2) - 25 }]} onPress={props.onClick}>
            {props.children}
            <Text style={{ fontSize: FONT_MID, alignSelf: 'center', marginBottom: DEFAUTL_SPACE / 2 }}>{props.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }}>
                <View style={{ flexDirection: 'row', padding: DEFAUTL_SPACE / 2, backgroundColor: 'green', borderRadius: BORDER_RADIUS }}>
                    <Text style={[props.text, { paddingRight: DEFAUTL_SPACE / 2 }]}>{props.star}</Text>
                    <Eicon name="star" color={YELLOW} size={ICON_SIZE - 7} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: FONT_SMALL, paddingRight: DEFAUTL_SPACE / 2 }}>{props.rating}</Text>
                    <Text style={{ fontSize: FONT_SMALL }}>Rating</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[{ paddingRight: DEFAUTL_SPACE / 2, color: BLACK }]}>MRP</Text>
                    <Text style={[{ paddingRight: DEFAUTL_SPACE / 2, color: BLACK }]}>{props.mrp}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: FONT_SMALL, paddingRight: DEFAUTL_SPACE / 2 }}>{props.discount}%</Text>
                    <Text style={{ fontSize: FONT_SMALL }}>OFF</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }}>
                <Text style={[{ paddingRight: DEFAUTL_SPACE / 2, color: BLACK }]}>${props.price}</Text>
                <Text style={{ fontSize: FONT_SMALL, paddingRight: DEFAUTL_SPACE / 2 }}>ADD</Text>
            </View>
        </TouchableOpacity>
    )
}

export default index

