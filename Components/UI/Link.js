//import liraries

import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from '../../stylesVariables';
// import {styles} from '../../../stylesVariables';

// create a component
const Link = ({ action, children}) => {
    return (
        <TouchableOpacity style={style.container}onPress={action} >
            <Text style={style.text}>{children}</Text>
        </TouchableOpacity>
    );
};

// define your styles
// const contextStyle = styles();
const style = StyleSheet.create({
    container: {
        marginTop:15, 
        shadowColor: 'black'
    },
    text:{
        color:'blue'
    }
});

//make this component available to the app
export default Link;
