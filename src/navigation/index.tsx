import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navTypes'
const Stack = createNativeStackNavigator<RootStackParamList>()

// import screens here
import CSView from '../screens/ComponentsView/ComponentsView';

export default function RootNavigation({}): React.JSX.Element{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='CSView' component={CSView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


