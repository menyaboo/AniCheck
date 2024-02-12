import {FC} from "react";
import {ITitle} from "../../../types/ITitle";

import {limitText} from "../../../utils/limitText";
import {useGoToTitle} from "../../../hooks/navigation";

import {Description, ImageTitle, TitleItemView, WatchView} from "./style";
import {STORAGE_IMAGE_URL} from "../../../data/constants";
import {Text} from "../../../styles/global";
import {colors} from "../../../styles/variables";

import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  title: ITitle
}

export const TitleItem: FC<Props> = ({title}) => {
  const goToTitle = useGoToTitle();

  return (
    <TitleItemView onPress={() => goToTitle(title)}>
      <ImageTitle source={{uri: STORAGE_IMAGE_URL + title.posters.medium.url}}/>
      <Description>
        <Text style={{marginBottom: 5}} $size="h4">{limitText(title.names.ru)}</Text>
        <WatchView>
          <Icon name="watch-later" size={10} color={colors.textSecondary}></Icon>
          <Text $color="textSecondary" $size="h6">{limitText(title.type.full_string)}</Text>
        </WatchView>
        
        <Text $color="textSecondary">{limitText(title.description, 200)}</Text>
      </Description>
    </TitleItemView>
  )
}
