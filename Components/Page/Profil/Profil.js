import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import defaultAvatar from "../../../assets/profil.jpg"

import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
console.log(ImagePicker)

export default function Profile(){
    const {user, setUser} = useContext(UserContext);
    const windowsSize = useWindowDimensions();

    async function pickImage(){
        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality:1
        })
        console.log('image: ',image)
        if(!Image.cancelled){
            setUser({...user,
                avatar: image})
        }
    }


    return(
        <View style= {[styles.superContainer, {height: windowsSize.height}]}>
            <View style={styles.avatarContainer}>
                <View>
                    <Image style={{width: 300, height:300}}source={user.avatar?user.avatar:defaultAvatar}></Image>
                </View>               
                
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={pickImage}>
                        <MaterialIcons name="photo-library" size={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="camera-alt" size={50} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style= {styles.container}>
            <View style ={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.info}>{user.email}</Text>
            </View>
            <View style ={styles.infoContainer}>
                <Text style={styles.label}>Username:</Text>
                <Text style={styles.info}>{user.username}</Text>
            </View>
            <View style ={styles.infoContainer}>
                <Text style={styles.label}>Description:</Text>
                <Text>{!user.description?'Veuillez entrer une description': user.description}</Text>
            </View>
            </View>
        </View>
    )
    
    
} const styles = StyleSheet.create({
        superContainer: {           
          justifyContent:'center', 
          alignItems:'center'

        },
       
        container:{
            backgroundColor: "rgb(230,230,230)",
            borderBottomWidth: 2,
            borderColor: 'black',
            borderTopWidth: 2,
            padding:20,
            width: "90%"  
        },
        buttonsContainer:{
            display:'flex',
            flexDirection: 'row',
            backgroundColor: 'rgba(10,10, 10, .20)',
            padding:10,
            marginVertical:15,
            justifyContent: 'space-between',
            borderRadius: 10
        },
        label: {
            fontWeight: 'bold',
            color: "blue",
            fontSize: 16, 
            marginBottom:7
        },
        info:{
            fontSize:16
        },
        infoContainer: {
            padding:8,
            borderBottomWidth: 1,
            borderColor: "grey",
            
        }
    });