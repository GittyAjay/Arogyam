import { StyleSheet, Text, View } from 'react-native'
import { WHITE } from '../../assets/colors'
import { BORDER_RADIUS, DEFAUTL_SPACE } from '../../assets/sizes'
export const styles = StyleSheet.create({
    modalContainer:
    {
        zIndex: 1,
        backgroundColor: WHITE,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: DEFAUTL_SPACE,
        borderRadius: 2 * BORDER_RADIUS,
        marginTop: 100
    }
})
