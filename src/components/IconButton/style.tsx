import { StyleSheet } from "react-native";
import { PRIMARY } from "../../assets/colors";
import { BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE } from "../../assets/sizes";
export const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER_RADIUS_CIRCULAR,
        backgroundColor: PRIMARY,
        padding: DEFAUTL_SPACE / 2
    }
})