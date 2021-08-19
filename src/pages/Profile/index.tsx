import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_RADIUS, BORDER_WIDTH, DEFAUTL_SPACE, FONT_MID, INLINE_GAP } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './style'
const index = (props: { navigation: { push: Function } }) => {
    interface form {
        email: String,
        firstName: String,
        lastName: String,
        age: String,
        mobileNo: String,
    }
    const [formData, setFormData] = useState<form>({
        email: '',
        firstName: '',
        lastName: '',
        age: '',
        mobileNo: '',
    });
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: FONT_MID, marginBottom: 5, alignSelf: 'center' }}>complete your profile</Text>
            <Image source={require('../../assets/images/user.png')} style={{ alignSelf: 'center' }} />
            <InputBox placeholder="Email id" type="email-address" style={styles.inputBox} onChangeMethod={(value) => setFormData({
                email: value,
                firstName: formData.firstName,
                lastName: formData.lastName,
                age: formData.age,
                mobileNo: formData.mobileNo,
            })} />
            <InputBox placeholder="First name" type="name-phone-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({
                email: formData.email,
                firstName: value,
                lastName: formData.lastName,
                age: formData.age,
                mobileNo: formData.mobileNo,
            })} />
            <InputBox placeholder="Last name" type="name-phone-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({
                email: formData.email,
                firstName: formData.firstName,
                lastName: value,
                age: formData.age,
                mobileNo: formData.mobileNo,
            })} />
            <InputBox placeholder="Age" type="decimal-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                age: value,
                mobileNo: formData.mobileNo,
            })} />
            <InputBox placeholder="Mobile number" type="number-pad" style={styles.inputBox} onChangeMethod={(value) => setFormData({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                age: formData.age,
                mobileNo: value,
            })} />
            <PrimaryButton button_style={styles.btnStyle} text_style={styles.txtStyle} onPress={() => {
                console.log("Profile data ===>", formData);
                props.navigation.push('Login')
            }} title="continue" />
        </View>
    );
}

export default index


