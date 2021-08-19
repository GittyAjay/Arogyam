import React, { useEffect } from 'react'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { TextInput, TouchableOpacity, View, Image, ScrollView, ImageSourcePropType, FlatList } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import ProductCard from '../../components/Product';
import ProductDetail from '../../components/ProductDetail';
import { styles } from './style'
import { prodElements, product_TYPES, product } from '../../store/reducers/projectReducer';
const index = (props: { navigation: { push: Function, pop: Function } }) => {
    const product: product = [
        { name: "Women nutrition", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 0 },
        { name: "Women nutrition", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 0 },
        { name: "Women nutrition", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 0 },
    ]
    function TopNav() {
        return (
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
        );
    }
    function renderFunction(items: { item: prodElements }) {
        return (
            <ProductDetail key={items.item.id} name={items.item.type.type} onClick={() => { }} style={{ margin: DEFAUTL_SPACE / 2 }} text={{ color: WHITE }} discount={15} mrp={400} price={1000} rating={123} star={1}>
                <Image source={items.item.url} style={{ alignSelf: 'center' }} />
            </ProductDetail>
        );
    }
    return (
        <View style={styles.container}>
            <TopNav />
            <View style={styles.flatList}>
                <FlatList numColumns={2} data={product} renderItem={renderFunction} keyExtractor={items => `${items.id}`} />
            </View>
        </View>
    )
}

export default index


