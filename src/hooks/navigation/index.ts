import {useNavigation} from '@react-navigation/native';
import {TitleScreenNavigationProp} from "../../types/StackNavigation";
import {ITitle} from "../../types/ITitle";

export const useGoToTitle = () => {
  const navigation = useNavigation<TitleScreenNavigationProp>();

  return (title: ITitle) => {
    navigation.navigate('Title', {title});
  };
};