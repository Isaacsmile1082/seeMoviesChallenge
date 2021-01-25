import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

    titleBackground: {
        backgroundColor: '#8961EC',
        marginBottom: '5%'
    },
    title: {
        fontSize:26,
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '8%',
        color: 'white'
    },
    secondContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    cachedImage: {
        width: '50%',
        height: 300,
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%'
    },
    thirdContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    textGenre: {
        fontSize: 22
    },
    textReleaseDate:{
        fontSize: 22
    },
    fourthContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    textOverview: {
        marginTop:'5%',
        paddingLeft: '4%',
        fontSize: 13
    },
    textRunTime: {
        fontSize: 16
    },
    textVote: {
        fontSize: 18
    }

})