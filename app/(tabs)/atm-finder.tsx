import { Paragraph, YStack } from "tamagui";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AtmFinderScreen() {
  const insets = useSafeAreaInsets();
  /** Render Expo map */
  return (
    <YStack pt="$3" px="$10">
      <Paragraph>This page will allow you to find the nearest ATM</Paragraph>
    </YStack>
  );
}
