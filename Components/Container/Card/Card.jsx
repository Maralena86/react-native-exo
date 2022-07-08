import {StyleSheet, View, Text} from 'react-native';

import {styles} from '../../../stylesVariables';

export default function Card(props) {
    console.log(props) 
    return ( 
            
        <View style={style.card}>
            <View style={style.container}>
                <Text style={style.title}>{props.title}</Text>
                <Text style={style.content}>{props.content}</Text>
           </View>
           <View style={style.inside}>
               {props.children}
           </View>
        </View>
    );
}
let contextStyle = styles();
const style =StyleSheet.create({
    card: {
        margin:10,
        border: '1px solid black',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.2,

    elevation: 4,
        
    },
    container: {
        backgroundColor: contextStyle.primaryColor, 
        padding:10, 
        borderTopLeftRadius:5, 
        borderTopRightRadius:5 
          
    },
    title:  {
        color: contextStyle.themTextColor, 
        fontSize:30,
        textAlign: 'center'
    },
    content:{
        color:contextStyle.themTextColor,
        textAlign: 'center'
    },
    inside:{
        padding:10
    }
    
}

)


