import {FC, PropsWithChildren} from "react";
import {Provider} from "react-redux";

import {store} from "../store";
import {SafeAreaView} from "react-native-safe-area-context";

export const AppProvider: FC<PropsWithChildren> = ({children}) => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      {children}
    </SafeAreaView>
  </Provider>
)