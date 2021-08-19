import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './style';

const index = (props: { navigation: { push: Function } }) => {
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
            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                <Text style={{ color: SECONDARY, fontWeight: 'bold' }}>Later</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/signup.png')} />
            <View style={styles.form}>
                <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, marginBottom: 5 }}>Sign up</Text>
                <Text style={{ marginBottom: DEFAUTL_SPACE }}>Please enter your mobile number to continue</Text>
                <InputBox placeholder="mobile number" type="number-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({ phone: value, email: formData?.email })} />
                <InputBox placeholder="Email id" type="email-address" style={styles.inputBox} onChangeMethod={(value) => setFormData({ phone: formData?.phone, email: value })} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', paddingBottom: DEFAUTL_SPACE / 2 }}>
                        <Text>Have an Account?</Text>
                        <TouchableOpacity style={{ paddingLeft: DEFAUTL_SPACE / 2 }} onPress={() => props.navigation.push('Login')}>
                            <Text style={{ color: SECONDARY }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', paddingBottom: DEFAUTL_SPACE / 2 }}>
                        <Text>By signing up, you agree to our term and</Text>
                        <TouchableOpacity style={{ paddingLeft: DEFAUTL_SPACE / 2 }} onPress={() => console.log("condition")
                        }>
                            <Text style={{ color: SECONDARY }}>condition</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <PrimaryButton button_style={styles.btnStyle} text_style={styles.txtStyle} onPress={() => {
                console.log("sign up form data ===>", formData);
                props.navigation.push('Profile')
            }} title="continue" />
        </View>
    );
}

export default index


