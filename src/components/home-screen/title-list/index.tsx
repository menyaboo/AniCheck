import {QueryComponent} from "../../query-component";
import {ActivityIndicator, FlatList, RefreshControl} from "react-native";
import {TitleItem} from "../title-item";
import {FC, useState} from "react";
import {useGetNearlyTitlesQuery} from "../../../services/animeApi";

type Props = {
  defaultAmountTitles?: number
  amountTitlesScrolled?: number
}

export const TitleList:FC<Props> = ({defaultAmountTitles = 10, amountTitlesScrolled = 10}) => {
  const [amountTitles, setAmountTitles] = useState(defaultAmountTitles);
  const {data, isLoading, error, refetch} = useGetNearlyTitlesQuery(amountTitles)

  const getTitlesStartReached = () => {
    setAmountTitles(defaultAmountTitles)
    refetch()
  }

  const getTitlesEndReached = () => {
    setAmountTitles(amountTitles + amountTitlesScrolled)
    refetch()
  }

  const getFooter = () => {
    return !isLoading ? <ActivityIndicator style={{padding: 10}}/> : null
  }

  return (
    <QueryComponent isLoading={isLoading} error={error}>
      <FlatList
        data={data}
        renderItem={({item}) => <TitleItem title={item}/>}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getTitlesStartReached}
          />
        }
        onEndReached={getTitlesEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={getFooter}
      />
    </QueryComponent>
  )
}