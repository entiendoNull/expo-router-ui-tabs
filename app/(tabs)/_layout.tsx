import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot />
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
  tabList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#eee"
  }
});
