import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style';
import Aicon from 'react-native-vector-icons/AntDesign';
import { ICON_SIZE } from '../../assets/sizes';
import Row from '../../components/Row';
import { globalstyles } from '../../globalcss';
interface props {
    title: String,
    text?: TextStyle,
    style?: ViewStyle,
    iconColor?: string,
    onClick: () => void,
    onBackPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={[styles.header, props.style]}>
            <Row>
                <TouchableOpacity onPress={props.onBackPress}>
                    <Aicon name="arrowleft" size={ICON_SIZE} style={globalstyles.margin__right} color={props.iconColor} />
                </TouchableOpacity>
                <Text style={[globalstyles.title, props.text]}>{props.title}</Text>
            </Row>
            {props.children}
        </View>
    )
}

export default index

