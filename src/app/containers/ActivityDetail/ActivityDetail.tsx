import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content, Icon } from "native-base"
import styles from "./styles";
import _ from "lodash";
import clock from '../../../assets/clock.png';
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
export class ActivityDetail extends Component<NavigationScreenProps> {
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
                        style={{ position: 'absolute', top: 20, left: 20, zIndex: 10000 }}>
                        <Image source={arrow} style={{ tintColor: 'white', width: 30, height: 30, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <View style={{ width: width }} >
                        <Carousel
                            data={this.state.routes}
                            renderItem={this._renderItem}
                            sliderWidth={width}
                            sliderHeight={width / 361 * 297}
                            itemWidth={width}
                            itemHeight={width / 361 * 297}
                            layout={'default'}
                        />
                        <View style={{ position: 'absolute', bottom: 0, width: width }}>
                            {this.pagination}
                        </View>
                    </View>


                    <View style={{ flexDirection: 'column', alignItems: 'center', width: width }}>

                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, padding: 10 }}>
                            <View style={{ flexDirection: 'column', width: (width - 20) / 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5, color: 'rgb(158, 149, 254)' }}>24</Text>
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
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', position: 'absolute' }}>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.6,
                                    height: width / 5 * 0.6,
                                    borderRadius: width / 10 * 0.6,
                                    overflow: 'hidden'
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.6,
                                        height: width / 5 * 0.6,
                                        borderRadius: width / 10 * 0.6,
                                    }]} />
                                    <View style={{ width: width / 5 * 0.6, height: width / 5 * 0.6, backgroundColor: '#888888aa', position: 'absolute', zIndex: 200000 }} />
                                </View>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.6,
                                    height: width / 5 * 0.6,
                                    borderRadius: width / 10 * 0.6,
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.6,
                                        height: width / 5 * 0.6,
                                        borderRadius: width / 10 * 0.6,
                                    }]} />
                                </View>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.6,
                                    height: width / 5 * 0.6,
                                    borderRadius: width / 10 * 0.6,
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.6,
                                        height: width / 5 * 0.6,
                                        borderRadius: width / 10 * 0.6,
                                    }]} />
                                </View>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.6,
                                    height: width / 5 * 0.6,
                                    borderRadius: width / 10 * 0.6,
                                    overflow: 'hidden'
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.6,
                                        height: width / 5 * 0.6,
                                        borderRadius: width / 10 * 0.6,
                                    }]} />
                                    <View style={{ width: width / 5 * 0.6, height: width / 5 * 0.6, backgroundColor: '#888888aa', position: 'absolute', zIndex: 200000 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', position: 'absolute' }}>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.7,
                                    height: width / 5 * 0.7,
                                    borderRadius: width / 10 * 0.7,
                                    overflow: 'hidden'
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.7,
                                        height: width / 5 * 0.7,
                                        borderRadius: width / 10 * 0.7,
                                    }]} />
                                    <View style={{ width: width / 5 * 0.7, height: width / 5 * 0.7, backgroundColor: '#aaaaaa88', position: 'absolute', zIndex: 200000 }} />
                                </View>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.7,
                                    height: width / 5 * 0.7,
                                    borderRadius: width / 10 * 0.7,
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.7,
                                        height: width / 5 * 0.7,
                                        borderRadius: width / 10 * 0.7,
                                    }]} />
                                </View>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.7,
                                    height: width / 5 * 0.7,
                                    borderRadius: width / 10 * 0.7,
                                    overflow: 'hidden'
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.7,
                                        height: width / 5 * 0.7,
                                        borderRadius: width / 10 * 0.7,
                                    }]} />
                                    <View style={{ width: width / 5 * 0.7, height: width / 5 * 0.7, backgroundColor: '#aaaaaa88', position: 'absolute', zIndex: 200000 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', position: 'absolute' }}>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.8,
                                    height: width / 5 * 0.8,
                                    borderRadius: width / 10 * 0.8,
                                    overflow: 'hidden'
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.8,
                                        height: width / 5 * 0.8,
                                        borderRadius: width / 10 * 0.8,
                                    }]} />
                                    <View style={{ width: width / 5 * 0.8, height: width / 5 * 0.8, backgroundColor: '#cccccc44', position: 'absolute', zIndex: 200000 }} />
                                </View>
                                <View style={[styles.photoContainer, {
                                    width: width / 5 * 0.8,
                                    height: width / 5 * 0.8,
                                    borderRadius: width / 10 * 0.8,
                                    overflow: 'hidden'
                                }]}>
                                    <Image source={photo} style={[styles.photo, {
                                        width: width / 5 * 0.8,
                                        height: width / 5 * 0.8,
                                        borderRadius: width / 10 * 0.8,
                                    }]} />
                                    <View style={{ width: width / 5 * 0.8, height: width / 5 * 0.8, backgroundColor: '#cccccc44', position: 'absolute', zIndex: 200000 }} />
                                </View>
                            </View>
                            <View style={[styles.photoContainer, { position: 'absolute' }]}>
                                <Image source={photo} style={styles.photo} />
                            </View>
                        </View>


                        <Text style={[styles.desc, { width: width - 40, textAlign: 'center' }]}>Members are showing interest in your activity</Text>
                        <Text style={[styles.desc, { width: width - 40, textAlign: 'center', marginTop: 10 }]}>share more for more interest</Text>

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
                    }}>{'ACTIVITY DESCRIPTION'}</Text>

                    <Text style={{
                        width: width,
                        padding: 10,
                        color: 'grey',
                        fontStyle: 'italic',
                        fontSize: 15
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

                    <View style={{ height: 60, backgroundColor: 'white' }} />
                </Content>
                <HomeFooter navigation={this.props.navigation} />
            </Container >
        );
    }
}

export default ActivityDetail;
