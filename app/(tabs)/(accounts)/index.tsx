import { Link } from "expo-router";
import { Button, Paragraph, YStack } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";

export default function AccountsHomeScreen() {
  return (
    <StandardScreen>
      <Paragraph>Here are your accounts that we know of</Paragraph>

      <Link href="/account-details" asChild>
        <Button size="$4" theme="blue" style={{ textDecoration: "none" }}>
          Check Details
        </Button>
      </Link>
    </StandardScreen>
  );
}
