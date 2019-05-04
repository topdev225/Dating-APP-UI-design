import React, { Component } from "react";
import { Alert, Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, TextInput, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content, Input } from "native-base"
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from "./styles";
import _ from "lodash";
import { format } from 'date-fns'
import cross from '../../../assets/card_cross.png';
import bike_riding from '../../../assets/bike_riding.png';
import trekking from '../../../assets/trekking.png';
import party from '../../../assets/party.png';
import height_png from '../../../assets/height.png';
import cheers from '../../../assets/cheers.png';
import smoke from '../../../assets/smoke.png';
import education from '../../../assets/education.png';
import portfolio from '../../../assets/portfolio.png';
import addPhoto from '../../../assets/AddPhoto.png';
import question from '../../../assets/question.png';
import houseOutline from '../../../assets/houseOutline.png';
import quote from '../../../assets/quote.png';
import place from '../../../assets/place.png';
import appointment from '../../../assets/appointment.png';
import Slider from "react-native-slider";
import pos from '../../../assets/pos.png';
import photo from '../../../assets/photo.png';
import back from '../../../assets/back.png';
import remove_icon from '../../../assets/remove.png';
import heart_icon from '../../../assets/heart.png';
import like from '../../../assets/like.png';
import send from '../../../assets/send.png';
import filter from '../../../assets/filter.png';
import colors from '../../../Colors';
import Carousel from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
const { width, height } = Dimensions.get('window');
const Categories = [
    {
        id: 100,
        label: "Bike Riding",
        img: bike_riding,

    },
    {
        id: 200,
        label: "Trekking",
        img: trekking,

    },
    {
        id: 300,
        label: "Weekend Party",
        img: party,

    }
];
const Photoes = [
    {
        img: bike_riding,

    },
    {
        img: trekking,

    },
    {
        img: party,
    }
];
export class Filter extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {
            value: 0.2,
            startDate: 'FROM DATE',
            endDate: 'TO DATE',
            isDateTimePickerVisible: false,
            selectedInput: 'startDate',
            SelectDateTime: 'date',
        };
    }
    showDateTimePicker = (value) => {
        this.setState({ SelectDateTime: value });
        this.setState({ isDateTimePickerVisible: true });
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });

        this.forceUpdate();
    }

    handleDatePicked = (date) => {

        if (this.state.selectedInput == "startDate") {
            if (this.state.endDate == "TO DATE") {
                this.setState({ startDate: format(date, 'MM/DD/YYYY') });
            }
            else {
                let startDate = new Date(date);
                let endDate = new Date(this.state.endDate);
                if (endDate - startDate < 0) {
                    Alert.alert('Error', 'Wrong Start Date!');
                }
                else {
                    this.setState({ startDate: format(date, 'MM/DD/YYYY') });
                }
            }

            this.hideDateTimePicker();
        }
        if (this.state.selectedInput == "endDate") {

            if (this.state.startDate == "START DATE") {
                this.setState({ endDate: format(date, 'MM/DD/YYYY') });
            }
            else {
                let startDate = new Date(this.state.startDate);
                let endDate = new Date(date);
                if (endDate - startDate < 0) {
                    Alert.alert('Error', 'Wrong End Date!');
                }
                else {
                    this.setState({ endDate: format(date, 'MM/DD/YYYY') });
                }
            }
            this.hideDateTimePicker();
        }
    };
    render() {
        const barWidth = Dimensions.get('screen').width - 150;
        return (
            <Container style={styles.container}>
                <View style={{
                    width: width,
                    ...Platform.select({
                        ios: {
                            height: 20,
                        },
                        android: {
                            height: 0,
                        },
                    }),
                }}>
                    <StatusBar />
                </View>
                <View style={{ flexDirection: 'row', width: width, padding: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Filter</Text>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.pop() }}
                        activeOpacity={0.8}>
                        <Image source={cross} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <Content>
                    <Text style={styles.label}>{'SEARCH BY DISTANCE'}</Text>
                    <View style={[styles.shadowBox, { width: width - 40, alignSelf: 'center' }]}>
                        <Text style={{ textAlign: 'center', width: '100%', fontSize: 15, color: 'black', fontWeight: 'bold' }}>71 mile</Text>
                        <Slider
                            minimumTrackTintColor='rgb(158, 149, 254)'
                            thumbTintColor='rgb(158, 149, 254)'
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                        />
                    </View>
                    <Text style={styles.label}>{'SEARCH BY DATE'}</Text>
                    <View style={[styles.shadowBox, { width: width - 40, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={{ width: width / 2 - 40 }}>
                            <Text style={styles.label}>{'FROM'}</Text>
                            <View style={styles.itemContainer}>
                                <TouchableOpacity activeOpacity={0.8}
                                    onPress={() => { this.setState({ selectedInput: "startDate" }); this.showDateTimePicker('date'); }}>
                                    <Text style={styles.text}>{this.state.startDate}</Text>
                                </TouchableOpacity>
                                <Image source={appointment} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </View>
                        </View>
                        <View style={{ width: width / 2 - 40 }}>
                            <Text style={styles.label}>{'TO'}</Text>
                            <View style={styles.itemContainer}>
                                <TouchableOpacity activeOpacity={0.8}
                                    onPress={() => { this.setState({ selectedInput: "endDate" }); this.showDateTimePicker('date'); }}>
                                    <Text style={styles.text}>{this.state.endDate}</Text>
                                </TouchableOpacity>
                                <Image source={appointment} style={{ width: 20, height: 20, resizeMode: 'contain' }} />

                            </View>
                        </View>
                    </View>
                    <Text style={[styles.label]}>{'PLAN CATEGORY OF YOUR ACTIVITY'}</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {_.map(Categories, (item, index) => {
                            return (
                                <View key={item.id} >
                                    <TouchableOpacity activeOpacity={0.8} style={[styles.shadowBox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }]}>
                                        <Text style={{
                                            color: 'black',
                                            paddingLeft: 25,
                                            paddingRight: 25,
                                            fontWeight: 'bold',
                                            fontSize: 18
                                        }}>{item.label}</Text>
                                    </TouchableOpacity>

                                </View>

                            );
                        })}
                    </ScrollView>

                    <TouchableOpacity
                        onPress={() => { this.props.navigation.pop(); }}
                        style={[styles.shadowBoxItemBtn, { width: width - 40, alignSelf: 'center', justifyContent: 'center', marginTop: 40 }]} activeOpacity={0.8}>
                        <Text style={{
                            color: '#fff',
                            paddingLeft: 30,
                            textAlign: 'center',
                            paddingRight: 30,
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>{'SEE RESULT'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 60, backgroundColor: 'white' }} />
                </Content>
                <DateTimePicker
                    mode={this.state.SelectDateTime}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </Container>
        );
    }
}

export default Filter;
