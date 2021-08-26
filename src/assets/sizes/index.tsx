import { useWindowDimensions } from 'react-native'

export const INLINE_GAP: number = 20;
export const FONT_ELARGE: number = 27;
export const FONT_FLARGE: number = 30;
export const FONT_GLARGE: number = 35;
export const FONT_LARGE: number = 23;
export const FONT_MID: number = 18;
export const FONT_SMALL: number = 14;
export const BUTTON_HEIGHT: number = 50;
export const DEFAUTL_SPACE: number = 10;
export const ICON_SIZE: number = 23;
export const ANIM_WIDTH: number = 300;
export const ANIM_HEIGHT: number = 250;
export const BORDER_WIDTH: number = 0.5;
export const BORDER_RADIUS: number = 5;
export const BORDER_RADIUS_CIRCULAR: number = 30;
export const LOGIN_VIEW_HEIGHT: number = 210;
export const TEXT_INPUT_HEIGHT: number = 6;
export const COMMON_BUTTON_HEIGHT: number = 15;
export const SMALL_BUTTON_HEIGHT: number = 10;
export const SMALL_DOT_SIZE: number = 6
export function Dimension() {
    const { width, height } = useWindowDimensions();
    return {
        WIDTH: width,
        HEIGHT: height
    }
}

