import { StyleSheet } from "react-native";
import { DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from "../../assets/sizes";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: INLINE_GAP
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Regular'
    },
    padding__left: {
        paddingLeft: DEFAUTL_SPACE
    },
    padding__vertical: {
        paddingVertical: DEFAUTL_SPACE
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})