import { StyleSheet } from "react-native";
import { SHADE, WHITE } from "../../assets/colors";
import { BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE, FONT_MID, FONT_SMALL, INLINE_GAP } from "../../assets/sizes";
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        elevation: 1,
        padding: INLINE_GAP
    },
    awtar: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: SHADE,
        padding: DEFAUTL_SPACE,
        width: 60,
        height: 60
    },
    head: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },

})