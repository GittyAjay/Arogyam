import React, { useEffect } from 'react'
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
import { styles } from './style'
const index = (props: { navigation: { push: Function, pop: Function } }) => {
    type prod_type = Array<{ name: String, url: NodeRequire }>
    const TopBrand: prod_type = [
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "Stayfree", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
        { name: "whisper", url: require("../../assets/images/brand1.png") },
    ]
    const categories: prod_type = [
        { name: "Women nutrition", url: require("../../assets/images/categories1.png") },
        { name: "Mother nutrition", url: require("../../assets/images/categories1.png") },
        { name: "Feminine hygiene", url: require("../../assets/images/categories1.png") },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.search__Bar}>
                    <TouchableOpacity onPress={() => props.navigation.pop()}>
                        <Ioicon name="arrow-back" size={ICON_SIZE + 5} color={GREY} />
                    </TouchableOpacity>
                    <TextInput placeholder="All Product.." style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Micon name="keyboard-voice" size={ICON_SIZE} color={GREY} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginBottom: DEFAUTL_SPACE, flexDirection: 'row', flexWrap: 'wrap', padding: DEFAUTL_SPACE }}>
                    {categories.map((value, key) => {
                        return (
                            <ProductDetail key={key} name={value.name} onClick={() => { }} style={{ margin: 2 }} text={{ color: WHITE }} discount={15} mrp={400} price={1000} rating={123} star={1}>
                                <Image source={value.url} style={{ alignSelf: 'center' }} />
                            </ProductDetail>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default index


