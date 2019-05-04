import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
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
        backgroundColor: '#fff'
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
    }
});

export default styles;
