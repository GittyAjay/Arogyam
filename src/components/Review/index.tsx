import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import Row from '../Row'
import { styles } from './style'
import Aicon from 'react-native-vector-icons/AntDesign';
import { GREY, RED } from '../../assets/colors';
import { ICON_SIZE } from '../../assets/sizes';
import HorizentalContainer from '../../components/HeadingContainer';
import { globalstyles } from '../../globalcss';
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
            <HorizentalContainer style={[globalstyles.padding__Bottom]}>
                <Row style={{ alignItems: 'center' }}>
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                    <Text style={[globalstyles.description, globalstyles.padding_left]}>{props.rating_count}.0</Text>
                </Row>
                <Text style={[globalstyles.description, globalstyles.padding__Bottom, { color: GREY }]}>{props.date}</Text>
            </HorizentalContainer>
            <Text style={[globalstyles.description, globalstyles.padding__Bottom]}>{props.name}</Text>
            <Text style={[globalstyles.description, { color: GREY }]}>{props.rating_description}</Text>
        </View>
    )
}

export default index

