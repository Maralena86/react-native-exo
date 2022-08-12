//import liraries

import { Camera } from 'expo-camera';
import { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { UserContext } from '../../../contexts/UserContext';
import Button from '../../UI/Button/Button';
import P from '../../UI/P/P';


const Cam = (props) => {
    const [cameraPermission, setCameraPermission] = useState(null);
    const cameraRef = useRef();
    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
        //Demander une authorisation
        (async function(){
            let result = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(result.granted);
        })()
    },[])

    async function takePicture(){
        let image = await cameraRef.current.takePictureAsync();
        setUser({...user, avatar:image})
        props.navigation.pop();
        console.log(image)
    }

    if(cameraPermission === null){
        return <ActivityIndicator color ={"red"} size= {64}/>
    }
    if(cameraPermission === false){
        return(
            <View style={styles.container}>
                <Text>Permission refussée</Text>
            </View>
        )
    }
    
   
    return (
        <View style={styles.container}>
             <Camera ref={cameraRef} style={{width:"100%", height: "100%"}}><Button action={takePicture}><P light center>Prendre photo</P></Button></Camera>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Cam;
