import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { BLACK, WHITE, YELLOW } from '../../assets/colors'
import Eicon from 'react-native-vector-icons/Entypo';
import { BORDER_RADIUS, DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes'
import { styles } from './style'
import { globalstyles } from '../../globalcss';
interface props {
    name: String,
    type?: String,
    style?: ViewStyle,
    text?: TextStyle,
    rating?: number,
    star?: number,
    mrp?: number,
    discount?: number,
    price?: number,
    isAddToCartButton?: boolean,
    addToCartMethod?: () => void,
    onClick?: () => void,
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.card, props.style]} onPress={props.onClick}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {props.children}
            </View>
            <Text style={[globalstyles.title__bold, { alignSelf: 'center', textAlign: 'center', marginBottom: DEFAUTL_SPACE / 2, maxWidth: 150, minWidth: 100 }]}>{props.name === undefined ? `${props.type}` : `${props.name}`}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: DEFAUTL_SPACE / 2 }}>
                {props.star && <View style={{ flexDirection: 'row', padding: DEFAUTL_SPACE / 2, backgroundColor: 'green', borderRadius: BORDER_RADIUS }}>
                    <Text style={[props.text, globalstyles.description, globalstyles.padding_right, { color: WHITE }]}>{props.star}</Text>
                    <Eicon name="star" color={YELLOW} size={ICON_SIZE - 7} />
                </View>}
                {props.rating && <View style={{ flexDirection: 'row' }}>
                    <Text style={[globalstyles.description, globalstyles.padding_right]}>{props.rating}</Text>
                    <Text style={globalstyles.description}>Rating</Text>
                </View>}
            </View>
            <View style={styles.prodElement}>
                {props.mrp && <View style={{ flexDirection: 'row' }}>
                    <Text style={[globalstyles.description, globalstyles.padding_right]}>MRP</Text>
                    <Text style={[globalstyles.description, globalstyles.padding_right]}>{props.mrp}</Text>
                </View>}
                {props.discount && <View style={{ flexDirection: 'row' }}>
                    <Text style={[globalstyles.description, globalstyles.padding_right]}>{props.discount}%</Text>
                    <Text style={globalstyles.description}>OFF</Text>
                </View>}
            </View>
            {props.price && <View style={styles.prodElement}>
                <Text style={globalstyles.padding_right}>${props.price}</Text>
                <Text style={[globalstyles.description, globalstyles.padding_right]}>ADD</Text>
            </View>}
            {props.isAddToCartButton && <TouchableOpacity style={styles.addToCart} onPress={props.addToCartMethod}>
                <Text style={globalstyles.description}>Add To Cart</Text>
            </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}

export default index

