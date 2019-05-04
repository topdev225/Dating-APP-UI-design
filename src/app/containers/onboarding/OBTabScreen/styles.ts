import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: width,
        ...Platform.select({
            ios: {
                height: height - 70 - 20,
            },
            android: {
                height: height - 70 - StatusBar.currentHeight,
            },
        }),
        paddingBottom: 20
    },
    scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitile: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#000000'
    },
    shadowBox: {
        flex: 0,
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
    shadowBoxNextBtn: {
        alignSelf: 'center',
        width: width - 40,
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
    },

});

export default styles;
