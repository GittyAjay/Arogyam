import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Aicon from 'react-native-vector-icons/AntDesign';
import Mcicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Ficon from 'react-native-vector-icons/Feather';
import { ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { styles } from './style'
import { GREY, PRIMARY, WHITE } from '../../assets/colors'
import Row from '../Row';
import { globalstyles } from '../../globalcss';
interface props {
    menuPress: Function
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={[globalstyles.padding, {
                backgroundColor: PRIMARY
            }]}>
                <View style={styles.top__header}>
                    <TouchableOpacity onPress={props.menuPress}>
                        <Ficon name="menu" size={ICON_SIZE} color={WHITE} style={globalstyles.padding_right} />
                    </TouchableOpacity>
                    <Row>
                        <TouchableOpacity>
                            <Mcicon name="message-minus-outline" size={ICON_SIZE} color={WHITE} style={{ paddingRight: INLINE_GAP }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => { }} >
                            <Aicon name="bells" size={ICON_SIZE} color={WHITE} />
                            {/* {cartItems.length > 0 && <View style={styles.cartIcon}>
                            <Text style={{ fontSize: FONT_SMALL, color: WHITE }}>{cartItems.length}</Text>
                        </View>} */}
                        </TouchableOpacity>
                    </Row>
                </View>
                <Text style={[globalstyles.description, globalstyles.padding__Bottom]}>Hello Ajay</Text>
                <Text style={[globalstyles.heading, globalstyles.padding__Bottom]}>Find Your Specialist</Text>
                <View style={styles.search__Bar}>
                    <TextInput placeholder="Find your speacilist" placeholderTextColor={GREY} style={[globalstyles.description, { flex: 1 }]} />
                    <TouchableOpacity>
                        <Ioicon name="md-search" size={ICON_SIZE} color={GREY} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default index


