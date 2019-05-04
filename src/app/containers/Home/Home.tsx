import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, Platform } from "react-native";
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
import clock from '../../../assets/clock.png';
import colors from '../../../Colors';
import Carousel from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
import Dashboard from './Dashboard';
import DashboardMessage from './DashboardMessage';
import MyProfile from './MyProfile';
const { width, height } = Dimensions.get('window');



export class Home extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
            popup: false,

        };
    }
    setPage = (index) => {
        this.setState({ index });
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
                {this.state.index == 0 ?
                    <Dashboard navigation={this.props.navigation} /> :
                    this.state.index == 1 ? <DashboardMessage navigation={this.props.navigation} /> :
                        <MyProfile navigation={this.props.navigation} />}

                <HomeFooter navigation={this.props.navigation} setPage={this.setPage} />
                {this.state.popup &&
                    <PopupSendLike navigation={this.props.navigation} />}
            </Container>
        );
    }
}

export default Home;
