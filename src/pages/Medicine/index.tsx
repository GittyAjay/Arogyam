import React from 'react'
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import Ioicon from 'react-native-vector-icons/Ionicons'
import { styles } from './style';
import ProductDetailCard from '../../components/ProductDetails';
import ProductCard from '../../components/Product';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/action';
import AwesomeLoading from 'react-native-awesome-loading';
import { prodcut_BRAND, product_TYPES, shopByCatagories, shopByBrand, quickConsultants, doctors, product, prodElements } from '../../store/reducers/projectReducer';
const index = (props: { navigation: { push: Function }, products: product, cart: product, addToCart: Function }) => {
    const [progress_status, setProgress_status] = React.useState(false)
    const state = useSelector(state => state.project.progress_status)
    React.useEffect(() => {
        console.log(state);
    }, []);
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
                <View style={styles.priscription}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ paddingBottom: DEFAUTL_SPACE, fontSize: FONT_MID, color: BLACK }}>Quick uplode your priscription</Text>
                        <Text style={{ width: 250 }}>Pariatur in proident aliquip et magna. Elit eu magna magna reprehende </Text>
                        <TouchableOpacity style={{ padding: DEFAUTL_SPACE, backgroundColor: PRIMARY, width: 100, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: INLINE_GAP }} onPress={upload_click}>
                            <Ioicon name="md-camera" size={ICON_SIZE} color={WHITE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                            <Text style={{ color: WHITE }}>UPLOAD</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Ioicon name="ios-document-attach" size={ICON_SIZE + 20} />
                    </TouchableOpacity>
                </View>
                {/* Health Checkup */}
                <View style={styles.healthCheckup}>
                    <Text style={{ fontSize: FONT_MID, paddingBottom: DEFAUTL_SPACE }}>Health checkup</Text>
                    <View style={{ height: 150, borderRadius: BORDER_RADIUS, backgroundColor: WHITE }}>
                    </View>
                </View>
                {/* SHOP BY CATEGORIES */}
                <View>
                    <View style={styles.headingContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.heading}>SHOP BY CATEGORIES</Text>
                        </View>
                        <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "shopByCatagories" }) }}>
                            <Text style={styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card_layout}>
                        {items.item.shopByCatagories.map((values: product_TYPES, key: number) => {
                            if (key < 6)
                                return (
                                    <View key={key} style={styles.card_layout}>
                                        <ProductCard {...values} key={key} style={{ margin: 3 }} background={PRIMARY} onClick={categories_click} text={styles.simple_cardtextstyle}>
                                            <Image source={values.url} />
                                        </ProductCard>
                                    </View>
                                );
                        })}
                    </View>
                </View>
                {/* SHOP BY BRAND */}
                <View>
                    <View style={styles.headingContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.heading}>SHOP BY BRAND</Text>
                        </View>
                        <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "shopByBrand" }) }}>
                            <Text style={styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card_layout}>
                        {items.item.shopByBrand.map(((values: prodcut_BRAND, key: number) => {
                            if (key < 6)
                                return (
                                    <View key={key} style={styles.card_layout}>
                                        <ProductCard key={key} {...values} background={SECONDARY} style={{ margin: 3 }} onClick={brand_click} text={styles.simple_cardtextstyle}>
                                            <Image source={values.url} />
                                        </ProductCard>
                                    </View>
                                );
                        }))}
                    </View>
                </View>
                {/* Banner */}
                <View style={{ height: 150, borderRadius: BORDER_RADIUS, backgroundColor: WHITE, marginVertical: INLINE_GAP, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Banner</Text>
                </View>
                {/* Health product */}
                <View>
                    <View style={styles.headingContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.heading}>Health product</Text>
                        </View>
                        <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "Products" }) }}>
                            <Text style={styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: DEFAUTL_SPACE, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {props.products.map((value: prodElements, key: number) => {
                        if (key < 4)
                            return (
                                <ProductDetailCard isAddToCartButton={true} addToCartMethod={() => props.addToCart(value)} {...value} key={key} onClick={() => { props.navigation.push("ViewProduct") }} style={{ margin: 2 }} text={{ color: WHITE }} >
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


