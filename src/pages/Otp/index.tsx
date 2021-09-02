import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { GREY, PRIMARY, SECONDARY, WHITE } from '../../assets/colors';
import { BORDER_WIDTH, DEFAUTL_SPACE, INLINE_GAP } from '../../assets/sizes';
import PrimaryButton from '../../components/PrimaryButton';
import Row from '../../components/Row';
import { globalstyles } from '../../globalcss';
import { styles } from './style';
import OtpInputs from 'react-native-otp-inputs';
import { useSelector } from 'react-redux'
import AlertMessage from '../../components/AlertMessage'
import auth, { firebase } from '@react-native-firebase/auth';
import AwesomeLoading from 'react-native-awesome-loading';


const index = (props: { navigation: { push: Function, pop: Function }, route: { params: { confirm: Function, mobile: string } } }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const ref = React.useRef(null);
    const confirm = useSelector(state => state.auth.authConfirmation)
    console.log(props.route.params.mobile);
    async function confirmCode() {
        if (confirm != null) {
            try {
                await confirm.confirm(code);
                props.navigation.push("Profile");
            } catch (error) {
                setError(true);
                setErrorMsg("Invalid code");
                ref.current.open();
            }
        }
    }
    const resendOtp = async () => {
        setLoading(true)
        await auth().signInWithPhoneNumber(`+91${props.route.params.mobile}`).then(() => {
            setLoading(false);
        })
    }
    function handleOtpChange(code: any) {
        setCode(code)
    }
    return (
        <>
            <AwesomeLoading indicatorId={8} size={50} isActive={loading} text="authenticating.." />
            <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                <View style={styles.otp__form}>
                    <Text style={[globalstyles.heading, { marginBottom: INLINE_GAP }]}>Enter otp</Text>
                    <OtpInputs style={{ flexDirection: 'row', margin: DEFAUTL_SPACE }} placeholder=".." inputStyles={{ backgroundColor: WHITE, color: GREY, marginRight: DEFAUTL_SPACE, borderWidth: BORDER_WIDTH, borderColor: PRIMARY, justifyContent: 'center', alignItems: 'center', padding: 10 }} keyboardType="phone-pad" numberOfInputs={6} autofillFromClipboard={true} handleChange={handleOtpChange} />
                    <Text style={[globalstyles.description, globalstyles.margin__Bottom]}>otp has been sent on your phone number .</Text>
                </View>
                <View style={styles.bottom}>
                    <PrimaryButton onPress={confirmCode} title="Continue" />
                    <Row style={globalstyles.margin__Bottom}>
                        <Text style={globalstyles.description}>Don't Receive Code?</Text>
                        <TouchableOpacity style={globalstyles.padding_left} onPress={resendOtp}>
                            <Text style={[globalstyles.description, { color: SECONDARY }]}>Resend code</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
                <AlertMessage modelRef={ref} >
                    <Text>{errorMsg}</Text>
                </AlertMessage>
            </View>
        </>
    );
}

export default index


