import {NavigationContainer} from "@react-navigation/native";
import {Home} from "../screens/home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FC, PropsWithChildren} from "react";

const Stack = createNativeStackNavigator();

export const ScreenProvider: FC<PropsWithChildren> = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
)