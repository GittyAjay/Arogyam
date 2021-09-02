import React from 'react'
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { PRIMARY, SECONDARY, WHITE } from '../../assets/colors'
import { DEFAUTL_SPACE, Dimension, FONT_MID, FONT_SMALL } from '../../assets/sizes'
import { styles } from './style';
import ProductDetailCard from '../../components/ProductDetails';
import ProductCard from '../../components/Product';
import { connect, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/action';
import AwesomeLoading from 'react-native-awesome-loading';
import { prodcut_BRAND, product_TYPES, shopByCatagories, shopByBrand, quickConsultants, doctors, product, prodElements } from '../../store/reducers/projectReducer';
import Priscription from '../../components/Priscription'
import PosterCard from '../../components/PosterCard'
import HeadingContainer from '../../components/HeadingContainer'
import { globalstyles } from '../../globalcss';
const index = (props: { navigation: { push: Function }, products: product, cart: product, addToCart: Function }) => {
    const [progress_status, setProgress_status] = React.useState(false)
    const { WIDTH } = Dimension();
    const user = useSelector(state => state.auth.user);
    console.log(user);

    const records = {
        shopByCatagories,
        shopByBrand,
        quickConsultants,
        doctors
    }
    function upload_click() {
        props.navigation.push('Prescription')
    }
    function categories_click() {
        console.log("categories click");
    }
    function brand_click() {
        console.log("categories click");
    }
    function addToCart() {

    }
    const renderFunction = (items: any) => {
        return (
            <View style={styles.container}>
                {/*Priscription */}
                <Priscription onPress={upload_click} />
                {/* Health Checkup */}
                <View style={[styles.healthCheckup, globalstyles.margin__Bottom]}>
                    <Text style={[globalstyles.heading, { fontSize: FONT_SMALL }, globalstyles.margin__Bottom]}>Health checkup</Text>
                    <PosterCard onPress={() => { }} style={globalstyles.margin__Bottom} />
                </View>
                {/* SHOP BY CATEGORIES */}
                <HeadingContainer style={globalstyles.margin__Bottom}>
                    <Text style={[globalstyles.heading, { fontSize: FONT_SMALL }]}>SHOP BY CATEGORIES</Text>
                    <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "shopByCatagories" }) }}>
                        <Text style={[styles.seeAll]}>SEE ALL</Text>
                    </TouchableOpacity>
                </HeadingContainer>
                <View style={[styles.card_layout, globalstyles.margin__Bottom]}>
                    {items.item.shopByCatagories.map((values: product_TYPES, key: number) => {
                        if (key < 6)
                            return (
                                <View key={key} style={styles.card_layout}>
                                    <ProductCard {...values} key={key} style={{ margin: 3 }} background={PRIMARY} onClick={() => props.navigation.push("ProductPage", { type: "Products", name: values })} >
                                        <Image source={values.url} />
                                    </ProductCard>
                                </View>
                            );
                    })}
                </View>
                {/* SHOP BY BRAND */}
                <HeadingContainer style={globalstyles.margin__Bottom}>
                    <Text style={[globalstyles.heading, { fontSize: FONT_SMALL }]}>SHOP BY BRAND</Text>
                    <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "shopByBrand" }) }}>
                        <Text style={styles.seeAll}>SEE ALL</Text>
                    </TouchableOpacity>
                </HeadingContainer>
                <View style={[styles.card_layout, globalstyles.margin__Bottom]}>
                    {items.item.shopByBrand.map(((values: prodcut_BRAND, key: number) => {
                        if (key < 6)
                            return (
                                <View key={key} style={styles.card_layout}>
                                    <ProductCard key={key} {...values} background={SECONDARY} style={{ margin: 3 }} onClick={() => props.navigation.push("ProductPage", { type: "Products", name: values })}>
                                        <Image source={values.url} />
                                    </ProductCard>
                                </View>
                            );
                    }))}
                </View>
                {/* Banner */}
                <PosterCard onPress={() => { }} style={globalstyles.margin__Bottom} />
                {/* Health product */}
                <HeadingContainer style={globalstyles.margin__vertical}>
                    <Text style={[globalstyles.heading, { fontSize: FONT_SMALL }]}>Health product</Text>
                    <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "Products" }) }}>
                        <Text style={styles.seeAll}>SEE ALL</Text>
                    </TouchableOpacity>
                </HeadingContainer>
                <View style={[styles.card_layout, globalstyles.margin__Bottom]}>
                    {props.products.map((value: prodElements, key: number) => {
                        if (key < 4)
                            return (
                                <ProductDetailCard isAddToCartButton={true} addToCartMethod={() => props.addToCart(value)} {...value} key={key} onClick={() => { props.navigation.push("ViewProduct", value) }} style={{ width: WIDTH / 2 - 20, margin: 3 }} text={{ color: WHITE }}>
                                    <Image source={value.url} style={{ alignSelf: 'center' }} />
                                </ProductDetailCard>
                            );
                    })}
                </View>
            </View>
        );
    }
    return (
        <>
            <AwesomeLoading indicatorId={8} size={50} isActive={progress_status} text="oh" />
            <FlatList data={[records]} renderItem={renderFunction} keyExtractor={(item) => { return ` ${Math.random().toFixed}` }} />
        </>
    )
}
function mapStateToProps(state: any) {
    return { products: state.project.products, cart: state.project.cart };
}
const mapDispatchToProps = {
    addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(index);


