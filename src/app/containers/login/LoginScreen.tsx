import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Button, TextInput, Platform, Dimensions, StatusBar } from "react-native";
import { NavigationScreenProps, TabScene } from "react-navigation";
import { bool } from "prop-types";

const { width, height } = Dimensions.get('window');
class LoginScreen extends Component<NavigationScreenProps> {


    render() {
        return (
            <View style={styles.container}>
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
                <Text style={styles.headerTitile}>{'REGISTER WITH PHONE'}</Text>
                <Text>{'Your name'}</Text>
                <TextInput>{'Your Display Name'}</TextInput>
            </View>
        );
    }
}

export default LoginScreen;
