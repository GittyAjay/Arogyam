import React from 'react'
import { TouchableOpacity, View, Text, ImageSourcePropType, Image, FlatList } from 'react-native'
import { styles } from './style';
import Header from '../../components/Header';
import { BORDER_RADIUS, BORDER_RADIUS_CIRCULAR, DEFAUTL_SPACE, FONT_GLARGE, FONT_LARGE, FONT_MID, FONT_SMALL, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Aicon from 'react-native-vector-icons/AntDesign';
import { PRIMARY, WHITE, RED, GREY, SHADE, RED_TRANSPARENT, RED_HEART } from '../../assets/colors';
import Row from '../../components/Row';
import Carousel from 'react-native-snap-carousel';
import { Dimension } from '../../assets/sizes'
import PrimaryButton from '../../components/PrimaryButton';
import Hr from '../../components/HorizentalLine';
import Review from '../../components/Review';
import ProductDetailCard from '../../components/ProductDetails';
import { product } from '../../store/reducers/projectReducer';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/action';
import HeadingContainer from "../../components/HeadingContainer";
type slide = { url: ImageSourcePropType, index: number };
const index = (props: { navigation: { push: Function, pop: Function }, products: product, addToCart: Function }) => {
    const [activeCarosel, setactiveCarosel] = React.useState(0);
    const { WIDTH, HEIGHT } = Dimension()
    function back_btn() {
        props.navigation.pop()
    }
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
                backgroundColor: PRIMARY,
                flex: 1,
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.url} />
                </View>
            </View>
        )
    }
    function renderFunction() {
        return (
            <View style={styles.container}>
                <View style={[styles.imageThumbnail, { height: HEIGHT / 3 }]}>
                    <Carousel
                        layout={'stack'}
                        data={Slides}
                        autoplay={false}
                        enableMomentum={false}
                        layoutCardOffset={0}
                        loop={true}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH}
                        onSnapToItem={index => setactiveCarosel(index)}
                        renderItem={renderItem} />
                    <View style={styles.sliderNumber}>
                        <Text>{activeCarosel}/5</Text>
                    </View>
                </View>
                <View style={styles.summary}>
                    <HeadingContainer >
                        <Row >
                            <Text style={[styles.heading, { fontWeight: 'normal', marginRight: DEFAUTL_SPACE }]}>RS 300</Text>
                            <Text style={styles.text__cross}>RS 500</Text>
                        </Row>
                        <TouchableOpacity style={[styles.heartSymbol, { borderRadius: BORDER_RADIUS_CIRCULAR, backgroundColor: RED_HEART, }]}>
                            <Aicon name="heart" size={ICON_SIZE} color={WHITE} />
                        </TouchableOpacity>
                    </HeadingContainer>
                    <Text style={[styles.heading]}>Yello Sweater Hypes</Text>
                    <Row style={{ alignItems: 'center', marginVertical: INLINE_GAP - 5 }}>
                        <Aicon name="star" color={RED} size={ICON_SIZE} />
                        <Aicon name="star" color={RED} size={ICON_SIZE} />
                        <Aicon name="star" color={RED} size={ICON_SIZE} />
                        <Aicon name="star" color={RED} size={ICON_SIZE} />
                        <Aicon name="star" color={RED} size={ICON_SIZE} />
                        <Text style={[styles.text__description, { marginHorizontal: DEFAUTL_SPACE }]}>5.0</Text>
                        <Text style={styles.text__description}>(48)</Text>
                    </Row>
                    <PrimaryButton button_style={{ width: 200 }} onPress={() => { }} text_style={{}} title="Cachback 10%" />
                </View>
                <Hr style={{ marginHorizontal: DEFAUTL_SPACE }} />
                <View style={styles.description}>
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                        <Text style={styles.heading}>Product Information:</Text>
                        <PrimaryButton title="New" onPress={() => { }} button_style={{ padding: DEFAUTL_SPACE }} />
                    </Row>
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                        <Text style={styles.text__description}>Weight</Text>
                        <Text style={styles.text__description}>1.5kg</Text>
                    </Row>
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                        <Text style={styles.text__description}>Sold</Text>
                        <Text style={styles.text__description}>500 product</Text>
                    </Row>
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                        <Text style={styles.text__description}>Brand</Text>
                        <Text style={styles.text__description}>Miglar</Text>
                    </Row>
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: DEFAUTL_SPACE }}>
                        <Text style={styles.text__description}>Stock</Text>
                        <Text style={styles.text__description}>{`>1156`}Available</Text>
                    </Row>
                    <Hr style={{ marginBottom: DEFAUTL_SPACE }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.heading, { marginBottom: DEFAUTL_SPACE / 2 }]}>Product Information :</Text>
                        <Text style={[styles.text__description, { color: GREY }]}>This shirt is great for everyday wear for young and old alike. so that you do not have trouble washing it ...</Text>
                    </View>
                </View>
                <View style={styles.reviews}>
                    <Text style={[styles.heading, { marginBottom: DEFAUTL_SPACE }]}>Reviews</Text>
                    <Row style={{ justifyContent: "space-between", alignItems: 'flex-start', marginBottom: DEFAUTL_SPACE }}>
                        <Row>
                            <Text style={styles.heading__large}>4.9/</Text>
                            <Text style={[styles.heading__large, { color: GREY }]}>5</Text>
                        </Row>
                        <Row style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: DEFAUTL_SPACE }}>
                                    <Row style={{ alignItems: 'center', marginRight: DEFAUTL_SPACE, width: 100 }}>
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                    </Row>
                                    <View style={{ height: 10, width: 100, backgroundColor: RED_TRANSPARENT, borderRadius: BORDER_RADIUS }}>
                                        <View style={{ height: 10, width: 60, flex: 1, backgroundColor: RED, borderRadius: BORDER_RADIUS }}>
                                        </View>
                                    </View>
                                </Row>
                                <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: DEFAUTL_SPACE }}>
                                    <Row style={{ alignItems: 'center', marginRight: DEFAUTL_SPACE, width: 100 }}>
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                    </Row>
                                    <View style={{ height: 10, width: 100, backgroundColor: RED_TRANSPARENT, borderRadius: BORDER_RADIUS }}>
                                        <View style={{ height: 10, width: 60, flex: 1, backgroundColor: RED, borderRadius: BORDER_RADIUS }}>
                                        </View>
                                    </View>
                                </Row>
                                <Row style={{ alignItems: 'center', justifyContent: 'center', marginBottom: DEFAUTL_SPACE }}>
                                    <Row style={{ alignItems: 'center', marginRight: DEFAUTL_SPACE, width: 100 }}>
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                        <Aicon name="star" color={RED} size={ICON_SIZE - 5} />
                                    </Row>
                                    <View style={{ height: 10, width: 100, backgroundColor: RED_TRANSPARENT, borderRadius: BORDER_RADIUS }}>
                                        <View style={{ height: 10, width: 30, flex: 1, backgroundColor: RED, borderRadius: BORDER_RADIUS }}>
                                        </View>
                                    </View>
                                </Row>
                            </View>
                        </Row>
                    </Row>
                    <Review date="31/5/2021" name="Anglelia goli" rating_count={5} rating_description="Awesome Product" style={{ marginBottom: DEFAUTL_SPACE }} />
                    <Review date="1/6/2021" name="Sona tu" rating_count={3} rating_description="Awesome Product" style={{ marginBottom: DEFAUTL_SPACE }} />
                    <Review date="15/8/2021" name="Manu devi" rating_count={2} rating_description="Awesome Product" style={{ marginBottom: DEFAUTL_SPACE }} />
                    <Review date="11/5/2021" name="Surat axi" rating_count={1} rating_description="Awesome Product" style={{ marginBottom: DEFAUTL_SPACE }} />
                    <Row style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: DEFAUTL_SPACE }}>
                        <Text style={styles.text__description}>Suggestions Products</Text>
                        <TouchableOpacity onPress={() => { props.navigation.push("ProductPage", { type: "Products" }) }}>
                            <Text style={[styles.text__description, { fontFamily: 'Nunito-Bold' }]}>View all</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={{ flexWrap: 'wrap' }}>
                        {props.products.map((values, key) => {
                            if (key < 6)
                                return (
                                    <ProductDetailCard {...values} key={key} onClick={() => { props.navigation.push("ViewProduct") }} style={{ width: WIDTH / 2 - 20, margin: 3 }} text={{ color: WHITE }}>
                                        <Image source={values.url} />
                                    </ProductDetailCard>
                                )
                        })}
                    </Row>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Header onClick={() => { }} onBackPress={back_btn} title="Product" style={{ backgroundColor: PRIMARY }} text={{ color: WHITE }} iconColor={WHITE}>
                <Row>
                    <TouchableOpacity>
                        <Faicon name="shopping-cart" size={ICON_SIZE} color={WHITE} style={{ marginHorizontal: DEFAUTL_SPACE }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Aicon name="sharealt" size={ICON_SIZE} color={WHITE} style={{ marginHorizontal: DEFAUTL_SPACE }} />
                    </TouchableOpacity>
                </Row>
            </Header>
            <FlatList data={[{ name: "Ajay", id: 1 }]} renderItem={renderFunction} keyExtractor={(value) => `${value.id}`} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: INLINE_GAP, alignItems: 'center', backgroundColor: WHITE }}>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.heading, { marginRight: DEFAUTL_SPACE }]}>RS 4000</Text>
                    <Text style={[styles.text__description, { marginRight: DEFAUTL_SPACE, color: GREY }]}>MRP $5000</Text>
                    <Text style={[styles.text__description, { marginRight: DEFAUTL_SPACE, color: GREY }]}>20% off</Text>
                </Row>
                <PrimaryButton title="add to cart" onPress={() => { }} button_style={{ padding: DEFAUTL_SPACE }} />
            </View>
        </View>
    )
}
function mapStateToProps(state: any) {
    return { products: state.project.products }
}
const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(index);


