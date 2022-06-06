import React from "react";
import { Appbar, Menu } from "react-native-paper";

function CustomHeader({navigation, back}) {
  return (
    <Appbar.Header>
      <Menu onDismiss={()=> navigation.closeDrawer()} anchor={
        <Appbar.Action icon="menu" color="white" onPress={() => navigation.openDrawer()} />
      }></Menu>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
}
export default CustomHeader;
