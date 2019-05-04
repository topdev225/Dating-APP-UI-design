import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

class GenderScreen extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            myGenderIndex: 0,
            interestedGenderIndex: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', position: 'absolute', top: 20, alignItems: 'center' }}>
                    <Text style={{
                        color: '#000',
                        paddingLeft: 25,
                        paddingRight: 25,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>{'I\'M A'}</Text>
                    <TouchableOpacity
                        onPress={() => { this.setState({ myGenderIndex: 0 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.myGenderIndex == 0 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'MAN'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.setState({ myGenderIndex: 1 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.myGenderIndex == 1 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'WOMAN'}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000',
                        marginTop: 15,
                        paddingLeft: 25,
                        paddingRight: 25,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>{'I\'M INTERESTED IN'}</Text>
                    <TouchableOpacity
                        onPress={() => { this.setState({ interestedGenderIndex: 0 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.interestedGenderIndex == 0 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'MAN'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.setState({ interestedGenderIndex: 1 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.interestedGenderIndex == 1 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'WOMAN'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.setState({ interestedGenderIndex: 2 }) }}
                        style={[styles.shadowBoxItemBtn, { alignItems: 'center' }]} activeOpacity={0.8}>
                        <Text
                            style={[{
                                color: '#000',
                                paddingLeft: 25,
                                paddingRight: 25,
                                fontWeight: 'bold',
                                fontSize: 20
                            },
                            this.state.interestedGenderIndex == 2 ? { color: 'rgb(158, 149, 254)' } : { color: 'black' }]}>{'MAN & WOMAN'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default GenderScreen;
