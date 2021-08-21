import { StyleSheet } from 'react-native'
import { GREY, PRIMARY, SHADE } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE } from '../../assets/sizes'
export const styles = StyleSheet.create({
    card: {
        alignItems: 'stretch',
        borderRadius: BORDER_RADIUS,
        borderWidth: BORDER_WIDTH,
        borderColor: PRIMARY,
        padding: DEFAUTL_SPACE
    }
})
