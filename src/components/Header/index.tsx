import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style';
import Aicon from 'react-native-vector-icons/AntDesign';
import { DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
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
                    <Aicon name="arrowleft" size={ICON_SIZE} style={{ marginRight: DEFAUTL_SPACE }} />
                </TouchableOpacity>
                <Text>{props.title}</Text>
            </View>
            {props.children}
        </View>
    )
}

export default index

