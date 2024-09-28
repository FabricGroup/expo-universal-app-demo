import { Anchor, H2, Paragraph, XStack, YStack } from "tamagui";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from 'expo-router';

export default function AccountsHomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <YStack
    px="$10"
    bg="$background"
    >
      <Paragraph>Here are your accounts that we know of</Paragraph>

      <Link href='/accounts/details'>Here you go</Link>
    </YStack>
  )
}