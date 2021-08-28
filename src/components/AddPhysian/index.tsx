import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import { DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import AvtarCard from '../../components/AvtarCard'
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../../assets/colors';
import Ioicon from 'react-native-vector-icons/Ionicons';
interface props {
    onClick: () => void
}

const index: React.FC<props> = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay" >
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay">
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay">
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2 }} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay">
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
        </View>
    )
}

export default index

