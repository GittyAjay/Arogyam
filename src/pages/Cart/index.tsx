import React, { Fragment } from 'react'
import { Text, View, ImageSourcePropType, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './style';
import Header from '../../components/Header';
import Eicon from 'react-native-vector-icons/Entypo';
import Aicon from 'react-native-vector-icons/AntDesign'
import { BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE, Dimension, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Carousel from 'react-native-snap-carousel';
import { PRIMARY, SECONDARY, WHITE } from '../../assets/colors';
import PrimaryButton from '../../components/PrimaryButton';
import { connect } from 'react-redux';
import { increment_cart_item, decrement_cart_item, remove_cart_item } from '../../store/actions/action';
import { product } from '../../store/reducers/projectReducer';
import NotFound from './not_found';
type slide = { url: ImageSourcePropType, index: number };
const index = (props: { navigation: { push: Function, pop: Function }, increment_cart_item: Function, decrement_cart_item: Function, remove_cart_item: Function, cartItems: product }) => {
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [activeCarosel, setactiveCarosel] = React.useState(0);
    // props.cartItems
    const Slides = [
        {
            url: require(`../../assets/images/prod1.png`),
            index: 1
        },
        {
            url: require(`../../assets/images/prod1.png`),
            index: 2
        },
        {
            url: require(`../../assets/images/prod1.png`),
            index: 3
        },
        {
            url: require(`../../assets/images/prod1.png`),
            index: 3
        },
        {
            url: require(`../../assets/images/prod1.png`),
            index: 3
        }
    ];
    const renderItem = ({ item, index }: { item: slide, index: number }) => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                flex: 1,
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.url} />
                </View>
            </View>
        )
    }
    React.useEffect(() => {
        let total = 0;
        props.cartItems.map(values => total += values.count * values.price);
        setTotalPrice(total);
    })
    return (
        <>
            <Header onClick={() => { }} onBackPress={() => { props.navigation.pop() }} title="Cart" >
                <Aicon name="search1" size={ICON_SIZE} />
            </Header>
            {props.cartItems.length === 0 && <NotFound />}
            {props.cartItems.length != 0 && <Fragment>
                <View style={{ flex: 1 }}>
                    <ScrollView style={{}}>
                        <View style={styles.container}>
                            {props.cartItems.map((cart, id) => {
                                return (
                                    <Fragment key={id}>
                                        <View style={[styles.cartItem, { marginBottom: DEFAUTL_SPACE }]} >
                                            <Carousel
                                                layout={'stack'}
                                                data={Slides}
                                                autoplay={true}
                                                enableMomentum={false}
                                                lockScrollWhileSnapping={true}
                                                layoutCardOffset={0}
                                                autoplayInterval={3000}
                                                loop={true}
                                                sliderWidth={150}
                                                itemWidth={150}
                                                onSnapToItem={index => setactiveCarosel(index)}
                                                renderItem={renderItem} />
                                            <View style={{ flexDirection: 'row' }}>
                                                {Slides.map((records, index) => {
                                                    return (
                                                        <Eicon key={index} name="dot-single" color={activeCarosel === index ? PRIMARY : "grey"} size={ICON_SIZE} />
                                                    )
                                                })}
                                            </View>
                                        </View>
                                        <View style={styles.details} >
                                            <View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: FONT_SMALL, fontWeight: "900" }}>{cart.name}</Text>

                                                    <Text>RS {cart.price * cart.count}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: FONT_SMALL, textDecorationStyle: 'solid' }}>Tube of 200 gm </Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ paddingRight: DEFAUTL_SPACE, fontWeight: "bold" }}>15% OFF</Text>
                                                        <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>MRP 690</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <TouchableOpacity onPress={() => props.remove_cart_item(cart.id)}>
                                                        <Text style={{ fontSize: FONT_SMALL, fontWeight: "900" }}>Remove</Text>
                                                    </TouchableOpacity>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity style={[styles.iconButton, { marginRight: DEFAUTL_SPACE }]} onPress={() => props.decrement_cart_item(cart.id)}>
                                                            <Aicon name="minus" color={WHITE} />
                                                        </TouchableOpacity>
                                                        <Text>{cart.count}</Text>
                                                        <TouchableOpacity style={[styles.iconButton, { marginLeft: DEFAUTL_SPACE }]} onPress={() => props.increment_cart_item(cart.id)}>
                                                            <Aicon name="plus" color={WHITE} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </Fragment>
                                )
                            })}
                            <View style={styles.banner}>
                                <Text>banner</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: DEFAUTL_SPACE }}>
                                <Text style={{ fontSize: FONT_SMALL, fontWeight: "900" }}>Add More Item</Text>
                                <TouchableOpacity style={[styles.iconButton, { marginLeft: DEFAUTL_SPACE }]}>
                                    <Aicon name="plus" color={WHITE} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: DEFAUTL_SPACE }}>
                                <PrimaryButton button_style={{ width: 100 }} onPress={() => { }} text_style={{}} title={`RS ${totalPrice}`} />
                                <PrimaryButton button_style={{ width: 100 }} onPress={() => { props.navigation.push("AddLocation") }} text_style={{}} title="Address" />
                            </View>
                        </View>
                    </ScrollView>
                    <PrimaryButton button_style={{ margin: DEFAUTL_SPACE / 2 }} onPress={() => { }} text_style={{}} title="PROCEED TO BUY " />
                </View>
            </Fragment>}
        </>
    )
}
function mapStateToProps(state: any) {
    return { cartItems: state.project.cart };
}
const mapDispatchToProps = {
    increment_cart_item,
    decrement_cart_item,
    remove_cart_item
}
export default connect(mapStateToProps, mapDispatchToProps)(index);


