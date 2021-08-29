import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import { ICON_SIZE } from '../../assets/sizes';
import AvtarCard from '../../components/AvtarCard'
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../../assets/colors';
import Ioicon from 'react-native-vector-icons/Ionicons';
import { globalstyles } from '../../globalcss';
interface props {
    onClick: () => void
}

const index: React.FC<props> = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AvtarCard style={globalstyles.margin__top} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay" >
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
            <AvtarCard style={globalstyles.margin__top} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay">
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
            <AvtarCard style={globalstyles.margin__top} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay">
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
            <AvtarCard style={globalstyles.margin__top} onPress={() => { navigation.navigate('DoctorProfile') }} textcolor={PRIMARY} rating={true} experience={5} name="Ajay">
                <Ioicon name="chatbubbles-outline" size={ICON_SIZE} color={WHITE} />
            </AvtarCard>
        </View>
    )
}

export default index

