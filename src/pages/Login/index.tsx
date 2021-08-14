import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { GREY, SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import Ficon from 'react-native-vector-icons/Feather'

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
            <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'stretch' }}>
                <Ficon name="arrow-left" size={ICON_SIZE} color={GREY} />
                <Text style={{ color: SECONDARY, fontWeight: 'bold' }}>NEED HELP</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/login.png')} />
            <View style={styles.form}>
                <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, marginBottom: 5 }}>Login</Text>
                <Text style={{ marginBottom: DEFAUTL_SPACE }}>Get access to your medicine order ,doctor consult</Text>
                <InputBox placeholder="mobile number" type="number-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({ phone: value, email: formData?.email })} />
            </View>
            <PrimaryButton button_style={styles.btnStyle} text_style={styles.txtStyle} onPress={() => {
                console.log("sign up form data ===>", formData);
                props.navigation.push('Login')
            }} title="SEND OTP" />
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', paddingBottom: DEFAUTL_SPACE / 2 }}>
                    <Text>Have an Account?</Text>
                    <TouchableOpacity style={{ paddingLeft: DEFAUTL_SPACE / 2 }} onPress={() => props.navigation.push('Signup')}>
                        <Text style={{ color: SECONDARY }}>Sign up</Text>
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
    );
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: INLINE_GAP,
    },
    form: {
        alignSelf: 'stretch',
    },
    inputBox: {
        marginBottom: DEFAUTL_SPACE,
    },
    btnStyle: {

    },
    txtStyle: {

    }
})
