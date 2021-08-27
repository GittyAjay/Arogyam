import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Row from '../Row'
import AddIconbutton from '../../components/IconButton';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';
import { BORDER_WIDTH, DEFAUTL_SPACE } from '../../assets/sizes';
import Spealists from '../ProductDetails';
import { PRIMARY, WHITE } from '../../assets/colors';
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <Row style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Spealists name="Physician" onClick={() => { }} />
                <Spealists name="Pediatric" onClick={() => { }} />
                <Spealists name="Dentist" onClick={() => { }} />
            </Row>
            <PrimaryButton onPress={props.onClick} title="See All Speacialist" button_style={{ marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 1, borderColor: PRIMARY }} text_style={{ color: PRIMARY }} />
            <PrimaryButton onPress={props.onClick} title="Consult with general physian" button_style={{ marginTop: DEFAUTL_SPACE, backgroundColor: WHITE, borderWidth: 1, borderColor: PRIMARY }} text_style={{ color: PRIMARY }} />
        </View>
    )
}

export default index

