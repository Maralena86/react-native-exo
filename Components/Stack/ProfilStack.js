import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "../../stylesVariables";
import Cam from "../Page/Cam/Cam";
import Profil from "../Page/Profil/Profil";

const Stack = createStackNavigator();
export default function ProfilStack(){
    const contextStyle = styles();
    return(
        <Stack.Navigator 
            screenOptions={{
                headerStyle:{backgroundColor: contextStyle.primaryColor}, 
                headerTitleStyle:{
                    color:contextStyle.themTextColor,
                },
                headerTintColor:contextStyle.themTextColor
                    
            }}>
            <Stack.Screen name="profil" component={Profil} options={{
                title:"Page profil"
             }}/>
            <Stack.Screen name='cam' component={Cam}/>
        </Stack.Navigator>
    );
}