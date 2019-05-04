import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import card_cross from "../../../../assets/card_cross.png";
import quote from "../../../../assets/quote.png";
import happiness from "../../../../assets/happiness.png";
import styles from "./styles";
import { Footer, Input } from "native-base";
import btnBack from "../../../../assets/specialBtnBack.png"

class PopupSendLike extends Component<NavigationScreenProps> {

    render() {
        return (
            <View style={styles.container}>
                <View style={[{ flexDirection: 'column', }, styles.subContainer]}>
                    <Image source={card_cross} style={{ alignSelf: 'flex-end', width: 20, height: 20, resizeMode: 'contain' }} />
                    <Image source={quote} style={{ alignSelf: 'flex-start', width: 20, height: 20, resizeMode: 'contain' }} />
                    <Text style={{ width: '100%', paddingLeft: 20, paddingRight: 20, fontWeight: 'bold', color: 'black', fontSize: 20 }}>I'M REGULAR AT</Text>
                    <Text style={{ width: '100%', paddingLeft: 20, paddingRight: 20, fontStyle: 'italic', color: 'grey', fontSize: 25 }}>
                        Making sure a compliment people more...
                    </Text>
                </View>
                <View
                    style={styles.facebookStyleButton}>
                    <Image source={btnBack} style={{ resizeMode: 'stretch', width: '100%', height: '100%', position: 'absolute', top: 0 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
                        {/* <Text>{'Add your comment'}</Text> */}
                        <Input placeholder={'Add your comment'} />
                        <Image source={happiness} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                    </View>
                </View>
                <TouchableOpacity style={[styles.shadowBoxItemBtn, { alignSelf: 'flex-start', justifyContent: 'center' }]} activeOpacity={0.8}>
                    <Text style={{
                        color: '#fff',
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>{'Send Like'}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default PopupSendLike;
