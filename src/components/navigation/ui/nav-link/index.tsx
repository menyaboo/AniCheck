import {NavLinkView} from "./style";
import {INavLink} from "../../../../types/INavLink";
import {Text} from "../../../../styles/global";
import React, {FC} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useGoToScreen} from "../../../../hooks/useGoToScreen";

export const NavLink: FC<INavLink> = ({ name, icon, screenName }) => {

  return (
    <NavLinkView onPress={() => useGoToScreen(screenName)}>
      <Icon name={icon} size={20} color="#FFF" />
      <Text>{name}</Text>
    </NavLinkView>
  );
};