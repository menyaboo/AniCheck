import {FC} from "react";
import {ITitle} from "../../../types/ITitle";

import {limitText} from "../../../utils/limitText";
import {useGoToTitle} from "../../../hooks/navigation";

import {Description, ImageTitle, TitleItemView} from "./style";
import {STORAGE_IMAGE_URL} from "../../../data/constants";
import {Text} from "../../../styles/global";

type Props = {
  title: ITitle
}

export const TitleItem: FC<Props> = ({title}) => {
  const goToTitle = useGoToTitle();

  return (
    <TitleItemView onPress={() => goToTitle(title)}>
      <ImageTitle source={{uri: STORAGE_IMAGE_URL + title.posters.medium.url}}/>
      <Description>
        <Text style={{marginBottom: 5}} $size="h4">{limitText(title.names.ru, 25)}</Text>
        <Text $color="textSecondary">{limitText(title.description)}</Text>
      </Description>
    </TitleItemView>
  )
}