import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./styles";

class EducationScreen extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', position: 'absolute', top: 20, alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => { this.setState({ index: 0 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.index == 0 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'HIGH SCHOOL'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.setState({ index: 1 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.index == 1 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'UNDERGARD'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.setState({ index: 2 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.index == 2 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'POSTGARD'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.setState({ index: 3 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.index == 3 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'PREFER NOT TO SAY'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default EducationScreen;
