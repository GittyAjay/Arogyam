import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import PrimaryButton from '../../components/PrimaryButton';
import Spealists from '../ProductDetails';
import { PRIMARY } from '../../assets/colors';
import HeaderContainer from '../../components/HeadingContainer';
import { globalstyles } from '../../globalcss';
interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <HeaderContainer>
                <Spealists name="Physician" onClick={() => { }} style={globalstyles.margin__right} />
                <Spealists name="Pediatric" onClick={() => { }} style={globalstyles.margin__right} />
                <Spealists name="Dentist" onClick={() => { }} style={globalstyles.margin__right} />
            </HeaderContainer>
            <PrimaryButton onPress={props.onClick} title="See All Speacialist" button_style={styles.buttonStyle} text_style={{ color: PRIMARY }} />
            <PrimaryButton onPress={props.onClick} title="Consult with general physian" button_style={styles.buttonStyle} text_style={{ color: PRIMARY }} />
        </View>
    )
}

export default index

