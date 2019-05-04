import styles from "./styles";
import React, {Component} from "react";
import {Text, View, ActivityIndicator} from "react-native";
import {NavigationScreenProps} from "react-navigation";

class LoadingScreen extends Component<NavigationScreenProps> {
    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate("Landing");
        }, 2000);
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
}

export default LoadingScreen;
