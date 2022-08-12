
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../UI/Button/Button';
import { SimpleLineIcons } from '@expo/vector-icons';
import P from '../UI/P/P';
import InputWithError from '../UI/InputWithError/InputWithError';


const LoginForm = () => {

    //création des variables pour l'input de le mail et les erreurs de mail(le mail doit contenir @)
    const [emailInput, setEmailInput] = useState('');
    const [emailError, setEmailError] = useState('');

    //création des variables pour l'input de le password et les erreurs de password(le password doit contenir 6 caractheres)
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState('');

    //création des foctions pour donner les valeurs aux variables. Avec l'input de l'utilisateur
    function setError(){
        setEmailError('');
        setPasswordError('')
    }

    function handleEmail(text){
        setEmailInput(text);
        setError();
    }

    function handlePassword(text){
        setPasswordInput(text);
        setError();
      
    }
    //Validation de formulaire. Pour le moment une alerte en lieu d'envoyer les infos au backend

    function login(){
        if(emailInput.includes("@") && passwordInput.length >=6){
            alert('Connexion réussi. Email: ' + emailInput);
        }else{
            setEmailError(!emailInput.includes('@')? "Email incorrect!":'');
            setPasswordError(passwordInput.length <6 ?'Mot de passe trop court': '');
        }
    }
    return (
        <View>
            <InputWithError 
            holder='Email'
            action={handleEmail}
            errorMessage={emailError}
            valeur={emailInput}
            type='email-address'
            ></InputWithError>

            <View>
            <InputWithError
            holder='Mot de passe'
            action={handlePassword}
            errorMessage={passwordError}
            valeur={passwordInput}
            type='default'
            isPassword={true} 
            
            ></InputWithError>
            </View>

            <Button action={login}>
                
                <P><SimpleLineIcons name="login" size={24} color ="white"/>Se connecter</P>
            </Button>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container:{

    }
});

export default LoginForm;
