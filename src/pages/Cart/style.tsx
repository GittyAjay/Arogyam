import { StyleSheet, Text, View } from 'react-native'
import { PRIMARY, SECONDARY, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingHorizontal: INLINE_GAP,
        backgroundColor: WHITE
    },
    cartItem: { justifyContent: 'center', alignItems: 'center', height: 150, marginBottom: DEFAUTL_SPACE },
    title: {

    },
    details: {
        elevation: 2,
        backgroundColor: WHITE,
        height: 100,
        flexDirection: 'column',
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-around',
        paddingHorizontal: DEFAUTL_SPACE,
        marginBottom: DEFAUTL_SPACE
    },
    iconButton: { width: 20, height: 20, backgroundColor: PRIMARY, borderRadius: BORDER_RADIUS_CIRCULAR, justifyContent: 'center', alignItems: 'center' },
    banner: {
        height: 150,
        backgroundColor: SHADE,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: DEFAUTL_SPACE
    }
})