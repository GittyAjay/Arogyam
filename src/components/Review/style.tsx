import { StyleSheet } from 'react-native'
import { SHADE, WHITE } from '../../assets/colors'
import { FONT_MID, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: INLINE_GAP,
        elevation: 1,
        backgroundColor: SHADE
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Regular'
    }
})
