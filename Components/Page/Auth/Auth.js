import {useState} from 'react';import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Card from '../../Container/Card/Card';
import LoginForm from '../../LoginForm/LoginForm';
import SignUpForm from '../../SignUpForm/SignUpForm';
import Link from '../../UI/Link';


export default function Auth(props) {
    const [isLogin, setIsLogin]= useState(true);
    function toggleLogin(){  
        setIsLogin(!isLogin)
    }
    return (
        <View style={styles.container}>
            <Card title='Bienvenue!' content='Veuillez vous authentifier'>
            { isLogin ? <LoginForm/> : <SignUpForm/> }
            <Link  action={toggleLogin}>
            {isLogin
                    ? "Pas encore membre? Inscrivez vous!"
                    :"Déjà membre? Connectez-vous!"
                    }
            </Link>                   
            </Card>            
        </View>
    );
    
}
const styles = StyleSheet.create({
    container:{
        
        
    },
    
   
    });



