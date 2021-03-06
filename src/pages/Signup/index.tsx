import React from 'react'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { BLACK, SECONDARY } from '../../assets/colors';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import Row from '../../components/Row';
import { globalstyles } from '../../globalcss';
import { styles } from './style';
import auth, { firebase } from '@react-native-firebase/auth';
import AwesomeLoading from 'react-native-awesome-loading';
import { connect } from 'react-redux';
import { sign_in, save_user } from '../../store/actions/action';

interface IState {
    mobile: string,
    email: string,
    loading: boolean,
}
interface IProps {
    navigation: { setOptions: Function, push: Function, pop: Function, navigate: Function }, sign_in: Function, save_user: Function
}
function Auth(props: IProps) {

    const [rec, setRecords] = React.useState<IState>({
        mobile: '',
        email: '',
        loading: false,
    })

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setRecords({ mobile: rec.mobile, loading: false, email: rec.email });
                props.navigation.push("Profile", rec);
            }
            else {

            }
        });
    }, [])
    const signInWithPhoneNumber = async () => {
        const { email, mobile } = rec;
        if (rec.mobile.length === 10) {
            setRecords({ mobile: rec.mobile, loading: true, email: rec.email })
            const confirmation = await auth().signInWithPhoneNumber(`+91${rec.mobile}`)
            console.log(confirmation);
            await props.sign_in(confirmation);
            await props.save_user({ email, mobile });
            props.navigation.push("Otp", { mobile: rec.mobile });
        }
        else {
            Alert.alert("check your mobile number")
        }
    }
    return (
        <>
            <AwesomeLoading indicatorId={8} size={50} isActive={rec.loading} text="authenticating.." />
            <View style={styles.container}>
                <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                    <Text style={[globalstyles.description, { color: SECONDARY, }]}>Later</Text>
                </TouchableOpacity>
                <Image source={require('../../assets/images/signup.png')} />
                <View style={styles.signup__form}>
                    <Text style={[globalstyles.heading, { color: BLACK }]}>Sign up</Text>
                    <Text style={[globalstyles.description, globalstyles.margin__Bottom]}>Please enter your mobile number to continue</Text>
                    <InputBox placeholder="mobile number" type="number-pad" style={globalstyles.inputBox} onChangeMethod={(value) => setRecords({ mobile: value, loading: false, email: rec.email })} />
                    <InputBox placeholder="Email id" type="email-address" style={globalstyles.inputBox} onChangeMethod={(value) => setRecords({ mobile: rec.mobile, loading: false, email: value })} />
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
                <PrimaryButton onPress={signInWithPhoneNumber} title="continue" text_style={globalstyles.button__text} />
            </View>
        </>
    );
}
const mapDispatchToProps = {
    sign_in,
    save_user
}
export default connect(null, mapDispatchToProps)(Auth);