import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import { DEFAUTL_SPACE } from '../../assets/sizes';
import AvtarCard from '../../components/AvtarCard'
import { useNavigation } from '@react-navigation/native';
interface props {
    onClick: () => void
}

const index: React.FC<props> = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} />
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} />
        </View>
    )
}

export default index

