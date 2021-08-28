import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { GREY, PRIMARY, WHITE } from '../../assets/colors';
import Col from '../../components/Column';
import Header from '../../components/Header';
import { DEFAUTL_SPACE, FONT_MID, ICON_SIZE } from '../../assets/sizes';
import AppointmentCard from '../../components/AvtarCard';
import Eicon from 'react-native-vector-icons/Entypo';
import { apointments_type, appoitments } from '../../store/reducers/projectReducer';
import { FlatList } from 'react-native-gesture-handler';
import Faicon5 from 'react-native-vector-icons/FontAwesome5';
const index = (props: { navigation: { push: Function } }) => {
    function render(values: any) {
        return (
            <Col>
                <AppointmentCard textcolor={PRIMARY} onPress={() => { }} style={{ marginBottom: DEFAUTL_SPACE / 2 }} {...values.item} >
                    <Faicon5 name="edit" size={ICON_SIZE - 5} color={WHITE} />
                </AppointmentCard>
            </Col>
        )
    }
    return (
        <>
            <Header title="Appointment History" onBackPress={() => { }} onClick={() => { }} style={styles.header_bck} text={styles.header_txt} iconColor={WHITE} />
            <FlatList renderItem={render} data={appoitments} keyExtractor={(value, id) => id.toString()} />
        </>
    )
}

export default index

