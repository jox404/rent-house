import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons'

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function Routes() {
    /* const optionsHome = {
        title: 'ALUGUE',
        headerTitleStyle: {
            fontFamily: 'Montserrat_700Bold',
            fontSize: '50px',
            textAlign: 'left'
        },

        headerRight: () => {
            <>
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Feather name="shopping-bag" size={24} color="#000" />
                </TouchableOpacity>
            </>
        }
    }
    const optionsDetail = {
        title: 'Detalhes',
        headerTitleStyle: {
            fontFamily: 'Montserrat_700Bold',
        },

        headerRight: () => {
            <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather />
            </TouchableOpacity>
        }
    } */
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="home" component={Home} options={{
                    title: 'ALUGUE',
                    headerTitleStyle: {
                        fontFamily: 'MontserratSemiBold',
                        color: '#000',
                    },
                    headerStyle: {
                        backgroundColor: '#4cacbc',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <>
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather name="shopping-bag" size={24} color="#000" />
                            </TouchableOpacity>
                        </>
                    )
                }} />
                <Stack.Screen name="detail" component={Detail} /* options={optionsDetail} */ />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
