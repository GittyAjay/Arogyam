import { StyleSheet } from 'react-native'
import { BLACK, LIGHT_SHADE, PRIMARY, WHITE } from '../assets/colors'
import { NUNITO_BOLD, NUNITO_REGULAR } from '../assets/fontnames'
import { BORDER_RADIUS, DEFAUTL_SPACE, FONT_LARGE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../assets/sizes'
export const globalstyles = StyleSheet.create({
    padding: {
        padding: INLINE_GAP
    },
    margin__vertical: {
        marginTop: DEFAUTL_SPACE
    },
    margin__horizental: {
        marginTop: DEFAUTL_SPACE
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    padding__Bottom: {
        paddingBottom: DEFAUTL_SPACE
    },
    padding_right: {
        paddingRight: DEFAUTL_SPACE
    },
    margin__Bottom: {
        paddingBottom: DEFAUTL_SPACE
    },
    margin__right: {
        marginRight: DEFAUTL_SPACE
    },
    margin__left: {
        marginLeft: DEFAUTL_SPACE / 2
    },
    margin__top: {
        marginTop: DEFAUTL_SPACE
    },
    heading: {
        color: BLACK,
        fontSize: FONT_LARGE,
        fontFamily: NUNITO_BOLD
    },
    description: {
        color: BLACK,
        fontSize: FONT_SMALL,
        fontFamily: NUNITO_REGULAR
    },
    grey_bck: {
        backgroundColor: LIGHT_SHADE
    },
    header_bck: {
        backgroundColor: PRIMARY
    },
    header_txt: {
        color: WHITE
    },
    button__text: {
        color: WHITE,
        fontFamily: NUNITO_BOLD,
        fontSize: FONT_MID
    },
    align_center: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    padding__horizental: {
        paddingHorizontal: DEFAUTL_SPACE
    },
    padding_left: {
        paddingLeft: DEFAUTL_SPACE / 2
    },
    padding__vertical: {
        paddingVertical: DEFAUTL_SPACE
    },
    padding__top: {
        paddingTop: DEFAUTL_SPACE / 2
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
        fontFamily: 'Nunito-Regular',
        color: BLACK
    },
    title: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Regular'
    },
    title__bold: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    }
})
