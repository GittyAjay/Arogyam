import { StyleSheet } from 'react-native'
import { PRIMARY, WHITE } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_MID } from '../../assets/sizes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY
    },
    logo__text: {
        color: WHITE,
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Regular'
    },
    logo__img: {
        width: 50,
        height: 50,
        marginBottom: DEFAUTL_SPACE
    }
})