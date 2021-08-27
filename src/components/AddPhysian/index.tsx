import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import { DEFAUTL_SPACE } from '../../assets/sizes';
import AvtarCard from '../../components/AvtarCard'
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { }} />
        </View>
    )
}

export default index

