import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import edit from "../../../../assets/edit.png";
import styles from "./styles";
import { Footer, CheckBox } from "native-base";

class HomeFooter extends Component<NavigationScreenProps> {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8}
                    style={[{ marginTop: -60, alignSelf: 'flex-end' }, styles.iconContainer]}>
                    <Image source={edit} style={[styles.iconImg, { tintColor: 'white' }]} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeFooter;
