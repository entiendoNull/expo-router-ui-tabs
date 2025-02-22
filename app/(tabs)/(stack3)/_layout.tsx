import { Stack } from "expo-router";

export default function Stack3Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Stack Three Main" }} />
    </Stack>
  );
}
