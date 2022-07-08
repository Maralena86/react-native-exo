
import { View, Text, StyleSheet } from 'react-native';

// create a component
const P = ({children, light}) => {
    return (
        
        <Text style={{
                color:'white', 
                paddingHorizontal:10,
                fontWeight:'bold', width:"100%"}}>
                {children}
        </Text>
        
    );
};

// define your styles
const styles = StyleSheet.create({
   
});

//make this component available to the app
export default P;
