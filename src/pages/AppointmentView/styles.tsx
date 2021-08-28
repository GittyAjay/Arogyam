import { StyleSheet } from 'react-native'
import { GREY_BCK, PRIMARY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_bck: {
        backgroundColor: PRIMARY
    },
    header_txt: {
        color: WHITE,
        fontFamily: 'Nunito-Bold',
        fontSize: FONT_MID
    },
    grey_bck: {
        backgroundColor: GREY_BCK
    },
    heading: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Regular'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    padding__Bottom: {
        paddingBottom: DEFAUTL_SPACE
    },
    margin__Bottom: {
        paddingBottom: DEFAUTL_SPACE
    },
    margin__right: {
        marginRight: DEFAUTL_SPACE
    },
    margin__top: {
        marginTop: DEFAUTL_SPACE
    },
    margin__horizental: {
        marginTop: DEFAUTL_SPACE
    },
    margin__vertical: {
        marginTop: DEFAUTL_SPACE
    },
    padding: {
        padding: INLINE_GAP
    },
    doctors: {

    },
    align_center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button__border: {
        borderRadius: BORDER_RADIUS
    },
    appointment: {

    }
})
