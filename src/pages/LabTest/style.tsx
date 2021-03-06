import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: INLINE_GAP,
        backgroundColor: SHADE
    },
    priscription: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: INLINE_GAP,
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        borderColor: GREY,
        overflow: 'hidden',
        marginBottom: INLINE_GAP
    },
    healthCheckup: {
        marginBottom: INLINE_GAP
    },
    shopByCatagories: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    colored__CardtextStyle: {
        color: WHITE
    },
    simple_cardtextstyle: {

    },
    doctors: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    }
})