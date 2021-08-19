import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { BLACK, GREY, PRIMARY, WHITE } from '../../assets/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: WHITE
    },
    top__header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: INLINE_GAP,
    },
    options: {
        height: 100,
        borderWidth: BORDER_WIDTH,
        borderRadius: BORDER_RADIUS,
        borderColor: PRIMARY,
        backgroundColor: PRIMARY,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnStyle: {

    }
})