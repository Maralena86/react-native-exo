import { useContext, useState } from "react";
import { View } from "react-native";
import InputWithError from "../UI/InputWithError/InputWithError";
import Button from "../UI/Button/Button";
import P from "../UI/P/P";
import { UserContext } from "../../contexts/UserContext";


export default function SignUpForm(){

    const {user, setUser} = useContext(UserContext);
    
     
    const [emailInput, setEmailInput] = useState('');
    const [emailError, setEmailError] = useState('');
    
 
    const [userNameInput, setUserNameInput] = useState('');
    const [userNameError, setUserNameError] = useState('');

    
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [passwordConfirmInput, setPasswordConfirmInput] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

 
     
    function handleEmail(text){
        setEmailInput(text);
        setEmailError('');
    }
    function handleUserName(text){
        setUserNameInput(text);
        setPasswordError('');   
    }
    function handlePassword(text){
        setPasswordInput(text);
        setPasswordError('');
       
    }
    function handlePasswordConfirm(text){
        setPasswordConfirmInput(text);
        setPasswordConfirmError('');      
    }

     
    //Validation de formulaire. Pour le moment une alerte au lieud'envoyer les infos au backend
 
    function signUp(){
        if(emailInput.includes("@") && 
        passwordInput.length >= 6 && 
        userNameInput.length >= 3 && 
        userNameInput.length <= 12 && 
        passwordInput === passwordConfirmInput
        ){
            setUser({email: emailInput, username: userNameInput})
            //  alert('Connexion réussi. Email: ' + emailInput);
        }else{
        
            setEmailError(!emailInput.includes('@')? "Email incorrect!":'');
            setUserNameError(userNameInput.length<3 || userNameInput.length>12?'Le user doit contenir entre 3 et 12 caractères':'');
            setPasswordError(passwordInput.length < 6 ?'Mot de passe trop court': '');
            setPasswordConfirmError(!(passwordConfirmInput==passwordInput)?'Les mots de pasent ne correspondent pas':'')
        }
    }
    return(
        
            <View>
            <InputWithError 
                holder='Email'
                action={handleEmail}
                errorMessage={emailError}
                valeur={emailInput}
                type='email-address'
                ></InputWithError>


                <InputWithError
                holder='Username'
                action={handleUserName}
                errorMessage={userNameError}
                valeur={userNameInput}
                type='default'            
                ></InputWithError>


                <InputWithError
                holder='Mot de passe'
                action={handlePassword}
                errorMessage={passwordError}
                valeur={passwordInput}
                type='default'
                isPassword 
                ></InputWithError>


                <InputWithError
                holder='Confirmez votre mot de passe'
                action={handlePasswordConfirm}
                errorMessage={passwordConfirmError}
                valeur={passwordConfirmInput}
                type='default'
                isPassword 
                ></InputWithError>


                <Button action={signUp}>                
                    <P style={{color:"white"}} >Inscription</P>
                </Button>


            </View>
        
        
    )
}