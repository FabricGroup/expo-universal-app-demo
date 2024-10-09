import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { Button, Form, H4, H5, Label, XStack, YStack, Input } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";
import { usePayStore } from "../../../hooks/usePayStore";
import { QrCode } from "@tamagui/lucide-icons";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";

export default function PayScreen() {
  const { account, bsb, name, setName, setAccount, setBsb } = usePayStore();
  const [amount, setAmount] = useState(0);

  const handleAmountChange = useCallback((text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setAmount(parseInt(numericValue) || 0);
  }, []);

  return (
    <StandardScreen minHeight="100%">
      <H4>Pay Someone</H4>

      <YStack gap="$4" px="$4">
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
      </YStack>

      <XStack gap="$6" jc="center" ai="center" my="$5">
        <H5>OR</H5>
      </XStack>

      <XStack gap="$4" jc="center" ai="center">
        <Link href="/pay/qr" asChild>
          <Button
            size="$5"
            theme="purple"
            style={{ textDecoration: "none" }}
            iconAfter={QrCode}
          >
            Scan to Pay
          </Button>
        </Link>
      </XStack>

      <XStack alignItems="center" mt="$8">
        <Label width={90} htmlFor="bsb" size="$5">
          Amount
        </Label>
        <Input
          size="$5"
          flex={1}
          placeholder="Amount"
          value={amount.toString()}
          onChangeText={handleAmountChange}
        />
      </XStack>
    </StandardScreen>
  );
}
