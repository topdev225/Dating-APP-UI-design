import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end',
        width: width,
        ...Platform.select({
            ios: {
                height: height - 70 - 20,
            },
            android: {
                height: height - 70 - StatusBar.currentHeight,
            },
        }),
        paddingTop: 40,
        backgroundColor: '#fff'
    },
    quoat: {
        position: 'absolute',
        width: 20,
        height: 20,
        top: 5,
        left: 5,
        resizeMode: 'contain'
    },
    crossContainer: {
        position: 'absolute',
        width: 20,
        height: 20,
        top: 0,
        right: 0,
    },
    cross: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    wrapper: {
        flex: 1,
        width: width - 40,
        // width: width / 40 * 35,
        height: height * 1.7 / 3,
        paddingTop: 15,
        paddingBottom: 15
    },
    slideitem: {
        width: width - 40,
        height: (width - 40) / 290 * 317,
        alignSelf: 'center',
        padding: 25,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#aaa'
        // ...Platform.select({
        //     ios: {
        //         shadowColor: 'rgba(61,39,255,0.2)',
        //         shadowOffset: {
        //             width: 5,
        //             height: 5
        //         },
        //         shadowRadius: 5,
        //         shadowOpacity: 0.8
        //     },
        //     android: {
        //         elevation: 8,
        //     },
        // }),
    },
    mapContainer: {
        position: 'absolute',
        alignItems: "center",
        top: 20,
        width: width - 40,
        height: width - 40,
        borderRadius: 5,
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
    map: {
        width: width - 40,
        height: width - 40,
        resizeMode: 'cover',
        borderRadius: 5
    },
    headerTitile: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#000000'
    },
    shadowBoxBtn: {
        position: 'absolute',
        top: width - 40 - 100,
        width: width - 100,
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
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
    shadowBoxNextBtn: {
        width: width - 40,
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
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
    shadowBoxItemBtn: {
        position: 'absolute',
        bottom: 20,
        width: width - 80,
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
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
    }
});

export default styles;
