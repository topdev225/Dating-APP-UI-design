import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content } from "native-base"
import styles from "./styles";
import _ from "lodash";
import match_back from '../../../assets/match_back.png';
import card_cross from '../../../assets/card_cross.png';
import gear from '../../../assets/gear.png';
import plus from '../../../assets/plus.png';
import pencil from '../../../assets/pencil.png';
import option from '../../../assets/option.png';
import diamond from '../../../assets/diamond.png';
import refer from '../../../assets/refer.png';
import arrow from '../../../assets/arrow.png';
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
import pos from '../../../assets//pos.png';
import photo from '../../../assets//photo.png';
import back from '../../../assets//back.png';
import remove_icon from '../../../assets//remove.png';
import heart_icon from '../../../assets//heart.png';
import like from '../../../assets//like.png';
import send from '../../../assets//send.png';
import filter from '../../../assets//filter.png';
import colors from '../../../Colors';
import Carousel from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
const { width, height } = Dimensions.get('window');

export class Match extends Component<NavigationScreenProps> {
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
                <Image source={match_back} style={{ width: width, height: width / 4 * 3, resizeMode: 'contain', position: 'absolute', bottom: 0 }} />
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
                <View>
                    <View style={{ flexDirection: 'row', width: width, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', alignSelf: 'center' }}>CONGRATES</Text>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => { this.props.navigation.pop(); }}
                            style={{ position: 'absolute', right: 20, alignSelf: 'center' }}>
                            <Image source={card_cross} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.desc, { width: '80%', fontSize: 15, textAlign: 'center', marginBottom: 20, alignSelf: 'center', fontWeight: 'bold' }]}>IT'S A MATCH</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={[styles.shadowBox, { width: width / 3, height: width / 3, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}>
                            <Image source={photo}
                                style={{ width: width / 3, height: width / 3, borderRadius: width / 6, resizeMode: 'cover' }} />
                        </View>
                        <Text style={[styles.desc, { width: '80%', fontSize: 15, textAlign: 'center', fontStyle: 'italic' }]}>You and John Doe both have liked the same</Text>
                        <View style={[styles.shadowBox, { width: width / 3, height: width / 3, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}>
                            <Image source={photo}
                                style={{ width: width / 3, height: width / 3, borderRadius: width / 6, resizeMode: 'cover' }} />
                        </View>
                    </View>
                </View>
                <HomeFooter navigation={this.props.navigation} />
            </Container>
        );
    }
}

export default Match;
