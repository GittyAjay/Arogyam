import { StyleSheet } from 'react-native'
import { WHITE } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
        paddingVertical: DEFAUTL_SPACE
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Regular',
        alignSelf: 'center'
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
        fontFamily: 'Nunito-Regular'
    },
})