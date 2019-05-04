import {StyleSheet} from "react-native";
import colors from "../../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#ffffff'
    },
    topLogoContiner: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10
    },
    boottmView: {
        flex: 1,
        position: 'absolute',
        bottom: 35,
    },
    phoneStyle: {
        color: '#1a1a1a',
        opacity: 0.44,
        padding:2
    },
    infoText: {
        color: '#1a1a1a',
        opacity: 0.44,
        textAlign: 'center'
    },
    facebookButton: {
        marginBottom: 25
    },
    logoImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',

    }, 
    facebookStyleButton: {
        width: '100%', resizeMode: 'contain'
    }, buttonText: {
        paddingTop: 8,
        paddingBottom: 25,
        fontWeight: 'bold',
        textAlign: 'center', color: '#fff'
    },
    layer9: {
        width: 62,
        height: 1.3,
        opacity: 0.5,
        backgroundColor: "#1a1a1a"
    },
    phoneContainer: {
        alignItems: 'center',
        flex: 1,
        marginBottom:20,
        marginTop:5
    },
    progressCustomStyles: {
        backgroundColor: colors.periwinkleBlue,
        borderRadius: 10,

    }
})
;

export default styles;
