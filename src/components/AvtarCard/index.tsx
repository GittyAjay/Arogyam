import React from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style'
import Avtar from '../../components/Avtar';
import Eicon from 'react-native-vector-icons/Entypo';
import { BORDER_RADIUS, DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import { GREY, RED, WHITE } from '../../assets/colors';
import IconButton from '../../components/IconButton';
import Row from '../Row';
import Aicon from 'react-native-vector-icons/AntDesign';
interface props {
    style?: ViewStyle,
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avtar onPress={() => { }} />
                <View style={{ flexDirection: 'column', marginLeft: DEFAUTL_SPACE }}>
                    <Text style={[styles.heading, { marginBottom: DEFAUTL_SPACE / 2 }]} >Ajay</Text>
                    <Row style={{ marginBottom: DEFAUTL_SPACE / 2 }}>
                        <Eicon name="briefcase" size={ICON_SIZE - 5} color={GREY} style={{ marginRight: DEFAUTL_SPACE }} />
                        <Text style={[styles.description, { color: GREY }]}>5 Years</Text>
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
            <IconButton onPress={() => { }} style={{ borderRadius: BORDER_RADIUS }}>
                <Eicon name="chat" size={ICON_SIZE - 5} color={WHITE} />
            </IconButton>
        </TouchableOpacity>
    )
}

export default index

