import React from 'react'
import { Dimension, ICON_SIZE } from '../../assets/sizes';
import { TextInput, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { GREY, WHITE } from '../../assets/colors';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Product from '../../components/ProductDetails';
import { styles } from './style'
import { prodElements, product } from '../../store/reducers/projectReducer';
import { connect } from 'react-redux';
import { shopByBrand, shopByCatagories, doctor_categories, product_TYPES } from '../../store/reducers/projectReducer';
const index = (props: { navigation: { push: Function, pop: Function }, route: { params: { type: String, name: {} } }, products: product, categories: Array<product_TYPES> }) => {
    const [filtered_product, setFilteredProduct] = React.useState<Array<object>>();
    const { WIDTH } = Dimension();
    React.useEffect(() => {
        switch (props.route.params.type) {
            case "shopByCatagories":
                setFilteredProduct([...props.categories])
                break;
            case "shopByBrand":
                setFilteredProduct([...shopByBrand])
                break;
            case "doctorCategories":
                setFilteredProduct([...doctor_categories])
                break;
            case "Products":
                console.log("case", props.route.params.name);
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
    function renderFunction(items: { item: any }) {
        return (
            <Product {...items.item} onClick={() => props.navigation.push("ViewProduct", items.item)} style={{ margin: 2, width: props.route.params.type === "Products" ? WIDTH / 2 - 20 : WIDTH / 3 - 20 }} text={{ color: WHITE }}>
                <Image source={{ uri: items.item.categories_Image }} style={{ alignSelf: 'center', minWidth: 30, maxWidth: 60, minHeight: 30, maxHeight: 60 }} />
            </Product>
        );
    }
    return (
        <>
            <TopNav />
            <View style={styles.container}>
                <FlatList numColumns={props.route.params.type === "Products" ? 2 : 3} data={filtered_product} renderItem={renderFunction} keyExtractor={(items, index) => index.toString()} />
            </View>
        </>
    )
}
function mapStateToProps(state: any) {
    return {
        products: state.project.products,
        categories: state.project.categories
    };
}
export default connect(mapStateToProps)(index)


