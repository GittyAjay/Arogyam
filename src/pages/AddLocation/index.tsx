import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Header from '../../components/Header';
import Aicon from 'react-native-vector-icons/AntDesign'
import { DEFAUTL_SPACE, FONT_LARGE, ICON_SIZE } from '../../assets/sizes';
import Mcicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Micon from 'react-native-vector-icons/MaterialIcons';
import BorderCard from '../../components/BorderCard';
import Row from '../../components/Row';
import RadioButton from '../../components/RadioButton';
import PrimaryButton from '../../components/PrimaryButton';
import ModeForm from '../../components/ModelForm';
import InputBox from '../../components/InputBox';
import { Payment } from '../../components/Payment'
import { Alert, Image } from 'react-native';
const index = (props: { navigation: { push: Function, pop: Function } }) => {
    const [isActive, setActive] = React.useState(false);
    const modelFormRef = React.useRef();
    return (
        <>
            <Header onBackPress={() => props.navigation.pop()} onClick={() => { }} title="Select Address" >
                <Aicon name="search1" size={ICON_SIZE} />
            </Header>
            <ScrollView>
                <View style={styles.container}>
                    <BorderCard style={{ marginBottom: DEFAUTL_SPACE }} onPress={() => { modelFormRef.current.open() }} isDisable={false}>
                        <Text>Add new</Text>
                    </BorderCard>
                    <Row style={{ paddingBottom: DEFAUTL_SPACE, alignItems: 'center' }}>
                        <Mcicon name="truck-fast-outline" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                        <Text>Deliver to</Text>
                    </Row>
                    <BorderCard style={{ marginBottom: DEFAUTL_SPACE }} onPress={() => { }} isDisable={true}>
                        <Row style={{ justifyContent: 'space-between', alignItems: 'stretch', marginBottom: DEFAUTL_SPACE / 2 }}>
                            <Row style={{ marginBottom: DEFAUTL_SPACE, alignItems: 'center', }}>
                                <Mcicon name="home-outline" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                                <Text>HOME</Text>
                            </Row>
                            <RadioButton isActive={isActive} onPress={() => { setActive(value => !value) }} />
                        </Row>
                        <Text style={{ marginBottom: DEFAUTL_SPACE / 2 }}>User Name</Text>
                        <Text style={{ marginBottom: DEFAUTL_SPACE / 2 }}>Address</Text>
                        <Text style={{ marginBottom: DEFAUTL_SPACE / 2 }}>City</Text>
                        <Text style={{ marginBottom: DEFAUTL_SPACE / 2 }}>Pin Code</Text>
                        <Text style={{ marginBottom: DEFAUTL_SPACE / 2 }}>Mobile no</Text>
                        <Row style={{ justifyContent: 'space-between', alignItems: 'stretch', marginVertical: DEFAUTL_SPACE }}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE, alignItems: 'center' }}>
                                <Micon name="delete" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                                <Text>REMOVE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: DEFAUTL_SPACE, alignItems: 'center' }}>
                                <Aicon name="edit" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                                <Text>EDIT</Text>
                            </TouchableOpacity>
                        </Row>

                        <Row style={{ paddingBottom: DEFAUTL_SPACE, alignItems: 'center' }}>
                            <Mcicon name="truck-fast-outline" size={ICON_SIZE} style={{ paddingRight: DEFAUTL_SPACE }} />
                            <Text>Deliver by 23 jul-25 jul</Text>
                        </Row>
                    </BorderCard>
                </View>
            </ScrollView>
            {/* Form */}
            <ModeForm modelRef={modelFormRef} style={{}}>
                <Row style={{ margin: DEFAUTL_SPACE }}>
                    <InputBox onChangeMethod={() => { }} placeholder="Address" style={{ flex: 1 }} type="default" />
                </Row>
                <Row style={{ margin: DEFAUTL_SPACE }}>
                    <InputBox onChangeMethod={() => { }} placeholder="City" style={{ flex: 1 }} type="default" />
                </Row>
                <Row style={{ margin: DEFAUTL_SPACE }}>
                    <InputBox onChangeMethod={() => { }} placeholder="Pin code" style={{ flex: 1 }} type="decimal-pad" />
                </Row>
                <Row style={{ margin: DEFAUTL_SPACE }}>
                    <InputBox onChangeMethod={() => { }} placeholder="Mobile No" style={{ flex: 1 }} type="number-pad" />
                </Row>
                <PrimaryButton title="Submit" button_style={{ margin: DEFAUTL_SPACE }} text_style={{}} onPress={() => { modelFormRef.current.close() }} />
            </ModeForm>
            <PrimaryButton title="PROCEED TO BUY" button_style={{ margin: DEFAUTL_SPACE }} text_style={{}} onPress={() => Payment(5000)} />
        </>
    )
}

export default index


