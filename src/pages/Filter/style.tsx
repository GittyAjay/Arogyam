import { INLINE_GAP, DEFAUTL_SPACE } from '../../assets/sizes';
import { StyleSheet } from 'react-native'
import { SHADE, WHITE } from '../../assets/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: SHADE
    },
    top: {
        backgroundColor: WHITE,
        paddingVertical: INLINE_GAP,
        paddingHorizontal: DEFAUTL_SPACE,
        shadowColor: SHADE,
        shadowOpacity: 0.9,
        shadowRadius: 5,
    },
})