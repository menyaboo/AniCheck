import React, {FC, ReactNode} from 'react';
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

import {ActivityIndicator} from "react-native";
import {CentredView, Text} from '../../styles/global';
import {colors} from "../../styles/variables";

interface Props {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined
  children: ReactNode
}

export const QueryComponent:FC<Props> = ({isLoading, error, children}) => {
  if (isLoading) {
    return (
      <CentredView>
        <ActivityIndicator color={colors.textSecondary} size="large" />
      </CentredView>
    )
  }

  if (error) {
    return (
      <CentredView>
        <Text>Ошибка получения данных</Text>
      </CentredView>
    );
  }

  return children;
};