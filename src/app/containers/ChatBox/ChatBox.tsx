import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content, Icon } from "native-base"
import styles from "./styles";
import _ from "lodash";
import clock from '../../../assets/clock.png';
import arrow from '../../../assets/arrow_back.png';
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
import { GiftedChat, Send, Composer, Actions, Bubble, Message, Avatar } from "react-native-gifted-chat";
const { width, height } = Dimensions.get('window');

export class ChatBox extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        };
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 4,
                    text: "I am fine thanks",
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                },
                {
                    _id: 3,
                    text: "How are you feeling now?",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                },
                {
                    _id: 2,
                    text: "Hello John",
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                },
                {
                    _id: 1,
                    text: "Hello Lisa",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                }
            ]
        });
    }
    renderSend(props) {
        return (
            <View style={{ flexDirection: 'row', height: '100%', alignContent: 'center', paddingRight: 10 }}>
                <Icon name='plus' type='FontAwesome5' style={styles.inputIcon} />
                <Send
                    {...props}>
                    <View style={{ flexDirection: 'row', height: '100%', alignContent: 'center' }}>
                        <Icon name='send-o' type='FontAwesome' style={styles.inputIcon} />
                    </View>
                </Send>
            </View>
        );
    }
    renderActions(props) {
        return (
            <View style={{ marginLeft: 10, flexDirection: 'row', height: 40, width: 40, borderRadius: 25, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(223, 222, 222)' }}>
                <Icon name='keyboard-o' type='FontAwesome' style={[styles.inputIcon, { paddingHorizontal: 0, alignSelf: 'center' }]} />
            </View>
        );
    }



    renderAvatar(props) {
        return null;
    }
    renderCustomView(props) {
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 10 }}>
                <Avatar {...props} imageStyle={{ borderWidth: 2, borderColor: 'red' }} />
                <Bubble {...props} />
            </View >
        );
    }
    renderBubble(props) {
        const currentUserID = props.currentMessage.user._id;
        let previoustUserIDTemp = 0;
        if (props.previousMessage.user === undefined)
            previoustUserIDTemp = -1;
        else
            previoustUserIDTemp = props.previousMessage.user._id;
        const previoustUserID = previoustUserIDTemp;
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 10 }}>
                <View
                    style={[styles.photoContainer,
                    currentUserID == previoustUserID ? { height: 0, marginBottom: 5, } : {},
                    currentUserID == 1 ? {
                        alignSelf: 'flex-end'
                    } : { alignSelf: 'flex-start' }]}>
                    <Image source={photo}
                        style={[styles.photo,
                        currentUserID == previoustUserID ? { height: 0 } : {}]} />
                </View>
                <Bubble {...props} />
            </View >
        );
    }
    renderMessage(props) {
        return (
            <View style={{ flexDirection: 'column', alignContent: 'center', paddingRight: 10 }}>
                <Message {...props} />
            </View >
        );
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
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.pop(); }}
                        activeOpacity={0.8}>
                        <Image source={arrow} style={{ tintColor: 'black', width: 30, height: 30, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgb(95, 199, 108)', marginRight: 5 }} />
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Lisa Kristy</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => { }}
                        activeOpacity={0.8}>
                        <Image source={menu} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1
                    }}
                    showUserAvatar={false}
                    renderBubble={this.renderBubble}
                    renderAvatar={this.renderAvatar}
                    renderMessage={this.renderMessage}
                    // renderCustomView={this.renderCustomView}
                    // renderMessageText={this.renderMessage}
                    renderSend={this.renderSend}
                    renderActions={this.renderActions} />
                {/* <Content>
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
                </Content> */}

                {/* <HomeFooter navigation={this.props.navigation} /> */}
            </Container>
        );
    }
}

export default ChatBox;
