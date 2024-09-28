import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Paragraph, YStack } from "tamagui";
import { AtmFinder } from "../../components/features/AtmFinder";

export default function AtmFinderScreen() {
  const insets = useSafeAreaInsets();
  /** Render Expo map */
  return (
    <YStack pt="$3" px="$10" f={1}>
      <Paragraph>This page will allow you to find the nearest ATM</Paragraph>
      <AtmFinder />
      </YStack>
  );
}
