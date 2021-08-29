import { StyleSheet } from "react-native";
import { PRIMARY, WHITE } from "../../assets/colors";
import { DEFAUTL_SPACE, INLINE_GAP } from "../../assets/sizes";
export const styles = StyleSheet.create({
    container: {
        padding: INLINE_GAP,
        flexDirection: 'column',
        paddingHorizontal: DEFAUTL_SPACE
    },
    buttonStyle: {
        marginTop: DEFAUTL_SPACE,
        backgroundColor: WHITE,
        borderWidth: 1,
        borderColor: PRIMARY
    }
})