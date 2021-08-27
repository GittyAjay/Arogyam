import React from 'react'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style';
import Aicon from 'react-native-vector-icons/AntDesign';
import { DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
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
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={props.onBackPress}>
                    <Aicon name="arrowleft" size={ICON_SIZE} style={{ marginRight: DEFAUTL_SPACE }} color={props.iconColor} />
                </TouchableOpacity>
                <Text style={[styles.title, props.text]}>{props.title}</Text>
            </View>
            {props.children}
        </View>
    )
}

export default index

