import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content, Icon } from "native-base"
import styles from "./styles";
import _ from "lodash";
import clock from '../../../assets/clock.png';
import card_cross from '../../../assets/card_cross.png';
import arrow from '../../../assets/arrow_back.png';
import birthCake from '../../../assets/birthdayCakePiece.png';
import menu from '../../../assets/menu.png';
import my_location from '../../../assets/my_location.png';
import scale_icon from '../../../assets/scale.png';
import gender from '../../../assets/gender.png';
import height_png from '../../../assets/height.png';
import cheers from '../../../assets/cheers.png';
import smoke from '../../../assets/smoke.png';
import education from '../../../assets/education.png';
import portfolio from '../../../assets/portfolio.png';
import question from '../../../assets/question.png';
import houseOutline from '../../../assets/houseOutline.png';
import quote from '../../../assets/quote.png';
import fullSize from '../../../assets/fullSize.png';
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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
import { GiftedChat, Send, Composer, Actions, Bubble, Message, Avatar } from "react-native-gifted-chat";
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
export class InvitedEventDetail extends Component<NavigationScreenProps> {
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
    get pagination() {
        const { routes, index } = this.state;
        return (
            <Pagination
                dotsLength={routes.length}
                activeDotIndex={index}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    _renderItem({ item, index }) {
        return (
            <View style={{ width: '100%', height: width / 361 * 297, backgroundColor: '#fff' }}>
                <View style={[styles.posImgContainer, { borderRadius: 1 }]}>
                    <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={photo} />
                </View>
                <TouchableOpacity activeOpacity={0.8}
                    style={[styles.iconContainer, {
                        position: 'absolute', bottom: 10, right: 0, borderRadius: 2, width: 30,
                        height: 30,
                    }]}>
                    <Image source={fullSize} style={styles.iconImg} />
                </TouchableOpacity>
            </View>);
    }

    render() {
        return (
            <Container style={styles.container}>

                <Content>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.pop(); }}
                        activeOpacity={0.8}
                        style={[styles.iconContainer, { position: 'absolute', top: 20, right: 0, backgroundColor: '#dadada' }]}>
                        <Image source={card_cross} style={{ tintColor: 'white', width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <View style={{ width: width }} >
                        <View style={{ width: '100%', height: width / 361 * 297, backgroundColor: '#fff' }}>
                            <View style={[styles.posImgContainer, { borderRadius: 1 }]}>
                                <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={photo} />
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'column', alignItems: 'center', width: width }}>

                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, padding: 10 }}>
                            <View style={{ flexDirection: 'column', width: (width - 20) / 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5, color: 'rgb(158, 149, 254)' }}>24-25</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5, color: 'black' }}>April</Text>
                            </View>
                            <Text style={{ fontSize: 20, width: (width - 20) / 4 * 3, fontStyle: 'italic', color: 'grey' }}>I want to go for hiking in the Rocky Mountain</Text>

                        </View>
                        <View style={[styles.descRow, { borderTopWidth: 1, borderTopColor: '#dadada' }]}>
                            <Image source={place} style={styles.smallIcon} />
                            <Text
                                style={styles.smallText}>{'Maha Creek, Texas, USA'}</Text>
                        </View>
                        <View style={styles.descRow}>
                            <Image source={appointment} style={styles.smallIcon} />
                            <Text
                                style={styles.smallText}>{'Apr. 24'}</Text>
                        </View>
                        <View style={[styles.descRow, { borderBottomWidth: 1, borderBottomColor: '#dadada' }]}>
                            <Image source={clock} style={styles.smallIcon} />
                            <Text
                                style={styles.smallText}>{'2:30 PM - 7:30 PM'}</Text>
                        </View>

                        <View style={{ alignItems: 'center', height: width / 4, width: width, alignContent: 'center', justifyContent: 'center' }}>
                            <View style={[styles.photoContainer, { position: 'absolute' }]}>
                                <Image source={photo} style={styles.photo} />
                            </View>
                        </View>


                        <Text style={[styles.desc, { width: width - 40, textAlign: 'center', fontWeight: 'bold', color: 'black' }]}>Alisa Craig Invited you to join the activity</Text>
                        <Text style={[styles.desc, { width: width - 40, textAlign: 'center', marginTop: 10 }]}>show your interest by clicking the below Button or show your interest</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', backgroundColor: '#fff', padding: 10, paddingBottom: 50 }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity activeOpacity={0.8}
                                    style={[styles.iconContainer]}
                                    onPress={() => {
                                        this.setState({ popup: true });
                                    }}>
                                    <Image source={like} style={styles.iconImg} />
                                </TouchableOpacity>
                                <Text style={[styles.desc, { color: 'rgb(158, 149, 254)' }]}>43 Interested</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity activeOpacity={0.8}
                                    style={[styles.iconContainer]}>
                                    <Image source={send} style={styles.iconImg} />
                                </TouchableOpacity>
                                <Text style={[styles.desc, { color: 'rgb(158, 149, 254)' }]}>43 Invites</Text>
                            </View>
                        </View>
                    </View>


                    <Text style={{
                        marginTop: 10, marginLeft: 10, color: 'black',
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>{'SUGGESTED ACTIVITIES'}</Text>

                    <View style={{ flexDirection: 'column', alignItems: 'center', width: width }}>

                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10 }}>
                            <Text style={{ paddingLeft: 20, paddingRight: 20, fontSize: 20, width: width, fontStyle: 'italic', color: 'black' }}>I want to go for hiking in the Rocky Mountain</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={place} style={[styles.smallIcon, { tintColor: 'grey' }]} />
                                <Text style={[styles.smallText, { fontSize: 15, color: 'grey', width: width / 2 - 50 }]}>Circuit of Americas</Text>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={appointment} style={[styles.smallIcon, { tintColor: 'grey' }]} />
                                <Text style={[styles.smallText, { fontSize: 15, color: 'grey', width: width / 2 - 50 }]}>Apr.12-Apr.14</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', height: (width - 10) / 344 * 150 + 50, backgroundColor: '#fff', padding: 10, paddingBottom: 50 }}>
                            <View style={styles.posImgContainer}>
                                <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={back} />
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: 0, right: 0,
                                    padding: 5,
                                    backgroundColor: 'rgb(158, 149, 254)',
                                    borderTopRightRadius: 5,
                                    borderBottomLeftRadius: 5
                                }}>
                                    <Image source={clock} style={[styles.smallIcon, { tintColor: 'white' }]} />
                                    <Text
                                        style={[styles.smallText, { color: 'white' }]}>{'7.30 AM'}</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}
                                style={[{ marginTop: -20 }, styles.iconContainer]}>
                                <Image source={like} style={styles.iconImg} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                                style={[{ marginTop: -40, alignSelf: 'flex-end' }, styles.iconContainer]}>
                                <Image source={send} style={styles.iconImg} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', width: width }}>

                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10 }}>
                            <Text style={{ paddingLeft: 20, paddingRight: 20, fontSize: 20, width: width, fontStyle: 'italic', color: 'black' }}>I want to go for hiking in the Rocky Mountain</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={place} style={[styles.smallIcon, { tintColor: 'grey' }]} />
                                <Text style={[styles.smallText, { fontSize: 15, color: 'grey', width: width / 2 - 50 }]}>Circuit of Americas</Text>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={appointment} style={[styles.smallIcon, { tintColor: 'grey' }]} />
                                <Text style={[styles.smallText, { fontSize: 15, color: 'grey', width: width / 2 - 50 }]}>Apr.12-Apr.14</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', height: (width - 10) / 344 * 150 + 50, backgroundColor: '#fff', padding: 10, paddingBottom: 50 }}>
                            <View style={styles.posImgContainer}>
                                <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={back} />
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: 0, right: 0,
                                    padding: 5,
                                    backgroundColor: 'rgb(158, 149, 254)',
                                    borderTopRightRadius: 5,
                                    borderBottomLeftRadius: 5
                                }}>
                                    <Image source={clock} style={[styles.smallIcon, { tintColor: 'white' }]} />
                                    <Text
                                        style={[styles.smallText, { color: 'white' }]}>{'7.30 AM'}</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}
                                style={[{ marginTop: -20 }, styles.iconContainer]}>
                                <Image source={like} style={styles.iconImg} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                                style={[{ marginTop: -40, alignSelf: 'flex-end' }, styles.iconContainer]}>
                                <Image source={send} style={styles.iconImg} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 60, backgroundColor: 'white' }} />
                </Content>
                <HomeFooter navigation={this.props.navigation} />
            </Container >
        );
    }
}

export default InvitedEventDetail;
