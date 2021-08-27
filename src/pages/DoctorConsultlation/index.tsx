import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { styles } from './style'
import HomeMenu from '../../components/HomeMenu'
import Row from '../../components/Row'
import Product from '../../components/ProductDetails';
import { DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes'
import { doctor_categories } from '../../store/reducers/projectReducer'
import { FlatList } from 'react-native-gesture-handler'
const index = (props: { navigation: { push: Function } }) => {

    function renderFunction(value) {
        if (value.index < 5)
            return (
                <Row style={{ flexWrap: 'wrap' }}>
                    <Product name={value.item.type} onClick={() => { }} style={{ margin: DEFAUTL_SPACE / 2 }}>
                        <Image source={value.item.url} style={{ margin: DEFAUTL_SPACE / 2 }} />
                    </Product>
                </Row>
            )
        if (value.index === 5)
            return (
                <Product name="more" onClick={() => { }} style={{ margin: DEFAUTL_SPACE / 2 }}>
                    <Text>...</Text>
                </Product>
            )
    }
    return (
        <>
            <HomeMenu />
            <Row style={{ justifyContent: 'space-between', margin: DEFAUTL_SPACE }}>
                <Text style={styles.header}>Categories</Text>
                <TouchableOpacity onPress={() => props.navigation.push("ProductPage", { type: "doctorCategories" })}>
                    <Text style={styles.normal}>See All</Text>
                </TouchableOpacity>
            </Row>
            <View style={styles.container}>
                <FlatList numColumns={3} renderItem={renderFunction} data={doctor_categories} keyExtractor={(values, index) => index.toString()} />
            </View>
        </>
    )
}

export default index


