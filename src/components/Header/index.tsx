import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style';
import Aicon from 'react-native-vector-icons/AntDesign';
import { DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import { BLACK } from '../../assets/colors';
interface props {
    title: String,
    onClick: () => void,
    onBackPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={props.onBackPress}>
                    <Aicon name="arrowleft" size={ICON_SIZE} style={{ marginRight: DEFAUTL_SPACE }} color={BLACK} />
                </TouchableOpacity>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {props.children}
        </View>
    )
}

export default index

