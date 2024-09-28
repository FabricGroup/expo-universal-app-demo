import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Paragraph, YStack } from "tamagui";
import { AtmFinder } from "../../components/features/AtmFinder";

export default function AtmFinderScreen() {
  const insets = useSafeAreaInsets();
  return (
    <YStack pt="$3" px="$3" f={1}>
      <Paragraph>This page will allow you to find the nearest ATM</Paragraph>
      {/* The atm finder depends on the platform */}
      <AtmFinder />
    </YStack>
  );
}
