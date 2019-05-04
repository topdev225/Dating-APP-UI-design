import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content } from "native-base"
import styles from "./styles";
import _ from "lodash";
import birthCake from '../../../assets/birthdayCakePiece.png';
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
import search from '../../../assets/search.png';
import colors from '../../../Colors';
import Carousel from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
const { width, height } = Dimensions.get('window');

export class InviteToActivity extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {

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
                <View style={{ flexDirection: 'row', width: width, padding: 20, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>INVITE TO ACTIVITY</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={search} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <Content>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={[styles.itemContainer, { borderBottomWidth: 1 }]}>
                        <View style={styles.itemSubContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.photoContainer}>
                                <Image source={photo} style={styles.photo} />
                            </TouchableOpacity>
                            <View style={styles.descGroup}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text style={styles.desc}>Sent invitation for "River Rofting"</Text>
                            </View>
                        </View>
                        <CheckBox />
                    </View>
                    <View style={{ height: 60, backgroundColor: 'white' }} />
                </Content>

                <HomeFooter navigation={this.props.navigation} />
            </Container>
        );
    }
}

export default InviteToActivity;
