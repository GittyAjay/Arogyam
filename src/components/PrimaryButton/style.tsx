import { StyleSheet } from 'react-native'
import { DEFAUTL_SPACE } from '../../assets/sizes';
import { PRIMARY } from '../../assets/colors';

export const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingVertical: DEFAUTL_SPACE
    },
})