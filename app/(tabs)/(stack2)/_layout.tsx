import { Stack } from "expo-router";

export default function StackTwoLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Stack Two Main" }} />
    </Stack>
  );
}
