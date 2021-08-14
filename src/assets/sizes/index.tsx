import { useWindowDimensions } from 'react-native'
export const FONT_MID = 24
export function Numericals() {
    const { width, height } = useWindowDimensions();
    return {
        WIDTH: width,
        HEIGHT: height,
        INLINE_GAP: 20,
        FONT_ELARGE: 27,
        FONT_FLARGE: 30,
        FONT_GLARGE: 35,
        FONT_LARGE: 23,
        FONT_MID: 18,
        FONT_SMALL: 13,
        BUTTON_HEIGHT: 50,
        DEFAUTL_SPACE: 10,
        ICON_SIZE: 23,
        ANIM_WIDTH: 300,
        ANIM_HEIGHT: 250,
        BORDER_WIDTH: 1,
        BORDER_RADIUS: 10,
        BORDER_RADIUS_CIRCULAR: 30,
        LOGIN_VIEW_HEIGHT: 210,
        TEXT_INPUT_HEIGHT: 6,
        COMMON_BUTTON_HEIGHT: 15,
        SMALL_BUTTON_HEIGHT: 10,
        SMALL_DOT_SIZE: 6
    }
}

