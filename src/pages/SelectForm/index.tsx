import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header';
import { PRIMARY, WHITE } from '../../assets/colors';
import AddPatients from '../../components/AddPatients';
import AddDiases from '../../components/AddDieases';
import Addspeacialist from '../../components/Addspeacialist';
import AddPhysian from '../../components/AddPhysian';
import { styles } from './style';
const index = (props: { navigation: { pop: Function } }) => {
    const [step, setStep] = React.useState(0);
    const HeaderValues = ['Select patient', 'Select disease', 'Select specialist', 'Add Physician']
    function ReturnForm(step: number) {
        switch (step) {
            case 0:
                return <AddPatients onClick={() => { setStep(step => step + 1) }} />;
            case 1:
                return <AddDiases onClick={() => { setStep(step => step + 1) }} />;
            case 2:
                return <Addspeacialist onClick={() => { setStep(step => step + 1) }} />;
            case 3:
                return <AddPhysian onClick={() => { setStep(step => step + 1) }} />;
            default:
                props.navigation.pop();
        }
    }
    return (
        <>
            <Header onBackPress={() => { step > 0 ? setStep(step => step - 1) : props.navigation.pop() }} title={HeaderValues[step]} onClick={() => { }} style={{ backgroundColor: PRIMARY }} text={{ color: WHITE }} iconColor={WHITE}>
                <Text style={styles.description}>Filter</Text>
            </Header>
            <View>
                {ReturnForm(step)}
            </View>
        </>
    )
}

export default index


