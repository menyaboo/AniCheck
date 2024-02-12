import {NavigationView} from "./style";
import {navLinks} from "../../data/navLinks";
import {FlatList} from "react-native";
import {NavLink} from "./ui/nav-link";

export const NavigationBar = () => (
  <NavigationView>
    <FlatList
      horizontal
      scrollEnabled={false}
      data={navLinks}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}
      keyExtractor={(item) => item.screenName}
      renderItem={({ item }) =>
        <NavLink icon={item.icon} name={item.name} screenName={item.screenName} />
      }
    />
  </NavigationView>
)