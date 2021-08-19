import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { GREY, SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
    },
    form: {
        alignSelf: 'stretch',
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
    },
    btnStyle: {

    },
    txtStyle: {

    }
})