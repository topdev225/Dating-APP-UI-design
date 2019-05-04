import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content } from "native-base"
import styles from "./styles";
import _ from "lodash";

import clock from '../../../../assets/clock.png';
import message_heart from '../../../../assets/message_heart.png';
import message_notification from '../../../../assets/message_notification.png';
import birthCake from '../../../../assets/birthdayCakePiece.png';
import search from '../../../../assets/search.png';
import pencil from '../../../../assets/pencil.png';
import option from '../../../../assets/option.png';
import diamond from '../../../../assets/diamond.png';
import refer from '../../../../assets/refer.png';
import arrow from '../../../../assets/arrow.png';
import my_location from '../../../../assets/my_location.png';
import scale_icon from '../../../../assets/scale.png';
import gender from '../../../../assets/gender.png';
import height_png from '../../../../assets/height.png';
import cheers from '../../../../assets/cheers.png';
import smoke from '../../../../assets/smoke.png';
import education from '../../../../assets/education.png';
import portfolio from '../../../../assets/portfolio.png';
import question from '../../../../assets/question.png';
import houseOutline from '../../../../assets/houseOutline.png';
import quote from '../../../../assets/quote.png';
import place from '../../../../assets/place.png';
import appointment from '../../../../assets/appointment.png';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import pos from '../../../../assets/pos.png';
import photo from '../../../../assets/photo.png';
import back from '../../../../assets/back.png';
import remove_icon from '../../../../assets/remove.png';
import heart_icon from '../../../../assets/heart.png';
import like from '../../../../assets/like.png';
import send from '../../../../assets/send.png';
import filter from '../../../../assets/filter.png';
import colors from '../../../Colors';
import Carousel from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
const { width, height } = Dimensions.get('window');
const TabbarMenu = [
    {
        id: 100,
        label: "32",
        img: birthCake,

    },
    {
        id: 200,
        label: "64",
        img: scale_icon,

    },
    {
        id: 300,
        label: "5\'3\"",
        img: height_png,

    },
    {
        id: 400,
        label: "Drinks",
        img: cheers,

    },
    {
        id: 500,
        label: "Smoke",
        img: smoke,

    },
    {
        id: 600,
        label: "Education",
        img: education,

    },
    {
        id: 700,
        label: "Question",
        img: question,
    },
];
export class DashboardMessage extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { title: 'Sample 1', type: 100 },
                { title: 'Sample 2', type: 200 },
                { title: 'Sample 3', type: 300 },
                { title: 'Sample 4', type: 400 },
                { title: 'Sample 5', type: 500 },
                { title: 'Sample 6', type: 600 },
                { title: 'Sample 7', type: 700 },
            ],
            popup: false
        };
    }
    render() {
        return (
            <Content>
                <View style={{ flexDirection: 'row', width: width, padding: 20, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>DM</Text>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { }}>
                        <Image source={search} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                            <TouchableOpacity activeOpacity={0.8} style={styles.tipContainer}>
                                <Image source={message_heart} style={[styles.smallIcon, { tintColor: 'white' }]} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>John Doe showed interest in your profile</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 2 }}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('InvitedProfile') }}
                                    style={[styles.shadowBox, { alignItems: 'center', width: width / 5, borderRadius: 5 }]} activeOpacity={0.8}>
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 10
                                    }}>{'Decline'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={[styles.shadowBox, { alignItems: 'center', width: width / 5, borderRadius: 5, backgroundColor: 'rgb(158, 149, 254)' }]} activeOpacity={0.8}>
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 10
                                    }}>{'Message'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>11:48</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                            <TouchableOpacity activeOpacity={0.8} style={styles.tipContainer}>
                                <Image source={message_notification} style={[styles.smallIcon, { tintColor: 'white' }]} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>You have a new Activity Suggestion posted by Moris "Jungle Safari"</Text>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 2 }}>
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={[styles.shadowBox, { alignItems: 'center', width: width / 5, borderRadius: 5 }]} activeOpacity={0.8}>
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 10
                                    }}>{'Decline'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={[styles.shadowBox, { alignItems: 'center', width: width / 5, borderRadius: 5, backgroundColor: 'rgb(158, 149, 254)' }]} activeOpacity={0.8}>
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 10
                                    }}>{'Message'}</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>11:48</Text>
                </View>


                <View style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                            <TouchableOpacity activeOpacity={0.8} style={styles.tipContainer}>
                                <Image source={message_notification} style={[styles.smallIcon, { tintColor: 'white' }]} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>Moris invited you to join "Night Pool Party" at Hotel Vilos</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 2 }}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('InvitedEvent') }}
                                    style={[styles.shadowBox, { alignItems: 'center', width: width / 5, borderRadius: 5 }]} activeOpacity={0.8}>
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 10
                                    }}>{'View'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={[styles.shadowBox, { alignItems: 'center', width: width / 5, borderRadius: 5, backgroundColor: 'rgb(158, 149, 254)' }]} activeOpacity={0.8}>
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 10
                                    }}>{'Message'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 15</Text>
                </View>

                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { this.props.navigation.navigate('ChatBox') }}
                    style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>Risa Kristy</Text>
                            <Text style={styles.desc}>Was very nice time with you</Text>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 16</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { this.props.navigation.navigate('ChatBox') }}
                    style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>Risa Kristy</Text>
                            <Text style={styles.desc}>Was very nice time with you</Text>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 16</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { this.props.navigation.navigate('ChatBox') }}
                    style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>John Doe showed interest in your profile</Text>
                            <Text style={styles.desc}>Was very nice time with you</Text>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 16</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { this.props.navigation.navigate('ChatBox') }}
                    style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>Risa Kristy</Text>
                            <Text style={styles.desc}>Was very nice time with you</Text>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 16</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { this.props.navigation.navigate('ChatBox') }}
                    style={styles.itemContainer}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>Risa Kristy</Text>
                            <Text style={styles.desc}>Was very nice time with you</Text>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 16</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => { this.props.navigation.navigate('ChatBox') }}
                    style={[styles.itemContainer, { borderBottomWidth: 1 }]}>
                    <View style={styles.itemSubContainer}>
                        <View style={styles.photoContainer}>
                            <Image source={photo} style={styles.photo} />
                        </View>
                        <View style={styles.descGroup}>
                            <Text style={styles.name}>Risa Kristy</Text>
                            <Text style={styles.desc}>Was very nice time with you</Text>
                        </View>
                    </View>
                    <Text style={[styles.desc, { alignSelf: 'flex-end', fontSize: 15 }]}>Mar. 16</Text>
                </TouchableOpacity>

                <View style={{ height: 60, backgroundColor: 'white' }} />
            </Content>

        );
    }
}

export default DashboardMessage;
