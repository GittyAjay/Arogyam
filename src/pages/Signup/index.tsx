import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { BLACK, SECONDARY, WHITE } from '../../assets/colors';
import { DEFAUTL_SPACE } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import Row from '../../components/Row';
import { globalstyles } from '../../globalcss';
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
                <Text style={[globalstyles.description, { color: SECONDARY, }]}>Later</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/signup.png')} />
            <View style={styles.form}>
                <Text style={[globalstyles.heading, { color: BLACK }]}>Sign up</Text>
                <Text style={[globalstyles.description, globalstyles.margin__Bottom]}>Please enter your mobile number to continue</Text>
                <InputBox placeholder="mobile number" type="number-pad" style={globalstyles.inputBox} onChangeMethod={(value) => setFormData({ phone: value, email: formData?.email })} />
                <InputBox placeholder="Email id" type="email-address" style={globalstyles.inputBox} onChangeMethod={(value) => setFormData({ phone: formData?.phone, email: value })} />
                <View style={styles.bottom__text}>
                    <Row style={globalstyles.padding__Bottom}>
                        <Text style={[globalstyles.description]}>Have an Account?</Text>
                        <TouchableOpacity style={globalstyles.padding_left} onPress={() => props.navigation.push('Login')}>
                            <Text style={[globalstyles.description, { color: SECONDARY }]}>Login</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={globalstyles.padding__Bottom}>
                        <Text style={[globalstyles.description]}>By signing up, you agree to our term and</Text>
                        <TouchableOpacity style={globalstyles.padding_left} onPress={() => console.log("condition")
                        }>
                            <Text style={[globalstyles.description, { color: SECONDARY }]}>condition</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </View>

            <PrimaryButton onPress={() => {
                console.log("sign up form data ===>", formData);
                props.navigation.push('Profile')
            }} title="continue" text_style={globalstyles.button__text} />
        </View>
    );
}

export default index


