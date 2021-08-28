import { StyleSheet } from 'react-native'
import { LIGHT_SHADE, RED_HEART, SHADE, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_GLARGE, FONT_MID, FONT_SMALL, INLINE_GAP } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: WHITE
    },
    imageThumbnail: {
        position: 'relative'
    },
    sliderNumber: {
        width: 50,
        height: 50,
        backgroundColor: WHITE,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: DEFAUTL_SPACE
    },
    summary: {
        flexDirection: 'column',
        padding: INLINE_GAP
    },
    heartSymbol: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    heading__large: {
        fontSize: FONT_GLARGE,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        flexDirection: 'column',
        padding: INLINE_GAP,
        backgroundColor: LIGHT_SHADE,
        margin: DEFAUTL_SPACE,
    },
    text__description: {
        fontFamily: 'Nunito-Regular',
        fontSize: FONT_SMALL
    },
    reviews: {
        flexDirection: 'column',
        padding: DEFAUTL_SPACE,
    },
    text__cross: {
        textDecorationLine: 'line-through',
        fontSize: FONT_MID,
        color: RED_HEART,
        fontFamily: 'Nunito-Bold'
    }
})
