import { Link } from "expo-router";
import { Button, Form, Input, Label, XStack } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";
import { usePayStore } from "../../../hooks/usePayStore";

export default function PayScreen() {
  const { payId, setPayId } = usePayStore();
  return (
    <StandardScreen minHeight="100%">
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
