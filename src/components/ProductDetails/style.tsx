import { StyleSheet } from 'react-native'
import { SECONDARY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL } from '../../assets/sizes'

export const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: WHITE,
        overflow: 'hidden',
        elevation: 1,
        padding: DEFAUTL_SPACE
    },
    addToCart:
    {
        alignItems: 'center',
        height: 30,
        borderWidth: BORDER_WIDTH,
        borderColor: SECONDARY,
        borderStyle: 'solid',
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center'
    },
    prodElement:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: DEFAUTL_SPACE / 2
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Regular'
    }
})