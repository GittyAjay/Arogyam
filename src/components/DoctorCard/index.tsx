import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GREY, BLUE_SHADE, YELLOW } from '../../assets/colors'
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, Dimension, INLINE_GAP } from '../../assets/sizes'
import Eicon from 'react-native-vector-icons/Entypo';
import { styles } from './style'
interface props {
    name: string,
    desc: string,
    star: number,
    style: object
}
const index: React.FC<props> = (props) => {
    const { WIDTH } = Dimension();
    return (
        <View style={[styles.card, { width: WIDTH - 2 * INLINE_GAP }, props.style]}>
            <View style={{ flexDirection: 'row' }}>
                {props.children}
                <View style={{ flexDirection: 'column', marginLeft: DEFAUTL_SPACE / 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text>{props.name}</Text>
                    <Text> {props.desc}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Eicon name="star" color={YELLOW} />
                <Text> {props.star}</Text>
            </View>
        </View>
    )
}

export default index

