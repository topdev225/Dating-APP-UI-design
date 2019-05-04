import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, TextInput, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content, Input } from "native-base"
import styles from "./styles";
import _ from "lodash";
import cross from '../../../assets/card_cross.png';
import keyhole from '../../../assets/keyhole.png';
import termsOfServiceIcon from '../../../assets/termsOfServiceIcon.png';
import nounCookiesPolicies from '../../../assets/nounCookiesPolicies.png';
import danger from '../../../assets/danger.png';
import licenses from '../../../assets/licenses.png';
import refer from '../../../assets/refer.png';
import arrow from '../../../assets/arrow.png';
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
import ProgressBarAnimated from 'react-native-progress-bar-animated';
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
import ToggleSwitch from 'toggle-switch-react-native'
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
export class AccountSetting extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {
            pushNotification: false,
        };
    }

    render() {
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
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>ACCOUNT SETTING</Text>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { this.props.navigation.pop(); }}>
                        <Image source={cross} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <Content>
                    <View style={styles.items}>

                        <Text style={styles.label}>{'MOBILE NUMBER'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'ADD MOBILE NUMBER'}
                                placeholderTextColor={'#000'}
                                style={styles.text} />
                        </View>
                        <Text style={styles.label}>{'EMAIL ADDRESS'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'example@mail.com'}
                                placeholderTextColor={'#000'}
                                style={styles.text} />
                        </View>
                        <Text style={styles.label}>{'NOTIFICATION'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'PUSH NOTIFICATION'}
                                placeholderTextColor={'#000'}
                                style={styles.text} />
                            <ToggleSwitch
                                isOn={this.state.pushNotification}
                                onColor='rgb(95, 199, 108)'
                                offColor='rgba(228, 228, 228, 0.7)'
                                // label='Example label'
                                // labelStyle={{ color: 'black', fontWeight: '900' }}
                                size='small'
                                onToggle={(isOn) => { this.setState({ pushNotification: isOn }) }}
                            />
                        </View>
                        <Text style={styles.label}>{'MEMBERSHIP'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'Trial'}
                                placeholderTextColor={'#000'}
                                style={styles.text} />
                        </View>
                        <Text style={styles.label}>{'CONNECTED ACCOUNTS'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'Facebook'}
                                placeholderTextColor={'#000'}
                                style={styles.text} />
                            <ToggleSwitch
                                isOn={this.state.pushNotification}
                                onColor='rgb(95, 199, 108)'
                                offColor='rgba(228, 228, 228, 0.7)'
                                // label='Example label'
                                // labelStyle={{ color: 'black', fontWeight: '900' }}
                                size='small'
                                onToggle={(isOn) => { this.setState({ pushNotification: isOn }) }}
                            />
                        </View>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'Instagram'}
                                placeholderTextColor={'#000'}
                                style={styles.text} />
                            <ToggleSwitch
                                isOn={this.state.pushNotification}
                                onColor='rgb(95, 199, 108)'
                                offColor='rgba(228, 228, 228, 0.7)'
                                // label='Example label'
                                // labelStyle={{ color: 'black', fontWeight: '900' }}
                                size='small'
                                onToggle={(isOn) => { this.setState({ pushNotification: isOn }) }}
                            />
                        </View>

                        <Text style={styles.label}>{'LEGAL'}</Text>
                        <View style={[styles.itemContainer, {
                            borderBottomWidth: 2,
                            paddingBottom: 10,
                            paddingTop: 10,
                        }]}>
                            <View style={styles.itemSubContainer}>
                                <Image source={keyhole} style={styles.iconImg} />
                                <View style={styles.descGroup}>
                                    <Text style={styles.name}>Privacy Policy</Text>
                                </View>
                            </View>
                            <Image source={arrow} style={styles.iconImg} />
                        </View>
                        <View style={[styles.itemContainer, {
                            borderBottomWidth: 2,
                            paddingBottom: 10,
                            paddingTop: 10,
                        }]}>
                            <View style={styles.itemSubContainer}>
                                <Image source={termsOfServiceIcon} style={styles.iconImg} />
                                <View style={styles.descGroup}>
                                    <Text style={styles.name}>Terms of Service</Text>
                                </View>
                            </View>
                            <Image source={arrow} style={styles.iconImg} />
                        </View>
                        <View style={[styles.itemContainer, {
                            borderBottomWidth: 2,
                            paddingBottom: 10,
                            paddingTop: 10,
                        }]}>
                            <View style={styles.itemSubContainer}>
                                <Image source={nounCookiesPolicies} style={styles.iconImg} />
                                <View style={styles.descGroup}>
                                    <Text style={styles.name}>Cookies Policy</Text>
                                </View>
                            </View>
                            <Image source={arrow} style={styles.iconImg} />
                        </View>
                        <View style={[styles.itemContainer, {
                            borderBottomWidth: 2,
                            paddingBottom: 10,
                            paddingTop: 10,
                        }]}>
                            <View style={styles.itemSubContainer}>
                                <Image source={danger} style={styles.iconImg} />
                                <View style={styles.descGroup}>
                                    <Text style={styles.name}>Safe Tips</Text>
                                </View>
                            </View>
                            <Image source={arrow} style={styles.iconImg} />
                        </View>
                        <View style={[styles.itemContainer, {
                            borderBottomWidth: 2,
                            paddingBottom: 10,
                            paddingTop: 10,
                        }]}>
                            <View style={styles.itemSubContainer}>
                                <Image source={licenses} style={styles.iconImg} />
                                <View style={styles.descGroup}>
                                    <Text style={styles.name}>Licenses</Text>
                                </View>
                            </View>
                            <Image source={arrow} style={styles.iconImg} />
                        </View>
                    </View>

                    <TouchableOpacity style={[styles.shadowBoxItemBtn, { backgroundColor: 'white', width: width - 40, alignSelf: 'center', justifyContent: 'center' }]} activeOpacity={0.8}>
                        <Text style={{
                            color: 'black',
                            paddingLeft: 30,
                            textAlign: 'center',
                            paddingRight: 30,
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>{'LOG OUT'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadowBoxItemBtn, { backgroundColor: 'white', width: width - 40, alignSelf: 'center', justifyContent: 'center' }]} activeOpacity={0.8}>
                        <Text style={{
                            color: 'black',
                            paddingLeft: 30,
                            textAlign: 'center',
                            paddingRight: 30,
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>{'DELETE ACCOUNT'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 60, backgroundColor: 'white' }} />
                </Content>
            </Container>
        );
    }
}

export default AccountSetting;
