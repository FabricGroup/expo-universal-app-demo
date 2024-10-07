import { H3, Paragraph, YStack } from "tamagui";
import { Platform } from "react-native";
import { Link } from "expo-router";
import { Button, Input, Form, XStack, Label } from "tamagui";
import { usePayStore } from "../../../hooks/usePayStore";
import { StandardScreen } from "../../../components/StandardScreen";

export default function PayScreen() {
  const { payId, setPayId } = usePayStore();
  return (
    <StandardScreen>
      <Link href="/pay/qr" asChild>
        <Button size="$4" theme="blue" style={{ textDecoration: "none" }}>
          Scan and Pay
        </Button>
      </Link>

      <Form>
        <XStack alignItems="center" space="$4">
          <Label width={90} htmlFor="name">
            Name
          </Label>
          <Input
            flex={1}
            placeholder="PayId"
            value={payId}
            onChangeText={setPayId}
          />
        </XStack>
      </Form>
    </StandardScreen>
  );
}
