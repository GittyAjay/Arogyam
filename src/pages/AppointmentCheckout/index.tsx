import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import Row from '../../components/Row'
import PrimaryButton from '../../components/PrimaryButton';
import { GREY, WHITE } from '../../assets/colors';
import Col from '../../components/Column';
import Header from '../../components/Header';
import { FONT_MID } from '../../assets/sizes';
import { Payment } from '../../components/Payment';

interface props {
    onClick: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <>
            <Header title="Checkout" onBackPress={() => { }} onClick={() => { }} style={styles.header_bck} text={styles.header_txt} iconColor={WHITE} />
            <View style={styles.container}>
                <Col style={[styles.grey_bck, styles.padding__Bottom, styles.padding]}>
                    <Row style={[styles.spaceBetween, styles.padding__Bottom]}>
                        <Col>
                            <Text style={styles.description}>Patient name</Text>
                            <Text style={styles.heading}>Ajay kumar</Text>
                        </Col>
                        <Text style={styles.heading}>Edit</Text>
                    </Row>
                    <Row style={[styles.spaceBetween, styles.padding__Bottom]}>
                        <Col>
                            <Text style={styles.description}>Patient phone number</Text>
                            <Text style={styles.heading}>6392363003</Text>
                        </Col>
                        <Text style={styles.heading}>Edit</Text>
                    </Row>
                </Col>
                <Col style={styles.padding}>
                    <Text style={[styles.heading, { fontSize: FONT_MID }]}>What is your choise</Text>
                    <Row style={styles.margin__vertical}>
                        <PrimaryButton title="Video" onPress={() => { }} button_style={[styles.padding, styles.margin__right]} />
                        <PrimaryButton title="Audio" onPress={() => { }} button_style={[styles.padding, styles.margin__right]} />
                        <PrimaryButton title="Message" onPress={() => { }} button_style={[styles.padding, styles.margin__right]} />
                    </Row>
                </Col>
                <Col style={[styles.grey_bck, styles.padding__Bottom, styles.padding]}>
                    <Text style={styles.heading}>Bill Detail</Text>
                    <Row style={[styles.spaceBetween, styles.padding__Bottom, styles.margin__top]}>
                        <Text style={styles.description}>Consultancy Fees</Text>
                        <Text style={styles.heading}>RS 3000</Text>
                    </Row>
                    <Row style={[styles.spaceBetween, styles.padding__Bottom]}>
                        <Text style={styles.description}>Discount</Text>
                        <Text style={styles.heading}>RS 2000</Text>
                    </Row>
                    <Row style={[styles.spaceBetween, styles.margin__top]}>
                        <Text style={styles.heading}>Paid Ammount</Text>
                        <Text style={styles.heading}>RS 5000</Text>
                    </Row>
                </Col>
                <Col style={styles.padding}>
                    <Text style={styles.heading}>Reach out to us</Text>
                    <PrimaryButton title="Need Help" onPress={() => { }} button_style={[styles.padding, styles.grey_bck, styles.margin__top]} text_style={{ color: GREY }} />
                    <PrimaryButton title="Cancel" onPress={() => { }} button_style={[styles.padding, styles.grey_bck, styles.margin__top]} text_style={{ color: GREY }} />
                    <PrimaryButton title="Pay RS 5000" onPress={() => { Payment(5000) }} button_style={[styles.padding, styles.margin__top]} />
                </Col>
            </View>

        </>
    )
}

export default index

