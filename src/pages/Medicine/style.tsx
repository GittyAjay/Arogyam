import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors';
import { Dimension, FONT_MID } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: SHADE
    },
    top: {
        backgroundColor: PRIMARY
    },
    search__Bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: INLINE_GAP,
        marginVertical: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: DEFAUTL_SPACE
    },
    promo__card: {
        height: 200,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBrands: {
        paddingVertical: DEFAUTL_SPACE,
        flexDirection: 'column'
    },
    orderBy: {
        backgroundColor: WHITE,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})
