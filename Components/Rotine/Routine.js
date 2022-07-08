//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function click(name){
    alert(`Je vais ${name}`)
}
//Pour le web on peu utiliser l'event.target.textContent
// function click(event){
//     alert(`Je vais ${event.target.textContent}`)
// }
// create a component

const Routine = () => {
    return (
        <View >
            <Button onPress={()=>click('dormir')} title='dormir'></Button>
            <Button onPress={()=>click('manger')} title='manger'></Button>
            <Button onPress={()=>click('programmer')} title='programmer'></Button>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default Routine;
