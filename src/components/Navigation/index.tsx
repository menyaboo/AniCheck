import {NavigationView} from "./style";
import React from "react";
import {navLinks} from "../../data/navLinks";
import {Text} from "../../styles/global";
import {FlatList} from "react-native";

export const Navigation = () => (
  <NavigationView>
    <FlatList
      horizontal
      scrollEnabled={false}
      data={navLinks}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
      renderItem={({item}) => <Text>{item.name}</Text>}
    />
  </NavigationView>
)