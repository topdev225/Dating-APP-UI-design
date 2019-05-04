import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import map from '../../../../assets/map.png';
import pick from '../../../../assets/pick_position.png';

class LocationScreen extends Component<NavigationScreenProps> {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.mapContainer}>
                    <Image source={map} style={styles.map} />

                    <TouchableOpacity style={[styles.shadowBoxBtn, { flexDirection: 'row', alignItems: 'center' }]} activeOpacity={0.8}>

                        <Image source={pick}
                            style={{ height: 24, width: 24, resizeMode: 'contain', margin: 8 }} />
                        <Text style={{
                            color: '#000',
                            paddingLeft: 5,
                            paddingRight: 35,
                            fontWeight: 'bold',
                            fontSize: 15
                        }}>{'GO TO CURRENT LOCATION'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LocationScreen;
