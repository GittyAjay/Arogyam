import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style'
import Avtar from '../../components/Avtar';
import Eicon from 'react-native-vector-icons/Entypo';
import { BORDER_RADIUS, DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import { BLACK, GREY, PRIMARY, RED, WHITE } from '../../assets/colors';
import IconButton from '../../components/IconButton';
import Row from '../Row';
import Aicon from 'react-native-vector-icons/AntDesign';
interface props {
    style?: ViewStyle,
    color: string,
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avtar onPress={() => { }} />
                <View style={{ flexDirection: 'column', marginLeft: DEFAUTL_SPACE }}>
                    <Text style={[styles.heading, { marginBottom: DEFAUTL_SPACE / 2, color: props.color === undefined ? BLACK : props.color }]} >Ajay</Text>
                    <Row style={{ marginBottom: DEFAUTL_SPACE / 2 }}>
                        <Eicon name="briefcase" size={ICON_SIZE - 5} color={GREY} style={{ marginRight: DEFAUTL_SPACE }} />
                        <Text style={[styles.description, { color: props.color === undefined ? GREY : props.color }]}>5 Years</Text>
                    </Row>
                    <Row>
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                    </Row>
                </View>
            </Row>
            <IconButton onPress={() => { }} style={{ borderRadius: BORDER_RADIUS, backgroundColor: props.color === undefined ? PRIMARY : WHITE }}>
                <Eicon name="chat" size={ICON_SIZE - 5} color={props.color === undefined ? WHITE : BLACK} />
            </IconButton>
        </TouchableOpacity>
    )
}

export default index

