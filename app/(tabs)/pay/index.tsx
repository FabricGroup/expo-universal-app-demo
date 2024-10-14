import { QrCode } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import { useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import {
  Button,
  H4,
  H5,
  Input,
  Label,
  ScrollView,
  styled,
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
            <InputRow>
              <Label width={90} htmlFor="name">
                Name
              </Label>
              <Input
                flex={1}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
            </InputRow>
            <InputRow>
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
            </InputRow>
            <InputRow>
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
            </InputRow>
          </YStack>

          <H5 textAlign="center">OR</H5>

          <XStack jc="center">
            <Button
              size="$5"
              iconAfter={QrCode}
              theme="purple"
              backgroundColor="$purple5"
              onPress={() => router.push("/pay/qr")}
            >
              Scan to Pay
            </Button>
          </XStack>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}
            keyboardVerticalOffset={110}
            style={{ flex: 1 }}
          >
            <InputRow mt="$4">
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
            </InputRow>
          </KeyboardAvoidingView>
        </YStack>
      </ScrollView>

      <Button
        theme="purple"
        size="$5"
        disabled={!isReadyToPay}
        opacity={isReadyToPay ? 1 : 0.5}
      >
        <H5>Pay now</H5>
      </Button>
    </View>
  );
}

const InputRow = styled(XStack, {
  alignItems: "center",
  gap: "$2",
});

const otherStyles = StyleSheet.create({
  buttonLink: {
    // @ts-expect-error: this works on web, but types in react-native are not sorted. textDecorationLine throws error on web
    textDecoration: "none",
    textDecorationLine: "none",
  },
});
