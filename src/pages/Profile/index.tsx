import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { FONT_MID, INLINE_GAP } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './style'
import { Formik } from 'formik';
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
    function handleSubmit(value: form) {
        console.log(value);
        props.navigation.push("Otp");
    }
    return (
        <Formik
            initialValues={formData}
            onSubmit={values => handleSubmit(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Text style={styles.heading}>complete your profile</Text>
                    <Image source={require('../../assets/images/user.png')} style={{ alignSelf: 'center' }} />
                    <InputBox placeholder="Email id" type="email-address" style={styles.inputBox} onChangeMethod={handleChange("email")} />
                    <InputBox placeholder="First name" type="name-phone-pad" style={styles.inputBox} onChangeMethod={handleChange("firstName")} />
                    <InputBox placeholder="Last name" type="name-phone-pad" style={styles.inputBox} onChangeMethod={handleChange("lastName")} />
                    <InputBox placeholder="Age" type="decimal-pad" style={styles.inputBox} onChangeMethod={handleChange("age")} />
                    <InputBox placeholder="Mobile number" type="number-pad" style={styles.inputBox} onChangeMethod={handleChange("mobileNo")} />
                    <PrimaryButton onPress={handleSubmit} title="continue" />
                </View>
            )}
        </Formik>

    );
}

export default index


