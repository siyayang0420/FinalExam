import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    bg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
    },
    bg_PopUp:{
        justifyContent:'center',
        alignItems:'center',
    },
    card:{
        width:'90%',
        height:100,
        borderRadius:15,
        backgroundColor:'#ffffff',
        shadowColor:'#000000',
        shadowOpacity:0.13,
        shadowOffset:{y:0,x:5},
        shadowRadius:9,
        resizeMode:"cover",
        // position:'absolute'
    },
    card_PopUp:{
        width:330,
        height:350,
        borderRadius:15,
        backgroundColor:'#ffffff',
        shadowColor:'#000000',
        shadowOpacity:0.13,
        shadowOffset:{y:0,x:5},
        shadowRadius:9,
        alignItems:'center',
        top:0
    },
    Img:{
        borderRadius:15,
        width:"100%",
        height:"100%"
    },
    Img_PopUp:{
        width:330,
        height:300,
        borderRadius:15
    },
    profile_PopUp:{
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:'#fab',
        marginTop:30,
        marginBottom:40
    },
    txt_PopUp:{
        width:200,
        height:10,
        backgroundColor:'#d3d3d3',
        marginBottom:20,
        borderRadius:20
    },
    desc_PopUp:{
        width:200,
        height:80,
        borderRadius:5,
        backgroundColor:'#ECECEC'
    },
    btn:{
        width:330,
        height:50,
        backgroundColor:'#412A80',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
    },
    txtBtn:{
        color:'#ffffff',
        fontSize:20
    }
    
})

export default styles;