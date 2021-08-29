import { StyleSheet, Text, View } from 'react-native'
import { BLACK, WHITE } from '../../assets/colors'
import { DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        margin: DEFAUTL_SPACE
    },
    description: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Regular',
        color: BLACK
    },
    padding__horizental: {
        paddingHorizontal: INLINE_GAP
    },
    padding: {
        padding: DEFAUTL_SPACE
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold',
        color: BLACK
    },
    padding__vertical: {
        paddingVertical: DEFAUTL_SPACE
    },
    padding__top: {
        paddingTop: DEFAUTL_SPACE / 2
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    padding__left: {
        paddingLeft: INLINE_GAP
    },
    column__align: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    margin__left: {
        marginLeft: DEFAUTL_SPACE
    }
})