import React, { useState } from 'react'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import ProductCard from '../../components/Product';
import ProductDetail from '../../components/ProductDetail';
import { Dimension, FONT_MID } from '../../assets/sizes';
import { styles } from './style'
const index = (props: { navigation: { push: Function, pop: Function } }) => {
    const { WIDTH } = Dimension();
    const [showSortBy, setShowSortBy] = useState(false);
    type prod_type = Array<{ name: String, url: NodeRequire }>
    const { HEIGHT } = Dimension();
    return (
        <>
            <View style={[styles.container]} >
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => props.navigation.pop()}>
                        <Ioicon name="arrow-back" size={ICON_SIZE + 5} color={GREY} />
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}

export default index

