import React, { useEffect } from 'react'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { TextInput, TouchableOpacity, View, Image, ScrollView, ImageSourcePropType, FlatList } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Product from '../../components/ProductDetails';
import { styles } from './style'
import { prodElements, product_TYPES, product } from '../../store/reducers/projectReducer';
import { connect } from 'react-redux';
import { shopByBrand, shopByCatagories } from '../../store/reducers/projectReducer';
const index = (props: { navigation: { push: Function, pop: Function }, route: { params: { type: String } }, products: product }) => {
    console.log(props.route.params.type);
    const [filtered_product, setFilteredProduct] = React.useState<Array<object>>();
    React.useEffect(() => {
        switch (props.route.params.type) {
            case "shopByCatagories":
                setFilteredProduct([...shopByCatagories])
                break;
            case "shopByBrand":
                setFilteredProduct([...shopByBrand])
                break;
            case "Products":
                setFilteredProduct([...props.products])
                break;
            default:
                setFilteredProduct([]);
        }
    }, [])
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
        console.log(items.item);
        return (
            <Product {...items.item} key={items.item.id} onClick={() => { }} style={{ margin: DEFAUTL_SPACE / 2 }} text={{ color: WHITE }}>
                <Image source={items.item.url} style={{ alignSelf: 'center' }} />
            </Product>
        );
    }
    return (
        <View style={styles.container}>
            <TopNav />
            <View style={styles.flatList}>
                <FlatList numColumns={2} data={filtered_product} renderItem={renderFunction} keyExtractor={items => `${items.id}`} />
            </View>
        </View>
    )
}
function mapStateToProps(state: any) {
    return {
        products: state.project.products,
    };
}
export default connect(mapStateToProps)(index)


