import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { BLACK, GREY, PRIMARY, SHADE, WHITE } from '../../assets/colors';
import Header from '../../components/Header';
import Eicon from 'react-native-vector-icons/Entypo';
import Aicon from 'react-native-vector-icons/AntDesign';
import Slicon from 'react-native-vector-icons/SimpleLineIcons';
import { BORDER_RADIUS, DEFAUTL_SPACE, ICON_SIZE } from '../../assets/sizes';
import AvtarCard from '../../components/AvtarCard';
import ProfileInfo from '../../components/ProfileInfo';
import Column from '../../components/Column';
import HeadingContainer from '../../components/HeadingContainer';
import { styles } from './style';
import Row from '../../components/Row';
import Col from '../../components/Column';
import moment from 'moment';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import PrimaryButton from '../../components/PrimaryButton';

type month = Array<String>;
type day = {
    startDate: number,
    endDate: number
}
type dayDate_calendar_type = {
    date: number,
    day: number,
}

const index = (props: { navigation: { push: Function } }) => {
    const months: month = ['January', 'Februray', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const [activeMonth, setActiveMonth] = React.useState<number>(moment().month());
    const [days, setDays] = React.useState<day>({
        startDate: moment().date(),
        endDate: moment(activeMonth, "MM").daysInMonth()
    });
    const [activeDate, setActiveDate] = React.useState(moment().date());
    const [showTimePicker, setTimePicker] = React.useState(false);
    const [dayDate_calendar, setDayDate_calendar] = React.useState<Array<dayDate_calendar_type>>([])

    function createDayDate__calendar() {
        setDayDate_calendar([]);
        for (let index = days.startDate; index <= days.endDate; index++) {
            setDayDate_calendar(dayDate => [...dayDate, {
                date: index,
                day: moment(index, "DD").day()
            }])
        }
    }
    function onTimePicker(props: any) {
        console.log(props);
    }
    React.useEffect(() => {
        // setDays({
        //     startDate: moment(activeMonth, "MM").date(),
        //     endDate: moment(activeMonth, "MM").daysInMonth()
        // })
        // console.log(days);
        createDayDate__calendar();
    }, [activeMonth])

    function increaseMonth() {
        setActiveMonth(month => month < 11 ? month + 1 : month);
    }
    function decreaseMonth() {
        setActiveMonth(month => month > 0 ? month - 1 : month);
    }
    function getDayfromWeek(weekno: number) {
        switch (weekno) {
            case 0:
                return "Sun"
            case 1:
                return "Mon"
            case 2:
                return "Tue"
            case 3:
                return "Wed"
            case 4:
                return "Thu"
            case 5:
                return "Fri"
            case 6:
                return "Sat"
            default:
                break;
        }
    }
    function renderFunction() {
        return (
            <View style={styles.container}>
                <ProfileInfo />
                <Column style={styles.padding}>
                    <Text style={styles.heading}>Biography</Text>
                    <Text style={[styles.description, styles.padding__top]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis id accusantium distinctio doloribus totam harum culpa assumenda quos ipsum. Soluta dolore odio aut similique corrupti nesciunt laudantium numquam voluptatibus officia?
                    </Text>
                </Column>
                <Column style={styles.padding}>
                    <Text style={styles.heading}>Schedule</Text>
                    <HeadingContainer style={styles.padding__vertical}>
                        <Row style={{}}>
                            <TouchableOpacity onPress={decreaseMonth}>
                                <Aicon name="left" size={ICON_SIZE - 5} color={GREY} />
                            </TouchableOpacity>
                            <Text style={[styles.description, styles.padding__horizental, { color: PRIMARY }]}>{months[activeMonth]}</Text>
                            <TouchableOpacity onPress={increaseMonth}>
                                <Aicon name="right" size={ICON_SIZE - 5} color={GREY} />
                            </TouchableOpacity>
                        </Row>
                        <TouchableOpacity onPress={() => setTimePicker(timePicker => !timePicker)}>
                            <Slicon name="calendar" size={ICON_SIZE} color={GREY} />
                            {showTimePicker && <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode="time"
                                is24Hour={true}
                                display="clock"
                                onChange={onTimePicker}
                            />}
                        </TouchableOpacity>
                    </HeadingContainer>
                    <HeadingContainer style={styles.padding__vertical}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {dayDate_calendar.map((values, key) => {
                                return (
                                    <TouchableOpacity style={[styles.column__align, styles.margin__left, styles.padding, { backgroundColor: values.date === activeDate ? PRIMARY : SHADE, borderRadius: BORDER_RADIUS }]} key={key} onPress={() => setActiveDate(values.date)}>
                                        <Text style={[styles.heading, { color: values.date === activeDate ? WHITE : BLACK }]}>{getDayfromWeek(values.day)}</Text>
                                        <Text style={[styles.heading, { color: values.date === activeDate ? WHITE : BLACK }]}>{values.date}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </HeadingContainer>
                    <PrimaryButton title="Book an appointment" onPress={() => { props.navigation.push('AppointmentCheckout') }} />
                </Column>
            </View>
        )
    }
    return (
        <>
            <Header onBackPress={() => { }} onClick={() => { }} title="Docotor Profile" text={{ color: WHITE }} iconColor={WHITE} style={{ backgroundColor: PRIMARY }} >
                <Eicon name="dots-three-vertical" size={ICON_SIZE} color={WHITE} />
            </Header>
            <AvtarCard style={{ marginBottom: DEFAUTL_SPACE / 2, backgroundColor: PRIMARY }} onPress={() => { navigation.navigate('DoctorProfile') }} color={WHITE} />
            <FlatList renderItem={renderFunction} data={[{ "name": 'Ajay' }]} keyExtractor={(values, key) => key.toString()} />
        </>
    )
}

export default index

