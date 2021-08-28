import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Eicon from 'react-native-vector-icons/Entypo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { BLACK, GREY, PRIMARY, SHADE, WHITE } from '../../assets/colors';
import { styles } from "./style";
import { ImageSourcePropType } from 'react-native';
const index = (props: { navigation: { pop: Function } }) => {
    type city = Array<{
        name: String,
        url: ImageSourcePropType
    }>
    type popularCityType = Array<{
        name: String,
        url: NodeRequire
    }>
    const allCity: city = [
        { name: "Delhi", url: require('../../assets/images/agra.png') },
        { name: "Kolkata", url: require('../../assets/images/agra.png') },
        { name: "Banglore", url: require('../../assets/images/agra.png') },
        { name: "Chennai", url: require('../../assets/images/agra.png') },
        { name: "Mumbai", url: require('../../assets/images/agra.png') },
    ]
    const [geoLocation, setGeoLocation] = React.useState<String>();
    const GOOGLE_PLACES_API_KEY = 'AIzaSyCBk1xelmbznNN8czf3oe5wGQfu-aF2iYM';

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
                    <GooglePlacesAutocomplete
                        placeholder='Search..'
                        minLength={2}
                        query={{
                            key: GOOGLE_PLACES_API_KEY,
                            language: 'en', // language of the results
                        }}
                        textInputProps={{ placeholderTextColor: GREY }}
                        styles={{
                            textInput: {
                                color: BLACK,
                                backgroundColor: WHITE,
                            },
                            predefinedPlacesDescription: {
                                color: SHADE,
                            },
                        }}
                        onPress={(data, details = null) => { setGeoLocation(data.description); }}
                        onFail={(error) => console.error(error)}
                        requestUrl={{
                            url:
                                'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                            useOnPlatform: 'web',
                        }}
                    />
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
                    <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, color: GREY, paddingVertical: DEFAUTL_SPACE }}>Top cities</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: 300 }}>
                        <View style={{ flexDirection: 'column', paddingVertical: DEFAUTL_SPACE }}>
                            {allCity.map((values, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE }} onPress={() => setGeoLocation(values.name)}>
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

