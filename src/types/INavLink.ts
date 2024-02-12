import {RootStackParamList} from "./StackNavigation";

export interface INavLink {
  name: string
  icon: string
  screenName: keyof RootStackParamList
}