import {NavLinkView} from "./style";
import {INavLink} from "../../../../types/INavLink";
import {Text} from "../../../../styles/global";
import {FC} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const NavLink: FC<INavLink> = ({name, icon}) => (
  <NavLinkView>
    <Icon name={icon} size={20} color="#FFF" />
    <Text>{name}</Text>
  </NavLinkView>
)