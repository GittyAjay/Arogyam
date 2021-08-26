import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import Row from '../Row'
import { styles } from './style'
import Aicon from 'react-native-vector-icons/AntDesign';
import { GREY, RED } from '../../assets/colors';
import { DEFAUTL_SPACE, FONT_LARGE, FONT_MID, ICON_SIZE } from '../../assets/sizes';
interface props {
    rating_count: number,
    date: string,
    name: string,
    rating_description: string,
    style: ViewStyle
}
const index: React.FC<props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Text style={{ paddingLeft: DEFAUTL_SPACE, fontSize: FONT_MID }}>{props.rating_count}.0</Text>
                </Row>
                <Text style={{ fontSize: FONT_LARGE, color: GREY }}>{props.date}</Text>
            </Row>
            <Text style={{ fontSize: FONT_LARGE }}>{props.name}</Text>
            <Text style={{ fontSize: FONT_MID, color: GREY }}>{props.rating_description}</Text>
        </View>
    )
}

export default index

