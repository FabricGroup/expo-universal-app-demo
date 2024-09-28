import { Stack } from 'expo-router';

export default function AccountsLayout() {
  return <Stack screenOptions={{
    headerStyle: {

    }
  }}>
    <Stack.Screen name="index" options={{ title: "Accounts" }} />
  </Stack>
}