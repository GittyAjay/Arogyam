import { StyleSheet } from 'react-native'
import { PRIMARY } from '../../assets/colors';
import { BUTTON_HEIGHT, FONT_LARGE } from '../../assets/sizes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    carosel: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    carosel__Container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    carosel__item: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    slider__Indicator: {
        flex: 0.1,
        flexDirection: 'row'
    },
    button: {
        backgroundColor: PRIMARY,
        height: BUTTON_HEIGHT
    },
    bottom: {
        flex: 0.2,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    bottom__Text: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        fontFamily: 'Nunito-Regular'
    }
})