import {StatusBar} from 'expo-status-bar';
import {NavigationBar} from "./src/components/navigation";
import {AppProvider} from "./src/providers/AppProvider";
import {ScreenProvider} from "./src/providers/ScreenProvider";

export default function App() {
  console.log('я не ебу')

  return (
    <AppProvider>
      <ScreenProvider />
      <StatusBar style="auto"/>
    </AppProvider>
  );
}