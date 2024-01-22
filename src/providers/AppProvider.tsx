import {Provider} from "react-redux";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FC, PropsWithChildren} from "react";

import {store} from "../store";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

const Stack = createNativeStackNavigator();

export const AppProvider: FC<PropsWithChildren> = ({children}) => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      {children}
    </SafeAreaView>
  </Provider>
)