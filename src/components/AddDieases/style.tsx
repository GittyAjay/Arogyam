import { StyleSheet } from "react-native";
import { PRIMARY, WHITE } from "../../assets/colors";
import { DEFAUTL_SPACE, INLINE_GAP } from "../../assets/sizes";
export const styles = StyleSheet.create({
    container: {
        padding: INLINE_GAP,
        flexDirection: 'column',
        backgroundColor: WHITE
    },
    buttonStyle: {
        marginRight: DEFAUTL_SPACE / 2,
        marginTop: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderWidth: 2,
        borderColor: PRIMARY,
        padding: DEFAUTL_SPACE
    }
})