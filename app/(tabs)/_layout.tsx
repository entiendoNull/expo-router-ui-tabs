import * as React from "react";
import {
  TabList,
  Tabs,
  TabsDescriptor,
  TabSlot,
  TabsSlotRenderOptions,
  TabTrigger
} from "expo-router/ui";
import { Screen } from "react-native-screens";
import { Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function defaultTabsSlotRender(
  descriptor: TabsDescriptor,
  { isFocused, loaded, detachInactiveScreens }: TabsSlotRenderOptions
) {
  const { lazy = true, unmountOnBlur, freezeOnBlur } = descriptor.options;

  if (unmountOnBlur && !isFocused) {
    return null;
  }

  if (lazy && !loaded && !isFocused) {
    return null;
  }

  return (
    <Screen
      key={descriptor.route.key}
      enabled={detachInactiveScreens}
      activityState={isFocused ? 2 : 0}
      freezeOnBlur={freezeOnBlur}
      style={[styles.screen, isFocused ? styles.focused : styles.unfocused]}
    >
      {descriptor.render()}
    </Screen>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot renderFn={defaultTabsSlotRender} />
      <TabList style={[styles.tabList, { paddingBottom: insets.bottom }]}>
        <TabTrigger name="stack-one" href="/(tabs)/(stack1)">
          <Text>Stack 1</Text>
        </TabTrigger>
        <TabTrigger name="stack-two" href="/(tabs)/(stack2)">
          <Text>Stack 2</Text>
        </TabTrigger>
        <TabTrigger name="stack-three" href="/(tabs)/(stack3)">
          <Text>Stack 3</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#eee"
  },
  screen: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  focused: {
    zIndex: 0
  },
  unfocused: {
    zIndex: -1
  }
});
