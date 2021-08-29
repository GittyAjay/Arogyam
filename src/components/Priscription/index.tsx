import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { WHITE } from '../../assets/colors'
import { ICON_SIZE } from '../../assets/sizes'
import Ioicon from 'react-native-vector-icons/Ionicons'
import { styles } from './style';
import { globalstyles } from '../../globalcss'
interface props {
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.priscription}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={[globalstyles.padding__Bottom, globalstyles.title__bold]}>Quick uplode your priscription</Text>
                <Text style={[globalstyles.description, { width: 250 }]}>Pariatur in proident aliquip et magna. Elit eu magna magna reprehende </Text>
                <TouchableOpacity style={styles.iconButton} onPress={props.onPress}>
                    <Ioicon name="md-camera" size={ICON_SIZE} color={WHITE} />
                    <Text style={[globalstyles.description, globalstyles.padding_left, { color: WHITE }]}>UPLOAD</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Ioicon name="ios-document-attach" size={ICON_SIZE + 20} />
            </TouchableOpacity>
        </View>
    )
}

export default index

