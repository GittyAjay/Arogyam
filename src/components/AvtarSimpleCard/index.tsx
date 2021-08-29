import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import HeaderContainer from '../../components/HeadingContainer';
import Col from '../../components/Column';
import Row from '../../components/Row';
import Ficon from 'react-native-vector-icons/Fontisto';
import Fa5icon from 'react-native-vector-icons/FontAwesome5';
import { ICON_SIZE } from '../../assets/sizes';
import { globalstyles } from '../../globalcss';
interface props {
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <HeaderContainer style={styles.container}>
            <Row style={globalstyles.align_center}>
                <TouchableOpacity style={[styles.awtar, globalstyles.margin__horizental]} onPress={props.onPress}>
                    {props.children}
                </TouchableOpacity>
                <Col style={globalstyles.margin__left}>
                    <Text style={styles.head}>Ajay</Text>
                    <Row style={globalstyles.margin__top}>
                        <Row style={globalstyles.margin__right}>
                            <Ficon name="stethoscope" size={ICON_SIZE - 5} />
                            <Text style={[globalstyles.description, globalstyles.margin__left]}>Physician</Text>
                        </Row>
                        <Row>
                            <Fa5icon name="clinic-medical" size={ICON_SIZE - 5} />
                            <Text style={[globalstyles.description, globalstyles.margin__left]}>Cleveland Clinic</Text>
                        </Row>
                    </Row>
                </Col>
            </Row>

        </HeaderContainer>
    )
}

export default index

