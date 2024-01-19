import { StatusBar } from 'expo-status-bar';
import {Navigation} from "./src/components/Navigation";
import {AppView} from "./src/styles/global";

export default function App() {
  return (
    <AppView>
      <Navigation/>
      <StatusBar style="light"/>
    </AppView>
  );
}