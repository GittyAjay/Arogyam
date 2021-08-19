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
        justifyContent: 'space-between',
        backgroundColor: PRIMARY,
        alignItems: 'center',
        padding: INLINE_GAP,
    },
    search__Bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: INLINE_GAP,
        marginBottom: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: DEFAUTL_SPACE
    }
})