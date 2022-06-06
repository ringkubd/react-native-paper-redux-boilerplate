import React from 'react';
import {Button, Title, Paragraph} from 'react-native-paper';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import { Text, View } from "react-native";

function TabExample() {
  const index = useTabIndex();
  return (
    <Tabs
      defaultIndex={0} // default = 0
      uppercase={false} // true/false | default=true | labels are uppercase
      showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
      iconPosition // leading, top | default=leading
      style={{backgroundColor: '#fff'}} // works the same as AppBar in react-native-paper
      dark={false} // works the same as AppBar in react-native-paper
      // theme={} // works the same as AppBar in react-native-paper
      mode="scrollable" // fixed, scrollable | default=fixed
      onChangeIndex={newIndex => {}} // react on index change
      showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
      disableSwipe={false} // (default=false) disable swipe to left/right gestures
    >
      <TabScreen label="Explore" icon="compass">
        <ExploreWitHookExamples />
      </TabScreen>
      <TabScreen label="Flights" icon="airplane">
        <View style={{backgroundColor: 'black', flex: 1}}>
          <Text>Airplane</Text>
          <Text>{index}</Text>
        </View>
      </TabScreen>
      <TabScreen
        label="Trips"
        icon="bag-suitcase"
        // optional props
        // onPressIn={() => {
        //   console.log('onPressIn explore');
        // }}
        // onPress={() => {
        //   console.log('onPress explore');
        // }}
      >
        <View style={{backgroundColor: 'tomato', flex: 1}}>
          <Text>{index}</Text>
        </View>
      </TabScreen>
    </Tabs>
  );
}

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{flex: 1}}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}

export {TabExample, ExploreWitHookExamples};
