import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { GREY, SECONDARY } from '../../assets/colors';
import { DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes';
import PrimaryButton from '../../components/PrimaryButton';
import Row from '../../components/Row';
import { globalstyles } from '../../globalcss';
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
    function handleSubmit() {
        console.log("sign up form data ===>", formData);
        props.navigation.push('FinalAuth')
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={[globalstyles.heading, { marginBottom: INLINE_GAP }]}>Enter otp</Text>
                <Row style={globalstyles.padding__vertical}>
                    <TextInput placeholder="1" placeholderTextColor={GREY} style={styles.otp__box} textAlign={'center'} />
                    <TextInput placeholder="2" placeholderTextColor={GREY} style={styles.otp__box} textAlign={'center'} />
                    <TextInput placeholder="3" placeholderTextColor={GREY} style={styles.otp__box} textAlign={'center'} />
                    <TextInput placeholder="4" placeholderTextColor={GREY} style={styles.otp__box} textAlign={'center'} />
                    <TextInput placeholder="5" placeholderTextColor={GREY} style={styles.otp__box} textAlign={'center'} />
                    <TextInput placeholder="6" placeholderTextColor={GREY} style={styles.otp__box} textAlign={'center'} />
                </Row>
                <Text style={[globalstyles.description, globalstyles.margin__Bottom]}>otp has been sent on your phone number .</Text>
            </View>
            <View style={styles.bottom}>
                <PrimaryButton onPress={handleSubmit} title="Continue" />
                <Row style={globalstyles.margin__Bottom}>
                    <Text style={globalstyles.description}>Don't Receive Code?</Text>
                    <TouchableOpacity style={globalstyles.padding_left} onPress={() => props.navigation.push('Signup')}>
                        <Text style={[globalstyles.description, { color: SECONDARY }]}>Resend code</Text>
                    </TouchableOpacity>
                </Row>
            </View>
        </View>
    );
}

export default index


