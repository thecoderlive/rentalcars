import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Rental_Cars from './Rental_Cars'

const Root = createStackNavigator()

export default function App() {
return (
    <NavigationContainer>
        <Root.Navigator
            initialRouteName="Rental_Cars"
            screenOptions={{
                headerMode:'screen',
                headerStyle: { backgroundColor: 'white' },
                title: null,
                cardOverlayEnabled:true,
                cartStyle:{flex:1},
                animationEnabled:true,
                gestureEnabled:true
            }}
            >
        <Root.Screen name="Rental_Cars" component={Rental_Cars} />
        </Root.Navigator>
    </NavigationContainer>
)}