
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Auth from './Components/Page/Auth/Auth';
import Profile from './Components/Page/Profil/Profil';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

export default function App() {
  const fakeUser = {email: 'maria@mail', username: 'maria8626'}
  const[user, setUser] = useState(fakeUser);
  return (
    <UserContext.Provider value ={{user, setUser}}>
      <View>  
        {user ? <Profile/>: <Auth/>}    
        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
  );
}


