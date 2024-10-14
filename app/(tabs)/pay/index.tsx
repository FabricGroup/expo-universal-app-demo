import { QrCode } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Button,
  H4,
  H5,
  Input,
  Label,
  ScrollView,
  View,
  XStack,
  YStack,
} from "tamagui";
import { usePayStore } from "../../../features/pay/usePayStore";

export default function PayScreen() {
  const { account, bsb, name, setName, setAccount, setBsb } = usePayStore();
  const [amount, setAmount] = useState("");

  const isReadyToPay = useMemo(() => {
    return account && bsb && name && amount && parseInt(amount) > 0;
  }, [account, bsb, name, amount]);

  return (
    <View f={1} py="$3" px="$3" justifyContent="space-between">
      <ScrollView>
        <YStack gap="$3">
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
                keyboardType="numeric"
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
                keyboardType="numeric"
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
                style={{ textDecoration: "none" }}
                iconAfter={QrCode}
                theme="purple"
                backgroundColor="$purple5"
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
        </YStack>
      </ScrollView>

      <Button theme="purple" size="$5" disabled={!isReadyToPay} opacity={isReadyToPay ? 1: 0.5}>
        <H5>Pay now</H5>
      </Button>
    </View>
  );
}
