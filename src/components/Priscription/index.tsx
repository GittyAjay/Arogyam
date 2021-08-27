import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BLACK, PRIMARY, WHITE } from '../../assets/colors'
import { BORDER_RADIUS, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes'
import Ioicon from 'react-native-vector-icons/Ionicons'
import { styles } from './style';
interface props {
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.priscription}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ paddingBottom: DEFAUTL_SPACE, fontSize: FONT_MID, color: BLACK }}>Quick uplode your priscription</Text>
                <Text style={{ width: 250 }}>Pariatur in proident aliquip et magna. Elit eu magna magna reprehende </Text>
                <TouchableOpacity style={{ padding: DEFAUTL_SPACE, backgroundColor: PRIMARY, width: 100, borderRadius: BORDER_RADIUS, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: INLINE_GAP }} onPress={props.onPress}>
                    <Ioicon name="md-camera" size={ICON_SIZE} color={WHITE} style={{ paddingRight: DEFAUTL_SPACE / 2 }} />
                    <Text style={{ color: WHITE }}>UPLOAD</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Ioicon name="ios-document-attach" size={ICON_SIZE + 20} />
            </TouchableOpacity>
        </View>
    )
}

export default index

