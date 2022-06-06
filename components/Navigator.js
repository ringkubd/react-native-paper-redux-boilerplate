import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer as PaperDrawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Home from '../screens/Home';
import CustomHeader from "./navigator/CustomHeader";
import Login from "../screens/auth/Login";
import Registration from "../screens/auth/Registration";
import ListAccordion from "../screens/ListAccordion";

const Drawer = createDrawerNavigator();

function DrawerContent(props) {

  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>Anwar Jahid</Title>
          <Caption style={styles.caption}>@trensik</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>202</Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <PaperDrawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Home"
            icon={({color, size}) => <Icon name="home" color={color} size={size} />}
            onPress={() => navigation.navigate('Home')} />
          <DrawerItem
            label="Login"
            icon={({color, size}) => <Icon name="login" color={color} size={size} />}
            onPress={() => navigation.navigate('Login')} />
          <DrawerItem
            label="Registration"
            icon={({color, size}) => <Icon name="account-arrow-right" color={color} size={size} />}
            onPress={() => navigation.navigate('Registration')} />
          <DrawerItem
            label="List Accordion"
            icon={({color, size}) => <Icon name="format-list-bulleted" color={color} size={size} />}
            onPress={() => navigation.navigate('ListAccordion')} />
        </PaperDrawer.Section>
        <PaperDrawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </PaperDrawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <DrawerContent />} initialRouteName="Home"  screenOptions={{
        header: CustomHeader
      }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="ListAccordion" component={ListAccordion} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
