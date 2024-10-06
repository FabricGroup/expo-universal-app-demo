import { Stack } from 'expo-router';

export default function PayLayout() {
  return <Stack screenOptions={{
    headerStyle: {

    }
  }}>
    <Stack.Screen name="index" options={{ title: "Pay" }} />
    <Stack.Screen name="qr" options={{ title: "Scan QR" }} />
  </Stack>
}