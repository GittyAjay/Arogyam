import React from 'react'
import { Text, View } from 'react-native'
import { YELLOW } from '../../assets/colors'
import { Dimension, INLINE_GAP } from '../../assets/sizes'
import Eicon from 'react-native-vector-icons/Entypo';
import { styles } from './style'
import Col from '../../components/Column';
import Row from '../../components/Row';
import { globalstyles } from '../../globalcss';
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
                <Col style={[globalstyles.margin__left, globalstyles.align_center]}>
                    <Text>{props.name}</Text>
                    <Text> {props.desc}</Text>
                </Col>
            </View>
            <Row style={[globalstyles.align_center]}>
                <Eicon name="star" color={YELLOW} />
                <Text> {props.star}</Text>
            </Row>
        </View>
    )
}

export default index

