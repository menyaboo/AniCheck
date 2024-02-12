import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {TitleScreen} from "../screens/title";
import {Home} from "../screens/home";
import {RootStackParamList} from "../types/StackNavigation";
import {Notes} from "../screens/notes";
import {Profile} from "../screens/profile";
import {NavigationBar} from "../components/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ScreenProvider = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Title"
        component={TitleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>

    <NavigationBar/>
  </NavigationContainer>
)