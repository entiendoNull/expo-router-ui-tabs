import { Stack } from "expo-router";

export default function StackOneLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Stack One Main" }} />
    </Stack>
  );
}
