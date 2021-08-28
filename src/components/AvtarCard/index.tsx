import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style'
import Avtar from '../../components/Avtar';
import Eicon from 'react-native-vector-icons/Entypo';
import Ioicon from 'react-native-vector-icons/Ionicons';
import { BORDER_RADIUS, DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import { BLACK, GREY, PRIMARY, RED, WHITE } from '../../assets/colors';
import IconButton from '../../components/IconButton';
import Row from '../Row';
import Aicon from 'react-native-vector-icons/AntDesign';
interface props {
    name?: String,
    type?: String,
    date?: String,
    time?: String,
    desc?: String,
    rating?: boolean,
    experience?: number,
    style?: ViewStyle,
    textcolor: string,
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avtar onPress={() => { }} />
                <View style={{ flexDirection: 'column', marginLeft: DEFAUTL_SPACE }}>
                    <Row>
                        <Text style={[styles.heading, { marginBottom: DEFAUTL_SPACE, color: props.textcolor === undefined ? BLACK : props.textcolor, marginRight: DEFAUTL_SPACE / 2 }]} >Ajay</Text>
                        {props.type && <Text style={[styles.heading, { marginBottom: DEFAUTL_SPACE / 2, color: props.textcolor === undefined ? BLACK : props.textcolor }]} >| {props.type}</Text>}
                    </Row>
                    {props.experience && <Row style={{ marginBottom: DEFAUTL_SPACE }}>
                        <Eicon name="briefcase" size={ICON_SIZE - 5} color={GREY} style={{ marginRight: DEFAUTL_SPACE }} />
                        <Text style={[styles.description, { color: props.textcolor === undefined ? GREY : props.textcolor }]}>{props.experience} Years</Text>
                    </Row>}
                    {props.date && props.time && props.style && <Row style={{ marginBottom: DEFAUTL_SPACE, justifyContent: 'center', alignItems: 'center' }}>
                        <Row style={{ marginRight: DEFAUTL_SPACE, justifyContent: 'center', alignItems: 'center' }}>
                            <Aicon name="calendar" size={ICON_SIZE} style={{ color: props.textcolor === undefined ? BLACK : props.textcolor, paddingRight: DEFAUTL_SPACE / 2 }} />
                            <Text style={[styles.description, { color: props.textcolor === undefined ? GREY : props.textcolor }]}>{props.date}</Text>
                        </Row>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ioicon name="time-outline" size={ICON_SIZE} style={{ color: props.textcolor === undefined ? BLACK : props.textcolor, paddingRight: DEFAUTL_SPACE / 2 }} />
                            <Text style={[styles.description, { color: props.textcolor === undefined ? GREY : props.textcolor }]}>{props.time}</Text>
                        </Row>
                    </Row>}
                    {props.desc && <Text style={[styles.description, { color: props.textcolor === undefined ? GREY : props.textcolor }]}>{props.desc}</Text>}
                    {props.rating && <Row>
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                        <Aicon name="star" size={ICON_SIZE - 5} color={RED} />
                    </Row>}
                </View>
            </Row>
            {props.children && <IconButton onPress={() => { }} style={{ borderRadius: BORDER_RADIUS, backgroundColor: props.textcolor === undefined ? PRIMARY : WHITE }}>
                {props.children}
            </IconButton>}
        </TouchableOpacity>
    )
}

export default index

