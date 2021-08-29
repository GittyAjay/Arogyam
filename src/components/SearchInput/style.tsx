import { StyleSheet } from 'react-native'
import { SHADE } from '../../assets/colors'
import { BORDER_RADIUS, DEFAUTL_SPACE } from '../../assets/sizes'
export const styles = StyleSheet.create({
    inputBox: {
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        backgroundColor: SHADE,
        justifyContent: 'space-between',
        paddingHorizontal: DEFAUTL_SPACE,
        alignItems: 'center'
    }

})