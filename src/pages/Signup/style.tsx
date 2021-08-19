import { DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes';
import { WHITE } from '../../assets/colors';
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
        paddingVertical: DEFAUTL_SPACE
    },
    form: {
        alignSelf: 'stretch',
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
    },
    btnStyle: {

    },
    txtStyle: {

    }
})