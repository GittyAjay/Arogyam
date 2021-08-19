import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, PermissionsAndroid, TextInput } from 'react-native'
import { GREY, SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './style';
const index = (props: { navigation: { push: Function, pop: Function } }) => {
    interface form {
        phone: String,
        email: String
    }
    const [formData, setFormData] = useState<form>({
        phone: '',
        email: ''
    });
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, marginBottom: INLINE_GAP }}>Enter otp</Text>
                <View style={{ flexDirection: 'row', paddingVertical: DEFAUTL_SPACE }}>
                    <TextInput placeholder="1" style={styles.otp} textAlign={'center'} />
                    <TextInput placeholder="2" style={styles.otp} textAlign={'center'} />
                    <TextInput placeholder="3" style={styles.otp} textAlign={'center'} />
                    <TextInput placeholder="4" style={styles.otp} textAlign={'center'} />
                    <TextInput placeholder="5" style={styles.otp} textAlign={'center'} />
                    <TextInput placeholder="6" style={styles.otp} textAlign={'center'} />
                </View>
                <Text style={{ marginBottom: DEFAUTL_SPACE }}>otp has been sent on your phone number .</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
                <PrimaryButton button_style={styles.btnStyle} text_style={styles.txtStyle} onPress={() => {
                    console.log("sign up form data ===>", formData);
                    props.navigation.push('FinalAuth')
                }} title="Continue" />
                <View style={{ flexDirection: 'row', paddingBottom: DEFAUTL_SPACE / 2 }}>
                    <Text>Don't Receive Code?</Text>
                    <TouchableOpacity style={{ paddingLeft: DEFAUTL_SPACE / 2 }} onPress={() => props.navigation.push('Signup')}>
                        <Text style={{ color: SECONDARY }}>Resend code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default index


