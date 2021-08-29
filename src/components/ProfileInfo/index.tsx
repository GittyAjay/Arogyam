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
import { globalstyles } from '../../globalcss';
interface props {
    onClick?: () => void
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={globalstyles.title__bold}>Info</Text>
            <HeadingContainer style={globalstyles.padding__vertical}>
                <Row>
                    <Ficon name="briefcase" size={ICON_SIZE} />
                    <Text style={[globalstyles.description, globalstyles.padding_left]}>4 Year</Text>
                </Row>
                <Row style={globalstyles.align_center}>
                    <Mciocn name="hospital-building" size={ICON_SIZE} style={globalstyles.padding_left} />
                    <Text style={[globalstyles.description, globalstyles.padding_left]}>Info</Text>
                </Row>
            </HeadingContainer>
            <HeadingContainer >
                <Row>
                    <Faicon name="building-o" size={ICON_SIZE} />
                    <Text style={[globalstyles.description, globalstyles.padding_left]}>Harvand University</Text>
                </Row>
                <Row style={globalstyles.align_center}>
                    <Ioicon name="location-outline" size={ICON_SIZE} style={globalstyles.padding_left} />
                    <Text style={[globalstyles.description, globalstyles.padding_left]}>Cleavland,USA</Text>
                </Row>
            </HeadingContainer>
        </View>
    )
}

export default index

