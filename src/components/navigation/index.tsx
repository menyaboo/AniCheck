import {NavigationView} from "./style";
import React from "react";
import {navLinks} from "../../data/navLinks";
import {FlatList} from "react-native";
import {NavLink} from "./ui/nav-link";

export const Navigation = () => (
  <NavigationView>
    <FlatList
      horizontal
      scrollEnabled={false}
      data={navLinks}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
      renderItem={({item}) => <NavLink icon={item.icon} name={item.name} />}
    />
  </NavigationView>
)