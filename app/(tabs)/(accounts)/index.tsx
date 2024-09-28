import { Link } from "expo-router";
import { Button, Paragraph, YStack } from "tamagui";

export default function AccountsHomeScreen() {
  return (
    <YStack pt="$3" px="$10" gap="$4">
      <Paragraph>Here are your accounts that we know of</Paragraph>

      <Link href="/account-details" asChild>
        <Button size="$4" theme="blue" style={{ textDecoration: "none" }}>
          Check Details
        </Button>
      </Link>
    </YStack>
  );
}
