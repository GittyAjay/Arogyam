import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid, TextInput } from 'react-native'
import { GREY, WHITE } from '../../assets/colors';
import { BORDER_WIDTH, DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
    },
    form: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: INLINE_GAP
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
    },
    btnStyle: {
        marginVertical: INLINE_GAP
    },
    txtStyle: {

    },
    otp: {
        width: 50,
        height: 50,
        borderColor: GREY,
        borderWidth: BORDER_WIDTH,
        textAlignVertical: 'top',
        marginRight: DEFAUTL_SPACE,
    }
})