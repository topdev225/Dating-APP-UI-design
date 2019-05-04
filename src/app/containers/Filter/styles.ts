import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');
import colors from "../../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#ffffff'
    },
    progressCustomStyles: {
        backgroundColor: colors.periwinkleBlue,
        borderRadius: 10,

    },
    shadowBoxItemBtn: {
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: 'rgb(158, 149, 254)',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    posImgContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    posImg: {
        tintColor: 'rgb(26, 26, 26)',
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    iconImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    iconContainer: {
        marginLeft: 20,
        marginRight: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: false,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    smallText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
    descRow: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width,
        padding: 10
    },
    smallIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: 'black'
    },
    photoShadowBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    shadowBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    photoContainer: {

        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    itemSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descGroup: {
        flexDirection: 'column',
        paddingLeft: 10,
        width: width / 2
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    desc: {
        fontSize: 15
    },
    photo: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
        resizeMode: 'cover',
    },
    itemContainer: {
        flexDirection: 'row', 
        width: '100%',
        justifyContent: 'space-between',
        borderBottomColor: '#b0b0b0',
        alignItems: 'center',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingVertical: 5
    },
    label: {
        color: '#b0b0b0',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingBottom: 0,
        marginTop: 10,
        paddingTop: 0
    },
    text: {
        color: '#000000',
        fontSize: 12,
        alignSelf: 'center',
        paddingBottom: 0,
        paddingVertical: 0,
        paddingTop: 0,
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
    bottmimage: { height: 300, marginTop: 5, resizeMode: 'contain' }
});

export default styles;
