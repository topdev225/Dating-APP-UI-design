import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import home_footer from "../../../../assets/home_footer.png";
import message_footer from "../../../../assets/message_footer.png";
import profile_footer from "../../../../assets/profile_footer.png";
import styles from "./styles";
import { Footer } from "native-base";

class HomeFooter extends Component<NavigationScreenProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
        };
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={{ alignItems: 'center' }}
                    onPress={() => {
                        this.setState({ index: 0 });
                        this.props.setPage(0);
                    }}
                    activeOpacity={0.8}>
                    <Image source={home_footer} style={[styles.footerImg, this.state.index == 0 ? { tintColor: 'rgb(158, 149, 254)' } : { tintColor: 'black' }]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}
                    onPress={() => {
                        this.setState({ index: 1 });
                        this.props.setPage(1);
                    }}
                    activeOpacity={0.8}>
                    <Image source={message_footer} style={[styles.footerImg, this.state.index == 1 ? { tintColor: 'rgb(158, 149, 254)' } : { tintColor: 'black' }]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}
                    onPress={() => {
                        this.setState({ index: 2 });
                        this.props.setPage(2);
                    }}
                    activeOpacity={0.8}>
                    <Image source={profile_footer} style={[styles.footerImg, this.state.index == 2 ? { tintColor: 'rgb(158, 149, 254)' } : { tintColor: 'black' }]} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeFooter;
