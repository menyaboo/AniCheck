import {StatusBar} from 'expo-status-bar';
import {Navigation} from "./src/components/navigation";
import {AppProvider} from "./src/providers/AppProvider";
import {ScreenProvider} from "./src/providers/ScreenProvider";

export default function App() {
  return (
    <AppProvider>
      <ScreenProvider />
      <Navigation/>
      <StatusBar style="auto"/>
    </AppProvider>
  );
}