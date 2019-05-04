import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');
import colors from "../../../Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#ffffff'
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
    shadowBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#dadada'
    }
});

export default styles;
