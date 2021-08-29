import { StyleSheet, } from 'react-native'
import { GREY, PRIMARY } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes'

export const styles = StyleSheet.create({
    priscription: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: INLINE_GAP,
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        borderColor: GREY,
        overflow: 'hidden',
        marginBottom: INLINE_GAP
    },
    iconButton:
    {
        padding: DEFAUTL_SPACE,
        backgroundColor: PRIMARY,
        width: 100,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: INLINE_GAP
    }
})