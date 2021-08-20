import { StyleSheet, Text, View } from 'react-native'
import { GREY, WHITE } from '../../assets/colors'
import { DEFAUTL_SPACE } from '../../assets/sizes'
export const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: WHITE,
        paddingHorizontal: DEFAUTL_SPACE,
        elevation: 5
    }
})