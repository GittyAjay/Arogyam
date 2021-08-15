import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import { BLACK, GREY, PRIMARY, WHITE } from '../../assets/colors';
const index = (props: { navigation: { pop: Function } }) => {
    type city = Array<{
        name: String,
        url: NodeRequire
    }>
    const popularCity: city = [
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
    ]
    type popularCityType = Array<{
        name: String,
        url: NodeRequire
    }>
    const allCity: city = [
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
        { name: "Agra", url: require('../../assets/images/agra.png') },
    ]
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: PRIMARY }}>
                <View style={styles.top__header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: WHITE, fontSize: FONT_MID }}>Choose City</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.pop()}>
                        <Eicon name="cross" size={ICON_SIZE + 5} color={WHITE} />
                    </TouchableOpacity>
                </View>
                <View style={styles.search__Bar}>
                    <TextInput placeholder="Search your city" style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Ioicon name="md-search" size={ICON_SIZE} color={GREY} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: INLINE_GAP }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Eicon name="location-pin" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                    </TouchableOpacity>
                    <Text>use current location</Text>
                </View>
                <View style={{ padding: DEFAUTL_SPACE }}>
                    <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, color: GREY, paddingVertical: DEFAUTL_SPACE }}>Popular city</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: 300 }}>
                        <View style={{ flexDirection: 'column', paddingVertical: DEFAUTL_SPACE }}>
                            {popularCity.map((values, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }}>
                                        <Image source={values.url} style={{ marginRight: DEFAUTL_SPACE }} />
                                        <Text>{values.name}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                    <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, color: GREY, paddingVertical: DEFAUTL_SPACE }}>All city</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: 300 }}>
                        <View style={{ flexDirection: 'column', paddingVertical: DEFAUTL_SPACE }}>
                            {allCity.map((values, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }}>
                                        <Image source={values.url} style={{ marginRight: DEFAUTL_SPACE }} />
                                        <Text>{values.name}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default index
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: WHITE
    },
    top__header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: INLINE_GAP,
    },
    search__Bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: INLINE_GAP,
        marginBottom: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: DEFAUTL_SPACE
    }
})
