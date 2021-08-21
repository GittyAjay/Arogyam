import { StyleSheet, Text, View } from 'react-native'
import { PRIMARY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS_CIRCULAR, BORDER_WIDTH } from '../../assets/sizes'
export const styles = StyleSheet.create({
    radio: {
        width: 20,
        height: 20,
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: WHITE,
        borderWidth: 2,
        borderColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerRadio: {
        width: 12,
        height: 12,
        backgroundColor: PRIMARY,
        borderRadius: BORDER_RADIUS_CIRCULAR,
    }
})
