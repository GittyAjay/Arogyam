import { StyleSheet } from "react-native";
import { SHADE } from "../../assets/colors";
import { BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE, INLINE_GAP } from "../../assets/sizes";
export const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: SHADE,
        padding: DEFAUTL_SPACE,
        width: 60,
        height: 60
    }
})