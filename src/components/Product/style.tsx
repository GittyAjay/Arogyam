import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GREY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, BORDER_WIDTH } from '../../assets/sizes'
export const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
        height: 110,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderColor: GREY,
        borderWidth: BORDER_WIDTH,
    }
})