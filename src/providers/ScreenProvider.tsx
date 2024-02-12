import {FC, PropsWithChildren} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {TitleScreen} from "../screens/title-screen";
import {HomeScreen} from "../screens/home-screen";

const Stack = createNativeStackNavigator();

export const ScreenProvider: FC<PropsWithChildren> = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Title"
        component={TitleScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
)