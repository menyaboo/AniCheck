import {ITitle} from "./ITitle";
import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Title: { title: ITitle };
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type TitleScreenRouteProp = RouteProp<RootStackParamList, 'Title'>
export type TitleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Title'
>;