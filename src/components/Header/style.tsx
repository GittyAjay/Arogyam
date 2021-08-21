import { StyleSheet, Text, View } from 'react-native'
import { WHITE } from '../../assets/colors'
import { FONT_MID, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
        elevation: 5
    },
    title: {
        fontSize: FONT_MID,
        fontWeight: 'bold'
    }
})