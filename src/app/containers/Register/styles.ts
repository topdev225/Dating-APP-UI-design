import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row', padding: 5
    },
    container: {
        backgroundColor: '#ffffff',
    },
    headerTitile: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 8,
        color: '#000000'
    },
    backButton: {
        margin: 10,
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    label: {
        color: '#b0b0b0',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    text: {
        color: '#000000',
        borderBottomColor: '#b0b0b0',
        borderTopColor: '#ffffff',
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderWidth: 2,
        marginBottom: 15,
        fontWeight: 'bold'

    },
    items: {
        paddingLeft: 35,
        paddingRight: 35
    },
    buttonStyle: {
        borderColor: '#9e95fe',
        borderStyle: "solid",
        borderWidth: 1.3,
        borderRadius: 8,
        marginTop: 20,
    },
    getStartButton: {
        padding: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#9e95fe'
    },
    facebookStyleButton: {
        width: '100%',
        resizeMode: 'contain'
    },
    buttonText: {
        paddingTop: 8,
        paddingBottom: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    orContainer: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    layer9: {
        width: 50,
        height: 1.3,
        opacity: 0.2,
        backgroundColor: "#1a1a1a"
    },
    bottmimage: {
        width: width,
        height: width / 956 * 945,
        resizeMode: 'contain',
        position: 'absolute',
        top: height / 3 * 2,
        zIndex: -1
    }
});

export default styles;
