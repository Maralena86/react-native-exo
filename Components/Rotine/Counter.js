
import { View, Text, StyleSheet, Button } from 'react-native';
import {useState} from 'react';

// create a component
const Counter= () => {

    const [count, setCount]= useState(0);
  

    return (
        <View >
            <Text style={{textAlign:'center', fontSize:25}}>{count}</Text>
            <Button onPress={()=>setCount(count-10)} title='-10'></Button>
            <Button onPress={()=>setCount(count+20)} title="+20"></Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Counter;
