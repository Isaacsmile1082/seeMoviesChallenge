import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    title:{
        alignSelf: 'center',
        marginTop: '10%',
        color: 'white',
        fontSize: 28,
        fontWeight:'bold'
    },
    containerForm:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    imageBackGround:{
        width: '100%',
        height: '100%'
    },
    textInput: {
        width:'80%',
        marginLeft:"10%",
        color: 'white',
    },
    helperText: {
        width: '80%',
        marginLeft: '10%',
        color: 'white',
        position: 'relative',
        bottom: '5%',
        fontSize: 14
    },
    empytInput: {
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        borderRadius:20
    },
    containerSubmit: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    containerInputSign: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
    

})