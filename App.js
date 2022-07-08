
import { StatusBar } from 'expo-status-bar';
import Auth from './Components/Page/Auth/Auth';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import ProfilStack from './Components/Stack/ProfilStack';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const fakeUser = {email: 'maria@mail', username: 'maria8626'}
  const[user, setUser] = useState(fakeUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={{ height: "100%" }}>
        <NavigationContainer>
          {user ? <ProfilStack /> : <Auth />}
          <StatusBar style='auto' />
        </NavigationContainer>
      </View>
    </UserContext.Provider>
  );
}


