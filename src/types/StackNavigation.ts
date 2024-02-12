import {ITitle} from "./ITitle";
import {StackNavigationProp} from "@react-navigation/stack";

export type RootStackParamList = {
  Home: {};
  Title: { title: ITitle };
  Profile: {};
  Notes: {};
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;