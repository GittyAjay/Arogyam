import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Aicon from 'react-native-vector-icons/AntDesign';
import Mcicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ioicon from 'react-native-vector-icons/Ionicons';
import Ficon from 'react-native-vector-icons/Feather';
import { DEFAUTL_SPACE, FONT_LARGE, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import { useSelector } from 'react-redux'
import { styles } from './style'
import { GREY, PRIMARY, WHITE } from '../../assets/colors'
import Row from '../Row';
interface props {
    menuPress: Function
}
const index: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: PRIMARY, paddingVertical: INLINE_GAP,
                paddingHorizontal: INLINE_GAP
            }}>
                <View style={styles.top__header}>
                    <TouchableOpacity onPress={props.menuPress}>
                        <Ficon name="menu" size={ICON_SIZE} color={WHITE} style={{ paddingRight: INLINE_GAP }} />
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
                <Text style={[styles.normal, { paddingBottom: DEFAUTL_SPACE }]}>Hello Ajay</Text>
                <Text style={[styles.header, { paddingBottom: DEFAUTL_SPACE }]}>Find Your Specialist</Text>
                <View style={styles.search__Bar}>
                    <TextInput placeholder="Find your speacilist" placeholderTextColor={GREY} style={[styles.normal, { flex: 1 }]} />
                    <TouchableOpacity>
                        <Ioicon name="md-search" size={ICON_SIZE} color={GREY} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default index


