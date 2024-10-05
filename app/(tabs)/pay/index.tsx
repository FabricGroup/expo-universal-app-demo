import { H3, Paragraph } from "tamagui";
import { Platform } from "react-native";
import { Link } from "expo-router";
import { Button } from "tamagui";
import { usePayStore } from "../../../hooks/usePayStore";

export default function PayScreen() {
  const { payId} = usePayStore();
  return (
    <>
      <H3>Pay your bills here</H3>

      {Platform.OS !== "web" && (
        <Link href="/pay/qr" asChild>
          <Button size="$4" theme="blue" style={{ textDecoration: "none" }}>
            Scan and Pay
          </Button>
        </Link>
      )}

      <Paragraph>Paying to PayId: {payId}</Paragraph>
    </>
  );
}
