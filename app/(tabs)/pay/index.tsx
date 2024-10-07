import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { Button, Form, Input, Label, XStack } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";
import { usePayStore } from "../../../hooks/usePayStore";

export default function PayScreen() {
  const { account, bsb, name, setName, setAccount, setBsb } = usePayStore();
  const [amount, setAmount] = useState(0);

  const handleAmountChange = useCallback((text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setAmount(parseInt(numericValue) || 0);
  }, []);

  return (
    <StandardScreen minHeight="100%">
      <Link href="/pay/qr" asChild>
        <Button size="$4" theme="purple" style={{ textDecoration: "none" }}>
          Scan and Pay
        </Button>
      </Link>

      <Form gap="$4">
        <XStack alignItems="center">
          <Label width={90} htmlFor="name">
            Name
          </Label>
          <Input
            flex={1}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </XStack>
        <XStack alignItems="center">
          <Label width={90} htmlFor="account">
            Account
          </Label>
          <Input
            flex={1}
            placeholder="00000000"
            value={account}
            onChangeText={setAccount}
          />
        </XStack>
        <XStack alignItems="center">
          <Label width={90} htmlFor="bsb">
            BSB
          </Label>
          <Input
            flex={1}
            placeholder="000000"
            value={bsb}
            onChangeText={setBsb}
          />
        </XStack>
        <XStack alignItems="center">
          <Label width={90} htmlFor="bsb">
            Amount
          </Label>
          <Input
            flex={1}
            placeholder="Amount"
            value={amount.toString()}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
          />
        </XStack>
      </Form>
    </StandardScreen>
  );
}
