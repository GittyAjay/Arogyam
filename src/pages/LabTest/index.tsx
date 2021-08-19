import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import Ioicon from 'react-native-vector-icons/Ionicons'
import CategoriesCard from '../../components/CategoryCard';
import DocotorCard from '../../components/DoctorCard';
import SelectLocation from '../SelectLocation';
import { styles } from './style';
type shopByCatagoriesType = Array<{ name: string, url: NodeRequire, key: number }>
type doctorType = Array<{ name: string, desc: String, star: number, url: NodeRequire, key: number }>
type shopByBrandType = Array<{ name: string, url: NodeRequire, key: number }>
type quickConsultantType = Array<{ name: string, url: NodeRequire, color: String, key: number }>
const index = (props: { navigation: { push: Function } }) => {
    const shopByCatagories: shopByCatagoriesType = [
        { name: "Covid product", url: require('../../assets/images/shopbycategory1.png'), key: 1 },
        { name: "Ayurdev", url: require('../../assets/images/shopbycategory2.png'), key: 2 },
        { name: "Eye wear", url: require('../../assets/images/shopbycategory3.png'), key: 3 },
        { name: "Mom & beby", url: require('../../assets/images/shopbycategory4.png'), key: 4 },
        { name: "Tretment", url: require('../../assets/images/shopbycategory5.png'), key: 4 },
        { name: "Sexual wellness", url: require('../../assets/images/shopbycategory6.png'), key: 5 },
        { name: "Device", url: require('../../assets/images/shopbycategory7.png'), key: 6 },
        { name: "Fitness", url: require('../../assets/images/shopbycategory8.png'), key: 7 },
        { name: "Beauty", url: require('../../assets/images/shopbycategory9.png'), key: 8 },
    ]
    const shopByBrand: shopByBrandType = [
        { name: "Dabar", url: require('../../assets/images/shopbycategory1.png'), key: 9 },
        { name: "Durex", url: require('../../assets/images/shopbycategory2.png'), key: 10 },
        { name: "Himalaya", url: require('../../assets/images/shopbycategory3.png'), key: 11 },
        { name: "Dettol", url: require('../../assets/images/shopbycategory4.png'), key: 12 },
        { name: "Unilever", url: require('../../assets/images/shopbycategory5.png'), key: 13 },
        { name: "Honey", url: require('../../assets/images/shopbycategory6.png'), key: 14 },
    ]
    const quickConsultant: quickConsultantType = [
        { name: "Diabets", url: require('../../assets/images/shopbycategory1.png'), color: 'red', key: 15 },
        { name: "Pregnancy", url: require('../../assets/images/shopbycategory2.png'), color: 'green', key: 16 },
        { name: "Weight loss", url: require('../../assets/images/shopbycategory3.png'), color: 'orange', key: 17 },
    ]
    const doctors: doctorType = [
        { name: "Dr. Avinash", desc: "Heart specilist", star: 1, url: require('../../assets/images/shopbycategory1.png'), key: 18 },
        { name: "Dr. Sweta", desc: "Depression specilist", star: 1, url: require('../../assets/images/shopbycategory2.png'), key: 19 },
        { name: "Dr Anupam", desc: "Nurology specilist", star: 1, url: require('../../assets/images/shopbycategory3.png'), key: 20 },
    ]
    const records = {
        shopByCatagories,
        shopByBrand,
        quickConsultant,
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
                <View style={styles.healthCheckup}>
                    <Text style={{ fontSize: FONT_MID, paddingBottom: DEFAUTL_SPACE }}>Health checkup</Text>
                    <View style={{ height: 150, borderRadius: BORDER_RADIUS, backgroundColor: SHADE }}>
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
                        {items.item.shopByCatagories.map((values, key) => {
                            return (
                                <View key={key} style={styles.shopByCatagories}>
                                    <CategoriesCard key={key} name={values.name} style={{ margin: DEFAUTL_SPACE / 2 }} onClick={() => console.log("clicked", key)
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
                        {items.item.shopByBrand.map((values, key) => {
                            return (
                                <View key={key} style={styles.shopByCatagories}>
                                    <CategoriesCard key={key} name={values.name} style={{ margin: DEFAUTL_SPACE / 2 }} onClick={() => console.log("clicked", key)
                                    } text={styles.simple_cardtextstyle}>
                                        <Image source={values.url} />
                                    </CategoriesCard>
                                </View>
                            );
                        })}
                    </View>
                </View>
                {/* Quick consultant */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', paddingBottom: DEFAUTL_SPACE }}>
                        <Text>Quick consultant</Text>
                        <TouchableOpacity>
                            <Text style={{ color: SECONDARY }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shopByCatagories}>
                        {items.item.quickConsultant.map((values, key) => {
                            return (
                                <View key={key} style={styles.shopByCatagories}>
                                    <CategoriesCard key={key} name={values.name} style={{ margin: DEFAUTL_SPACE / 2, backgroundColor: values.color }} text={styles.colored__CardtextStyle} onClick={() => console.log("clicked", key)
                                    }>
                                        <Image source={values.url} />
                                    </CategoriesCard>
                                </View>
                            );
                        })}
                    </View>
                </View>
                {/* Popular Doctor */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', paddingBottom: DEFAUTL_SPACE }}>
                        <Text>Popular Doctor</Text>
                        <TouchableOpacity>
                            <Text style={{ color: SECONDARY }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.doctors}>
                    {items.item.doctors.map((value, key) => {
                        return (
                            <DocotorCard key={key} name={value.name} desc={`${value.desc}`} star={value.star} style={{ marginBottom: DEFAUTL_SPACE }}>
                                <Image source={require('../../assets/images/doctor.png')} />
                            </DocotorCard>
                        );
                    })}
                </View>
            </View>
        );
    }

    return (
        <FlatList data={[records]} renderItem={renderFunction} keyExtractor={(item) => `${item.shopByCatagories[0].key}`} />
    )
}

export default index

