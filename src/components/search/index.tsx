import React, { useState } from 'react';
import {SearchInput, SearchView} from './style'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const Search = () => {
    const [text, setText] = useState('');

  return (
    <SearchView>
      <SearchInput
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder='Поиск Аниме ^-^'
      />
      <Icon name="search" size={30} color="#FFF" />
    </SearchView>
  );
  }
