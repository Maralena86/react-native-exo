import { StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from '../../../stylesVariables';

const Button = ({action, children}) => {
    return (
        <TouchableOpacity onPress={action} style={style.container}>
            {children}
        </TouchableOpacity>
    );
};

const contextStyle = styles()
const style = StyleSheet.create({
    container:{
        backgroundColor: contextStyle.primaryColorDark,
        padding: 10,
        borderRadius:10,
        width:200,
        display:'flex',
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default Button;
