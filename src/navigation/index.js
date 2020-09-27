import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import AppScreens from '../screens/app';
import AuthScreens from '../screens/auth';

import { authSetUser } from '../store/actions';

const Main = createStackNavigator();
const MainNavigator = () => {
  return(
    <Main.Navigator>
      <Main.Screen
        name="Main"
        component={AppScreens.Main}
        options={{
          header: () => null
        }}
      />
    </Main.Navigator>
  )
}

const Auth = createStackNavigator();
const AuthNavigator = ()=> {
  return(
    <Auth.Navigator>
      <Auth.Screen
        name="SignIn"
        component={AuthScreens.SignIn}
        options={{
          header: () => null
        }}
      />
    </Auth.Navigator>
  )
}

App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [userLoaded, setUserLoaded] = useState(false)

  useEffect(() => {
    isLogged()
  },[token])

  let tokenStorage = null;

  const isLogged = async () => {
    try {
      tokenStorage = await AsyncStorage.getItem('token');
      if(tokenStorage) {
        setUserLoaded(true)
        dispatch(authSetUser(tokenStorage))
      }
      else {
        setUserLoaded(false)
      }
        
    } catch(e) {
      console.log(e)
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);  
  }
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoading ? 
          (
            <AuthScreens.Splash />
          )
        :
          userLoaded ?
            (
                <MainNavigator />
            )
          :
            (
                <AuthNavigator />
            )
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;