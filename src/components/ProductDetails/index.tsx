import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { BLACK, GREY, SECONDARY, WHITE, YELLOW } from '../../assets/colors'
import Eicon from 'react-native-vector-icons/Entypo';
import { Dimension, FONT_LARGE, FONT_MID, FONT_SMALL } from '../../assets/sizes';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH, DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import { styles } from './style'
interface props {
    name: String,
    type: String,
    style?: ViewStyle,
    text?: TextStyle,
    rating?: number,
    star?: number,
    mrp?: number,
    discount?: number,
    price?: number,
    isAddToCartButton?: boolean,
    addToCartMethod?: () => void,
    onClick: () => void,
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.card, props.style]} onPress={props.onClick}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {props.children}
            </View>
            <Text style={{ fontSize: FONT_MID, alignSelf: 'center', textAlign: 'center', marginBottom: DEFAUTL_SPACE / 2, maxWidth: 150, minWidth: 100 }}>{props.name === undefined ? `${props.type}` : `${props.name}`}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }}>
                {props.star && <View style={{ flexDirection: 'row', padding: DEFAUTL_SPACE / 2, backgroundColor: 'green', borderRadius: BORDER_RADIUS }}>
                    <Text style={[props.text, { paddingRight: DEFAUTL_SPACE / 2 }]}>{props.star}</Text>
                    <Eicon name="star" color={YELLOW} size={ICON_SIZE - 7} />
                </View>}
                {props.rating && <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: FONT_SMALL, paddingRight: DEFAUTL_SPACE / 2 }}>{props.rating}</Text>
                    <Text style={{ fontSize: FONT_SMALL }}>Rating</Text>
                </View>}
            </View>
            <View style={styles.prodElement}>
                {props.mrp && <View style={{ flexDirection: 'row' }}>
                    <Text style={[{ paddingRight: DEFAUTL_SPACE / 2, color: BLACK }]}>MRP</Text>
                    <Text style={[{ paddingRight: DEFAUTL_SPACE / 2, color: BLACK }]}>{props.mrp}</Text>
                </View>}
                {props.discount && <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: FONT_SMALL, paddingRight: DEFAUTL_SPACE / 2 }}>{props.discount}%</Text>
                    <Text style={{ fontSize: FONT_SMALL }}>OFF</Text>
                </View>}
            </View>
            {props.price && <View style={styles.prodElement}>
                <Text style={[{ paddingRight: DEFAUTL_SPACE / 2, color: BLACK }]}>${props.price}</Text>
                <Text style={{ fontSize: FONT_SMALL, paddingRight: DEFAUTL_SPACE / 2 }}>ADD</Text>
            </View>}
            {props.isAddToCartButton && <TouchableOpacity style={styles.addToCart} onPress={props.addToCartMethod}>
                <Text>Add To Cart</Text>
            </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}

export default index

