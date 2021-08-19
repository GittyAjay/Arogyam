import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
        paddingVertical: DEFAUTL_SPACE
    },
    form: {

    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
    },
    btnStyle: {

    },
    txtStyle: {

    }
})