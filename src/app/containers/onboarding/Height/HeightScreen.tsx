import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import { Text, TextInput, View, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import Picker from 'react-native-wheel-picker';
const { width, height } = Dimensions.get('window');
var PickerItem = Picker.Item;
class HeightScreen extends Component<NavigationScreenProps> {
    constructor(props) {
        super(props);
        this.state = {
            selectedFeet: 4,
            selectedInch: 5,
            feetList: ['1 Feet', '2 Feet', '3 Feet', '4 Feet', '5 Feet', '6 Feet', '7 Feet', '8 Feet', '9 Feet'],
            inchList: ['0 Inch', '1 Inch', '2 Inch', '3 Inch', '4 Inch', '5 Inch', '6 Inch', '7 Inch', '8 Inch', '9 Inch', '10 Inch', '11 Inch'],
        };
    }
    onPickerSelectFeet(index) {
        this.setState({
            selectedFeet: index,
        })
    }
    onPickerSelectInch(index) {
        this.setState({
            selectedInch: index,
        })
    }

    onAddFeet = () => {
        var name = '1'
        if (this.state.feetList.indexOf(name) == -1) {
            this.state.feetList.push(name)
        }
        this.setState({
            selectedItem: this.state.feetList.indexOf(name),
        })
    }
    onAddInch = () => {
        var name = '1'
        if (this.state.inchList.indexOf(name) == -1) {
            this.state.inchList.push(name)
        }
        this.setState({
            selectedItem: this.state.inchList.indexOf(name),
        })
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.pickerContainer}>
                    <Text style={{
                        width: '100%', textAlign: 'center', color: '#000',
                        backgroundColor: 'rgba(200,200,200,1)',
                        padding: 10,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>{'YOUR HEIGHT - 5\' 5\"'}</Text>
                    <View style={{ flexDirection: 'row', backgroundColor: 'rgba(61,39,255,0.2)', width: width - 40, height: width - 40 - 50 }}>
                        <Picker style={{ width: (width - 40) / 2, height: width - 40 - 50 }}
                            selectedValue={this.state.selectedFeet}
                            itemStyle={{ color: "black", fontSize: 25 }}
                            onValueChange={(index) => this.onPickerSelectFeet(index)}>
                            {this.state.feetList.map((value, i) => (
                                <PickerItem label={value} value={i} key={"money" + value} />
                            ))}
                        </Picker>
                        <Picker style={{ width: (width - 40) / 2, height: width - 40 - 50 }}
                            selectedValue={this.state.selectedInch}
                            itemStyle={{ color: "black", fontSize: 25 }}
                            onValueChange={(index) => this.onPickerSelectInch(index)}>
                            {this.state.inchList.map((value, i) => (
                                <PickerItem label={value} value={i} key={"money" + value} />
                            ))}
                        </Picker>
                    </View>
                    <View style={{ height: 100, width: width, backgroundColor: 'rgba(61,39,255,0.2)' }}></View>
                </View>
            </View>
        );
    }
}

export default HeightScreen;
