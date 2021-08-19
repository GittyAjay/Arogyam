import { StyleSheet } from 'react-native'
import { PRIMARY, WHITE } from '../../assets/colors';
import { FONT_MID } from '../../assets/sizes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY
    },
    font: {
        color: WHITE,
        fontSize: FONT_MID
    }
})