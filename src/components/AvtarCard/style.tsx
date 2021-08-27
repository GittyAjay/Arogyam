import React from 'react'
import { StyleSheet } from 'react-native'
import { WHITE } from '../../assets/colors'
import { DEFAUTL_SPACE, FONT_MID, FONT_SMALL } from '../../assets/sizes'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: DEFAUTL_SPACE,
        elevation: 1,
        backgroundColor: WHITE,
    },
    heading: {
        fontSize: FONT_MID,
        fontFamily: 'Nunito-Bold'
    },
    description: {
        fontSize: FONT_SMALL,
        fontFamily: 'Nunito-Regular'
    }
})
