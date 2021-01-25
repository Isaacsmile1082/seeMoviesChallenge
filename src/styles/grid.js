import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container: {
        flex:1,
        flexDirection: 'row'
    },
    containerBntSort: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '5%',
        marginBottom: '5%'
    },
    btnSort: {
        paddingRight: 10
    },
    containerPost: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    poster: {
        width: '45%',
        height: 300,
        marginBottom: '15%'
    },
    cachedImage: {
        width: '100%',
        height: 300,
        borderRadius: 10
    }
})