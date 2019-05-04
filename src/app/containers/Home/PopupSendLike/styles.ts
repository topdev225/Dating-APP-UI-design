import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        width: '80%',
        backgroundColor: '#fff0',
        alignItems: 'center',
        alignSelf: 'center',

        overflow: 'hidden'
    },
    subContainer: {
        width: '100%',
        paddingLeft: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#fff',
        paddingBottom: 50,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: '#dadadada',
        paddingRight: 10,
        paddingTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
        overflow: 'hidden'
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
    facebookStyleButton: {
        width: '100%',
        overflow: 'visible',
    },
    footerImg: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    shadowBoxItemBtn: {
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
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
    }
});

export default styles;
