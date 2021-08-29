import { StyleSheet } from 'react-native'
import { LIGHT_SHADE, SHADE, WHITE } from '../../assets/colors'
import { FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: INLINE_GAP,
        elevation: 1,
        backgroundColor: LIGHT_SHADE
    },
})
