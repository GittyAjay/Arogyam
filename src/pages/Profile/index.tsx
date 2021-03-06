import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { FONT_MID, INLINE_GAP } from '../../assets/sizes';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './style'
import { Formik } from 'formik';
import { globalstyles } from '../../globalcss';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { sign_in, save_user } from '../../store/actions/action';
const index = (props: { navigation: { push: Function }, save_user: Function }) => {
    interface form {
        // email: String,
        firstName: String,
        lastName: String,
        age: String,
        mobileNo: String,
    }
    const [formData, setFormData] = useState<form>({
        // email: '',
        firstName: '',
        lastName: '',
        age: '',
        mobileNo: '',
    });
    const user = useSelector(state => state.auth.user);
    async function handleSubmit(value: form) {
        await props.save_user({ ...value, ...user })
        props.navigation.push("Home");
    }
    return (
        <Formik
            initialValues={formData}
            onSubmit={values => handleSubmit(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Text style={[globalstyles.heading, globalstyles.align_center]}>complete your profile</Text>
                    <Image source={require('../../assets/images/user.png')} style={globalstyles.align_center} />
                    {/* <InputBox placeholder="Email id"  type="email-address" style={globalstyles.inputBox} onChangeMethod={handleChange("email")} /> */}
                    <InputBox placeholder="First name" type="name-phone-pad" style={globalstyles.inputBox} onChangeMethod={handleChange("firstName")} />
                    <InputBox placeholder="Last name" type="name-phone-pad" style={globalstyles.inputBox} onChangeMethod={handleChange("lastName")} />
                    <InputBox placeholder="Age" type="decimal-pad" style={globalstyles.inputBox} onChangeMethod={handleChange("age")} />
                    <InputBox placeholder="Mobile number" type="number-pad" style={globalstyles.inputBox} onChangeMethod={handleChange("mobileNo")} />
                    <PrimaryButton onPress={handleSubmit} title="continue" text_style={globalstyles.button__text} />
                </View>
            )}
        </Formik>

    );
}
const mapDispatchToProps = {
    sign_in,
    save_user
}

export default connect(null, mapDispatchToProps)(index)


