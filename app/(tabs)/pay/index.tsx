import { QrCode } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Button, H4, H5, Input, Label, XStack, YStack } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";
import { usePayStore } from "../../../hooks/usePayStore";

export default function PayScreen() {
  const { account, bsb, name, setName, setAccount, setBsb } = usePayStore();
  const [amount, setAmount] = useState("");

  return (
    <StandardScreen>
      <H4>Pay Someone</H4>

      <YStack gap="$3" px="$4">
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

      <XStack gap="$6" jc="center" ai="center">
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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={110}
        style={{ flex: 1 }}
      >
        <XStack alignItems="center" mt="$4">
          <Label width={90} htmlFor="bsb" size="$5">
            Amount
          </Label>
          <Input
            size="$5"
            flex={1}
            placeholder="Amount"
            value={amount.toString()}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </XStack>
      </KeyboardAvoidingView>
    </StandardScreen>
  );
}
