import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Row from '../Row'
import AddIconbutton from '../../components/IconButton';
import InputBox from '../../components/InputBox';
import NextButton from '../../components/PrimaryButton';
import { DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import Aicon from 'react-native-vector-icons/AntDesign';
import { WHITE } from '../../assets/colors';
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <Row style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text>Add Patients</Text>
                <AddIconbutton onPress={() => { }} >
                    <Aicon name="plus" size={15} color={WHITE} />
                </AddIconbutton>
            </Row>
            <InputBox onChangeMethod={() => { }} placeholder="Name" style={{ marginTop: DEFAUTL_SPACE }} type='name-phone-pad' />
            <InputBox onChangeMethod={() => { }} placeholder="Age" style={{ marginTop: DEFAUTL_SPACE }} type='number-pad' />
            <InputBox onChangeMethod={() => { }} placeholder="Sex" style={{ marginTop: DEFAUTL_SPACE }} type='name-phone-pad' />
            <NextButton onPress={props.onClick} title="Next" button_style={{ marginTop: DEFAUTL_SPACE }} />
        </View>
    )
}

export default index

