import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { GREY, SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import Ficon from 'react-native-vector-icons/Feather'
import { styles } from './style';
const index = (props: { navigation: { push: Function, pop: Function } }) => {
    interface form {
        email: String,
        query: String
    }
    const [formData, setFormData] = useState<form>({
        email: '',
        query: ''
    });
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => props.navigation.pop()}>
                <Ficon name="arrow-left" size={ICON_SIZE} color={GREY} />
            </TouchableOpacity>
            <Image source={require('../../assets/images/needHelp.png')} />
            <View style={styles.form}>
                <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, marginBottom: 5 }}>Write to us </Text>
                <Text style={{ marginBottom: DEFAUTL_SPACE }}>please let me us know if you are unable to reset password, create account or if you are not gatting otp</Text>
                <InputBox placeholder="Enter email" type="email-address" style={styles.inputBox} onChangeMethod={(value) => setFormData({ email: value, query: formData.query })} />
                <InputBox placeholder="write your problem here" type="email-address" style={{ height: 120 }} onChangeMethod={(value) => setFormData({ query: value, email: formData.email })} />
            </View>
            <PrimaryButton button_style={styles.btnStyle} text_style={styles.txtStyle} onPress={() => {
                console.log("Need Help data ===>", formData);
                props.navigation.push('Login')
            }} title="Submit" />

        </View>
    );
}

export default index


