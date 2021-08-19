import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, Dimension, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import Ioicon from 'react-native-vector-icons/Ionicons'
import CategoriesCard from '../../components/CategoryCard';
import DocotorCard from '../../components/DoctorCard';
import SelectLocation from '../SelectLocation';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { styles } from './style';
type shopByCatagoriesType = Array<{ name: string, url: NodeRequire }>
type shopByBrandType = Array<{ name: string, url: NodeRequire }>
type quickConsultantType = Array<{ name: string, url: NodeRequire, color: String }>
type doctorType = Array<{ name: string, desc: String, star: number, url: NodeRequire, id: number }>
const index = (props: { navigation: { push: Function } }) => {
    const { WIDTH } = Dimension();
    const shopByCatagories: shopByCatagoriesType = [
        { name: "Covid product", url: require('../../assets/images/shopbycategory1.png') },
        { name: "Ayurdev", url: require('../../assets/images/shopbycategory2.png') },
        { name: "Eye wear", url: require('../../assets/images/shopbycategory3.png') },
        { name: "Mom & beby", url: require('../../assets/images/shopbycategory4.png') },
        { name: "Tretment", url: require('../../assets/images/shopbycategory5.png') },
        { name: "Sexual wellness", url: require('../../assets/images/shopbycategory6.png') },
        { name: "Device", url: require('../../assets/images/shopbycategory7.png') },
        { name: "Fitness", url: require('../../assets/images/shopbycategory8.png') },
        { name: "Beauty", url: require('../../assets/images/shopbycategory9.png') },
    ]
    const shopByBrand: shopByBrandType = [
        { name: "Dabar", url: require('../../assets/images/shopbycategory1.png') },
        { name: "Durex", url: require('../../assets/images/shopbycategory2.png') },
        { name: "Himalaya", url: require('../../assets/images/shopbycategory3.png') },
        { name: "Dettol", url: require('../../assets/images/shopbycategory4.png') },
        { name: "Unilever", url: require('../../assets/images/shopbycategory5.png') },
        { name: "Honey", url: require('../../assets/images/shopbycategory6.png') },
    ]
    const quickConsultant: quickConsultantType = [
        { name: "Diabets", url: require('../../assets/images/shopbycategory1.png'), color: 'red' },
        { name: "Pregnancy", url: require('../../assets/images/shopbycategory2.png'), color: 'green' },
        { name: "Weight loss", url: require('../../assets/images/shopbycategory3.png'), color: 'orange' },
    ]
    const doctors: doctorType = [
        { name: "Dr. Avinash", desc: "Heart specilist", star: 1, url: require('../../assets/images/doctor.png'), id: 0 },
        { name: "Dr. Sweta", desc: "Depression specilist", star: 1, url: require('../../assets/images/doctor.png'), id: 1 },
        { name: "Dr Anupam", desc: "Nurology specilist", star: 1, url: require('../../assets/images/doctor.png'), id: 2 },
    ]

    const data_provider = new DataProvider((r1, r2) => r1 != r2).cloneWithRows(doctors);
    const layout_provider = new LayoutProvider((i) => {
        return data_provider.getDataForIndex(i).type
    }, ((type, dim) => {
        switch (type) {
            case "NORMAL":
                dim.width = WIDTH;
                dim.height = 100
                break;
            default:
                dim.width = 0;
                dim.height = 0;
        }
    }));

    const row_render = (data: any) => {
        return (
            <DocotorCard {...data.item} style={{ marginBottom: 10 }}>
                <Image style={{ width: 50, height: 50 }} source={data.item.url} />
            </DocotorCard>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: WHITE }}>
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
                        {shopByCatagories.map((values, key) => {
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
                        {shopByBrand.map((values, key) => {
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
                        {quickConsultant.map((values, key) => {
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
                    <FlatList
                        data={doctors}
                        renderItem={row_render}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default index

