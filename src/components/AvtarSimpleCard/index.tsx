import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import HeaderContainer from '../../components/HeadingContainer';
import Col from '../../components/Column';
import Row from '../../components/Row';
import Ficon from 'react-native-vector-icons/Fontisto';
import Fa5icon from 'react-native-vector-icons/FontAwesome5';
import { DEFAUTL_SPACE, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
interface props {
    onPress: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <HeaderContainer style={styles.container}>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={[styles.awtar, styles.marginHorizental]} onPress={props.onPress}>
                    {props.children}
                </TouchableOpacity>
                <Col style={styles.marginLeft}>
                    <Text style={styles.head}>Ajay</Text>
                    <Row style={{ marginTop: DEFAUTL_SPACE }}>
                        <Row style={{ marginRight: INLINE_GAP }}>
                            <Ficon name="stethoscope" size={ICON_SIZE - 5} />
                            <Text style={[styles.desc, styles.marginLeft]}>Physician</Text>
                        </Row>
                        <Row>
                            <Fa5icon name="clinic-medical" size={ICON_SIZE - 5} />
                            <Text style={[styles.desc, styles.marginLeft]}>Cleveland Clinic</Text>
                        </Row>
                    </Row>
                </Col>
            </Row>

        </HeaderContainer>
    )
}

export default index

