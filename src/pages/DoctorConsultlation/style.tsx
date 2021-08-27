import { StyleSheet } from 'react-native'
import { WHITE } from '../../assets/colors'
import { DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: DEFAUTL_SPACE,
    },
    header: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-SemiBold',
    },
    normal: {
        fontFamily: 'Nunito-Regular',
    },
    margin__bottom: {
        marginBottom: DEFAUTL_SPACE
    }
})