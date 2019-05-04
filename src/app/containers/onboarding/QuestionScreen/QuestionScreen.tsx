import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, TouchableOpacity, Dimensions, Image, Button, Touchable } from "react-native";
import styles from "./styles";
import Carousel from 'react-native-snap-carousel';
import quote from '../../../../assets/quote.png';
import cross from '../../../../assets/cross.png';
const { width, height } = Dimensions.get('window');
class QuestionScreen extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            entry: [1, 2, 3]
        }
    }
    renderItem(item, props) {
        console.log('---------------------------');
        console.log(props);
        return (
            <View
                // onTouchStart={() => this.props.enableParentSnap(false)}
                // onTouchCancel={() => { console.log("cancel") }}
                // onTouchMove={() => this.props.enableParentSnap(false)}
                // onTouchEnd={() => this.props.enableParentSnap(true)}
                // onTouchCancel={() => this.props.enableParentSnap(true)}
                // onTouchEndCapture={() => this.props.enableParentSnap(true)}
                style={styles.slideitem}>
                <Image style={styles.quoat} source={quote} />
                <TouchableOpacity style={styles.crossContainer} activeOpacity={0.8}>
                    <Image style={styles.cross} source={cross} />
                </TouchableOpacity>
                <Text style={{
                    color: 'black',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 25
                }}>
                    I AM REGULAR AT
                    </Text>
                <Text style={{
                    color: 'grey',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontSize: 20
                }}>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </Text>

                <TouchableOpacity style={[styles.shadowBoxItemBtn, { alignItems: 'center', alignSelf: 'center' }]} activeOpacity={0.8}>
                    <Text style={{
                        color: 'rgba(61,39,255,0.2)',
                        paddingLeft: 25,
                        paddingRight: 25,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>{'ANSWER'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    costyle={styles.wrapper}
                    data={this.state.entry}
                    useScrollView={true}
                    renderItem={(item, props) => this.renderItem(item, this.props)}
                    sliderWidth={width}
                    sliderHeight={(width - 40) / 290 * 317}
                    itemWidth={width - 40}
                />
            </View>
        );
    }
}

export default QuestionScreen;
