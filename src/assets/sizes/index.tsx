import { useWindowDimensions } from 'react-native'
export const INLINE_GAP = 20;
export const FONT_ELARGE = 27;
export const FONT_FLARGE = 30;
export const FONT_GLARGE = 35;
export const FONT_LARGE = 23;
export const FONT_MID = 18;
export const FONT_SMALL = 13;
export const BUTTON_HEIGHT = 50;
export const DEFAUTL_SPACE = 10;
export const ICON_SIZE = 23;
export const ANIM_WIDTH = 300;
export const ANIM_HEIGHT = 250;
export const BORDER_WIDTH = 1;
export const BORDER_RADIUS = 10;
export const BORDER_RADIUS_CIRCULAR = 30;
export const LOGIN_VIEW_HEIGHT = 210;
export const TEXT_INPUT_HEIGHT = 6;
export const COMMON_BUTTON_HEIGHT = 15;
export const SMALL_BUTTON_HEIGHT = 10;
export const SMALL_DOT_SIZE = 6
export function Dimension() {
    const { width, height } = useWindowDimensions();
    return {
        WIDTH: width,
        HEIGHT: height
    }
}

