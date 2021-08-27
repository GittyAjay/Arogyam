import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { SECONDARY } from '../../assets/colors';
import { DEFAUTL_SPACE } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import Row from '../../components/Row';
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
                <Text style={[styles.heading, { color: SECONDARY, }]}>Later</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/signup.png')} />
            <View style={styles.form}>
                <Text style={styles.heading}>Sign up</Text>
                <Text style={[styles.description, { marginBottom: DEFAUTL_SPACE }]}>Please enter your mobile number to continue</Text>
                <InputBox placeholder="mobile number" type="number-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({ phone: value, email: formData?.email })} />
                <InputBox placeholder="Email id" type="email-address" style={styles.inputBox} onChangeMethod={(value) => setFormData({ phone: formData?.phone, email: value })} />
                <View style={styles.bottom__text}>
                    <Row style={{ paddingBottom: DEFAUTL_SPACE / 2 }}>
                        <Text style={styles.description}>Have an Account?</Text>
                        <TouchableOpacity style={{ paddingLeft: DEFAUTL_SPACE / 2 }} onPress={() => props.navigation.push('Login')}>
                            <Text style={[styles.description, { color: SECONDARY }]}>Login</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={{ paddingBottom: DEFAUTL_SPACE / 2 }}>
                        <Text style={styles.description}>By signing up, you agree to our term and</Text>
                        <TouchableOpacity style={{ paddingLeft: DEFAUTL_SPACE / 2 }} onPress={() => console.log("condition")
                        }>
                            <Text style={[styles.description, { color: SECONDARY }]}>condition</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </View>

            <PrimaryButton onPress={() => {
                console.log("sign up form data ===>", formData);
                props.navigation.push('Profile')
            }} title="continue" />
        </View>
    );
}

export default index


