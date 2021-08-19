import React, { useState } from 'react'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
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
import { styles } from './style';
import { ImageSourcePropType } from 'react-native';
import { product_TYPES, prodcut_BRAND, shopByCatagories, shopByBrand } from '../../store/reducers/projectReducer';
const index = (props: { navigation: { push: Function } }) => {
    const { WIDTH } = Dimension();
    const [showSortBy, setShowSortBy] = useState(false);
    return (
        <>
            <View style={[styles.container]} >
                <View style={styles.top}>
                    <View style={styles.search__Bar}>
                        <TouchableOpacity onPress={() => props.navigation.push("Home")}>
                            <Ioicon name="arrow-back" size={ICON_SIZE + 5} color={GREY} />
                        </TouchableOpacity>
                        <TextInput placeholder="Search.." style={{ flex: 1 }} />
                        <TouchableOpacity>
                            <Micon name="keyboard-voice" size={ICON_SIZE} color={GREY} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ padding: INLINE_GAP, opacity: showSortBy ? 0.5 : 1 }} onTouchStart={() => {
                        setShowSortBy(false)
                    }} >
                        <View style={styles.promo__card}>
                            <Text>Poster</Text>
                        </View>
                        <View style={styles.topBrands}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                                <Text>Top brands</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: SECONDARY, fontWeight: 'bold' }}>SEE ALL</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginBottom: DEFAUTL_SPACE }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {shopByBrand.map((value, key) => {
                                        return (
                                            <ProductCard key={key} name={value.name} onClick={() => { }} style={{ width: 150, height: 150, marginLeft: DEFAUTL_SPACE / 2 }} text={{}}>
                                                <Image source={value.url} />
                                            </ProductCard>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                            <View style={[styles.promo__card, { marginBottom: DEFAUTL_SPACE }]}>
                                <Text>Poster</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                                <Text>Shop by categories</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: SECONDARY, fontWeight: 'bold' }}>SEE ALL</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginBottom: DEFAUTL_SPACE }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {shopByCatagories.map((value, key) => {
                                        return (
                                            <ProductCard key={key} name={value.type} onClick={() => { }} style={{ width: 150, height: 150, marginLeft: DEFAUTL_SPACE / 2 }} text={{}}>
                                                <Image source={value.url} />
                                            </ProductCard>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                            <View style={[styles.promo__card, { marginBottom: DEFAUTL_SPACE }]}>
                                <Text>Poster</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                                <Text>All Product</Text>
                                <TouchableOpacity onPress={() => props.navigation.push("ProductPage")}>
                                    <Text style={{ color: SECONDARY, fontWeight: 'bold' }}>SEE ALL</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginBottom: DEFAUTL_SPACE, flexDirection: 'row', flexWrap: 'wrap' }}>
                                {shopByCatagories.map((value, key) => {
                                    return (
                                        <ProductDetail key={key} name={value.type} onClick={() => { }} style={{ margin: 2 }} text={{ color: WHITE }} discount={15} mrp={400} price={1000} rating={123} star={1}>
                                            <Image source={value.url} style={{ alignSelf: 'center' }} />
                                        </ProductDetail>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            {!showSortBy && <View style={{ height: 50, width: WIDTH, backgroundColor: WHITE, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { setShowSortBy(true) }}>
                        <Faicon name="sort" size={ICON_SIZE} color={GREY} style={{ paddingRight: DEFAUTL_SPACE }} />
                    </TouchableOpacity>
                    <Text>Sort By</Text>
                </View>
                <View style={{ width: 2, height: 50, backgroundColor: SHADE }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingRight: DEFAUTL_SPACE }}>Filter</Text>
                    <TouchableOpacity onPress={() => { props.navigation.push("Filter") }}>
                        <Ficon name="sliders" size={ICON_SIZE} color={GREY} />
                    </TouchableOpacity>
                </View>
            </View>}
            {showSortBy && <View style={[styles.orderBy, { height: 220, paddingVertical: DEFAUTL_SPACE }]}>
                <Text style={{ fontSize: FONT_MID, padding: DEFAUTL_SPACE / 2 }}>Top Brand</Text>
                <View style={{
                    paddingHorizontal: INLINE_GAP,
                    paddingVertical: DEFAUTL_SPACE
                }}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }} onPress={() => { setShowSortBy(false) }}>
                        <Ficon name="link" size={ICON_SIZE - 5} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                        <Text>Related</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }} onPress={() => { setShowSortBy(false) }}>
                        <Ioicon name="star-half" size={ICON_SIZE - 5} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                        <Text>Avarage customer rate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }} onPress={() => { setShowSortBy(false) }} >
                        <Micon name="attach-money" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                        <Text>Price low to high</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }} onPress={() => { setShowSortBy(false) }} >
                        <Micon name="attach-money" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                        <Text>Price high to low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }} onPress={() => { setShowSortBy(false) }} >
                        <Ficon name="scissors" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                        <Text>Discount</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </>

    )
}

export default index;

