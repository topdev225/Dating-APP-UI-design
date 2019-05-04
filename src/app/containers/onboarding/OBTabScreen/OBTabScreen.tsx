import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Image, ScrollView, Text, View, Dimensions, StatusBar, TouchableOpacity, Platform } from "react-native";
import Carousel from 'react-native-snap-carousel';
import _ from "lodash";
import styles from './styles';
import my_location from '../../../../assets/my_location.png';
import gender from '../../../../assets/gender.png';
import height_png from '../../../../assets/height.png';
import cheers from '../../../../assets/cheers.png';
import smoke from '../../../../assets/smoke.png';
import education from '../../../../assets/education.png';
import question from '../../../../assets/question.png';
import LocationScreen from '../Location';
import GenderScreen from '../GenderScreen';
import DrinkScreen from '../DrinkScreen';
import SmokeScreen from '../SmokeScreen';
import EducationScreen from '../EducationScreen';
import HeightScreen from '../Height';
import QuestionScreen from '../QuestionScreen';
import { Container, Content } from "native-base";
const { width, height } = Dimensions.get('window');
console.ignoredYellowBox = ['Warning:'];
const TabbarMenu = [
    {
        id: 100,
        label: "My Location",
        img: my_location,

    },
    {
        id: 200,
        label: "Gender",
        img: gender,

    },
    {
        id: 300,
        label: "Height",
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


class OBTabScreen extends Component<NavigationScreenProps> {

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
        };
    }

    _renderItem({ item, index }) {
        console.log('--------------------')
        console.log(this);
        return (
            <View style={{
                ...Platform.select({
                    ios: {
                        height: height - 70 - 20,
                    },
                    android: {
                        height: height - 70 - StatusBar.currentHeight,
                    },
                }), backgroundColor: '#fff'
            }}>
                {item.type == 100 &&
                    <LocationScreen />
                }
                {item.type == 200 &&
                    <GenderScreen />
                }
                {item.type == 300 &&
                    <HeightScreen />
                }
                {item.type == 400 &&
                    <DrinkScreen />
                }
                {item.type == 500 &&
                    <SmokeScreen />
                }
                {item.type == 600 &&
                    <EducationScreen />
                }
                {item.type == 700 &&
                    <QuestionScreen enableParentSnap={this.enableParentSnap} />
                }
            </View>);
    }
    enableParentSnap = (flag) => {
        this.__carousel.enableSnap(flag);
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
                <View style={{ height: 70, width: width }}>
                    <ScrollView
                        ref={view => this._scrollView = view}
                        horizontal={true} showsHorizontalScrollIndicator={false} >
                        {_.map(TabbarMenu, (item, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8} key={item.id}
                                    style={[styles.shadowBox, { alignSelf: 'baseline', flexDirection: 'row', alignItems: 'center', width: width / 2 }]}
                                    onPress={() => {
                                        this.setState({ index: index });
                                        this._carousel.snapToItem(index, animated = true, fireCallback = true);
                                    }}>

                                    <Image source={item.img}
                                        style={[{ height: 24, width: 24, resizeMode: 'contain', margin: 8 },
                                        this.state.index == index ? { tintColor: 'rgb(158, 149, 254)' } : { tintColor: 'black' }]} />
                                    <View
                                        style={{ backgroundColor: '#dadada', width: 1, height: 30 }}
                                    />
                                    <Text
                                        style={[{
                                            width: width / 2 - 61,
                                            color: '#9e95fe',
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            textAlign: 'center'
                                        },
                                        this.state.index == index ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{item.label}</Text>
                                </TouchableOpacity>

                            );
                        })}
                    </ScrollView>
                </View>
                <Content>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.routes}
                        renderItem={this._renderItem}
                        onSnapToItem={(slideIndex) => {
                            this._scrollView.scrollTo({ x: slideIndex * (width / 2 + 20) });
                            this.setState({ index: slideIndex });
                        }}
                        sliderWidth={width}
                        sliderHeight={Platform.OS === 'android' ? height - 70 - StatusBar.currentHeight : height - 90}
                        itemWidth={width}
                        itemHeight={Platform.OS === 'android' ? height - 70 - StatusBar.currentHeight : height - 90}
                    />
                </Content>
                <TouchableOpacity
                    style={[styles.shadowBoxNextBtn, { alignItems: 'center' }]}
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>

                    <Text style={{
                        color: '#000',
                        paddingLeft: 25,
                        paddingRight: 25,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>{'NEXT'}</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}

export default OBTabScreen;
