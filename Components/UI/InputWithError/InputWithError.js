//import liraries
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useState } from 'react';

// create a component
const InputWithError= ({holder, valeur, action, errorMessage, type, isPassword}) => {console.log(TextInput)
    const [isHidden, setIsHidden] = useState(true);
    function toggleIsHidden(){
        setIsHidden(!isHidden);
    }
    return (
        
        <View style={styles.container}>
            <View style={{
                borderBottomColor:
                errorMessage ===""?'black':'red',
                backgroundColor:'#d3d3d3', padding:10, fontSize:20,
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '2px solid black',
                justifyContent:'space-between'
            }}>

            <TextInput 
                style={[
                    Platform.OS ==='web'? {outline:'none'} :null
                ]} 
                placeholder={holder} 
                onChangeText={action} 
                value={valeur} 
                keyboardType={type} 
                secureTextEntry={isPassword && isHidden}/>

                {isPassword && (
            <TouchableOpacity onPress={toggleIsHidden}>
                <Feather name={isHidden ? "eye-off":"eye"} 
                size={24} 
                color={isHidden ? "green":"red"} />
            </TouchableOpacity>
            )}
            
            
            </View>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin:10,
        
    },
    error:{
        color: 'red',
    }
    
});

//make this component available to the app
export default InputWithError;
