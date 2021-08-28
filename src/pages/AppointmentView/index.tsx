import React from 'react'
import { styles } from './styles'
import { PRIMARY, WHITE } from '../../assets/colors';
import Col from '../../components/Column';
import Header from '../../components/Header';
import { DEFAUTL_SPACE, FONT_MID, ICON_SIZE } from '../../assets/sizes';
import AppointmentCard from '../../components/AvtarCard';
import { appoitments } from '../../store/reducers/projectReducer';
import { FlatList } from 'react-native-gesture-handler';
import Faicon5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from 'react-native';
import AvtarSimple from '../../components/AvtarSimpleCard';
const index = (props: { navigation: { push: Function } }) => {
    return (
        <>
            <View>
                <View style={[styles.doctors, styles.padding]}>
                    <View style={[styles.padding, styles.align_center, styles.button__border, { backgroundColor: PRIMARY }]}>
                        <Text style={styles.header_txt}>Your Doctors</Text>
                    </View>
                    <AvtarSimple onPress={() => { }} />
                </View>
                <View style={[styles.appointment, styles.padding, styles.margin__top]}>
                    <View style={[styles.padding, styles.align_center, styles.button__border, { backgroundColor: PRIMARY }]}>
                        <Text style={styles.header_txt}>Your Appointment</Text>
                    </View>
                    <AppointmentCard textcolor={PRIMARY} onPress={() => { }} style={{ marginBottom: DEFAUTL_SPACE / 2 }} date="10/11/2021" desc="must" name="Suraj" time="12:10" type="Sexiology" />
                </View>
            </View>
        </>
    )
}

export default index

