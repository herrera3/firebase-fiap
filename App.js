import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { auth } from './src/config/firebase';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, setUser);

    return subscriber
  }, [])


  function LoginScreens() {
    return (
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
  }

  function LoggedScreens() {
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      {user ? <LoggedScreens /> : <LoginScreens />}
    </NavigationContainer>
  );
}