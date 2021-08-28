import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import HeadingContainer from '../../components/HeadingContainer';
import Row from '../Row';
import Ficon from 'react-native-vector-icons/Feather';
import { ICON_SIZE } from '../../assets/sizes';
import Mciocn from 'react-native-vector-icons/MaterialCommunityIcons';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
interface props {
    onClick?: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Info</Text>
            <HeadingContainer style={styles.padding__vertical}>
                <Row>
                    <Ficon name="briefcase" size={ICON_SIZE} />
                    <Text style={[styles.description, styles.padding__left]}>4 Year</Text>
                </Row>
                <Row style={styles.alignCenter}>
                    <Mciocn name="hospital-building" size={ICON_SIZE} style={styles.padding__left} />
                    <Text style={[styles.description, styles.padding__left]}>Info</Text>
                </Row>
            </HeadingContainer>
            <HeadingContainer >
                <Row>
                    <Faicon name="building-o" size={ICON_SIZE} />
                    <Text style={[styles.description, styles.padding__left]}>Harvand University</Text>
                </Row>
                <Row style={styles.alignCenter}>
                    <Ioicon name="location-outline" size={ICON_SIZE} style={styles.padding__left} />
                    <Text style={[styles.description, styles.padding__left]}>Cleavland,USA</Text>
                </Row>
            </HeadingContainer>
        </View>
    )
}

export default index

