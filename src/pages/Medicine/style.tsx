import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { BLACK, GREY, PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: DEFAUTL_SPACE,
        backgroundColor: SHADE
    },
    healthCheckup: {
        marginBottom: INLINE_GAP
    },
    card_layout: {
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
    },
    seeAll: {
        color: SECONDARY,
        borderRadius: BORDER_RADIUS,
        borderColor: SECONDARY,
        borderWidth: BORDER_WIDTH,
        padding: DEFAUTL_SPACE
    },
})