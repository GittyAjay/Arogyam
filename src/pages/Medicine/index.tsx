import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import Ioicon from 'react-native-vector-icons/Ionicons'
import CategoriesCard from '../../components/CategoryCard';
import DocotorCard from '../../components/DoctorCard';
import SelectLocation from '../SelectLocation';
import { styles } from './style';
import { ImageSourcePropType } from 'react-native'
import ProductDetail from '../../components/ProductDetail';
import { doctor, doctor_TYPES, doctorElements, product, prodElements, prodcut_BRAND, product_TYPES, quickConsultant, quickConsultantElements, shopByCatagories, shopByBrand, quickConsultants, doctors } from '../../store/reducers/projectReducer';
const index = (props: { navigation: { push: Function } }) => {
    const records = {
        shopByCatagories,
        shopByBrand,
        quickConsultants,
        doctors
    }
    const renderFunction = (items: any) => {
        return (
            <View style={styles.container}>
                {/*Priscription */}
                <View style={styles.priscription}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ paddingBottom: DEFAUTL_SPACE, fontSize: FONT_MID, color: BLACK }}>Quick uplode your priscription</Text>
                        <Text style={{ width: 250 }}>Pariatur in proident aliquip et magna. Elit eu magna magna reprehende </Text>
                        <TouchableOpacity style={{ padding: DEFAUTL_SPACE, backgroundColor: PRIMARY, width: 100, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: INLINE_GAP }} onPress={() => props.navigation.push('Prescription')}>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', paddingBottom: DEFAUTL_SPACE }}>
                        <Text>SHOP BY CATEGORIES</Text>
                        <TouchableOpacity>
                            <Text style={{ color: SECONDARY }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shopByCatagories}>
                        {items.item.shopByCatagories.map((values: product_TYPES, key: number) => {
                            if (key < 6)
                                return (
                                    <View key={key} style={styles.shopByCatagories}>
                                        <CategoriesCard key={key} name={values.type} style={{ margin: DEFAUTL_SPACE / 2 }} onClick={() => console.log("clicked", key)
                                        } text={styles.simple_cardtextstyle}>
                                            <Image source={values.url} />
                                        </CategoriesCard>
                                    </View>
                                );
                        })}
                    </View>
                </View>
                {/* SHOP BY BRAND */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', paddingBottom: DEFAUTL_SPACE }}>
                        <Text>SHOP BY BRAND</Text>
                        <TouchableOpacity>
                            <Text style={{ color: SECONDARY }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shopByCatagories}>
                        {items.item.shopByBrand.map(((values: prodcut_BRAND, key: number) => {
                            if (key < 6)
                                return (
                                    <View key={key} style={styles.shopByCatagories}>
                                        <CategoriesCard key={key} name={values.name} style={{ margin: DEFAUTL_SPACE / 2 }} onClick={() => console.log("clicked", key)
                                        } text={styles.simple_cardtextstyle}>
                                            <Image source={values.url} />
                                        </CategoriesCard>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', paddingBottom: DEFAUTL_SPACE }}>
                        <Text>Health product</Text>
                        <TouchableOpacity>
                            <Text style={{ color: SECONDARY }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: DEFAUTL_SPACE, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {shopByCatagories.map((value: product_TYPES, key: number) => {
                        if (key < 4)
                            return (
                                <ProductDetail key={key} name={value.type} onClick={() => { }} style={{ margin: 2 }} text={{ color: WHITE }} discount={15} mrp={400} price={1000} rating={123} star={1}>
                                    <Image source={value.url} style={{ alignSelf: 'center' }} />
                                </ProductDetail>
                            );
                    })}
                </View>
            </View>
        );
    }

    return (
        <FlatList data={[records]} renderItem={renderFunction} keyExtractor={(item) => { return ` ${Math.random().toFixed}` }} />
    )
}

export default index

