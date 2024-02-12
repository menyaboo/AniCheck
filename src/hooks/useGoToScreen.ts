import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, ScreenNavigationProp} from "../types/StackNavigation";

export const useGoToScreen = <RouteName extends keyof RootStackParamList>(
  screenName: RouteName,
  params?: RootStackParamList[RouteName]
) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  console.log("screenName", screenName)

  return () => {
    navigation.navigate(screenName as any, params);
  };
};