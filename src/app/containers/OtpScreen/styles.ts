import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row', padding: 5
    },
    container: {
        flex: 1, backgroundColor: '#ffffff', alignItems: 'center',
    },
    headerTitile: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        color: '#000000', textAlign: 'center'
    },
    backButton: {
        margin: 10,
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    label: {
        color: '#000000',
        textAlign: 'center',
        margin: 15,
        opacity: 0.44,
        fontWeight: 'bold'
    },
    text: {
        color: '#000000',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
    },
    items: {
        padding: 30
    },
    buttonStyle: {
        borderColor: '#9e95fe',
        borderStyle: "solid",
        borderWidth: 1.3,
        borderRadius: 8,
        marginTop: 20,
        width: 150,
        alignSelf: 'center'
    },
    getStartButton: {
        padding: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#9e95fe'
    }, facebookStyleButton: {
        width: '100%', resizeMode: 'contain'
    }, buttonText: {
        paddingTop: 8,
        paddingBottom: 25,
        fontWeight: 'bold',
        textAlign: 'center', color: '#fff'
    },
    pinView: {
        backgroundColor: '#dadada', width: 40, height: 40, color: '#000', margin: 10
    },
    line: {
        height: 1.3,
        opacity: 0.5,
        backgroundColor: "#1a1a1a",
        marginTop: 20
    }, pinViewInput: {borderWidth: 0, backgroundColor: '#dadada', fontWeight: '900', fontSize: 25}
});

export default styles;
