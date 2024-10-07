import { Card, CardProps, H3, Paragraph, YStack } from "tamagui";
import { toDollars } from "../utils/formats";
import { Account } from "./account.types";

type AccountCardProps = {
  account: Account;
} & Omit<CardProps, "children">;

export function AccountCard({ account, ...otherProps }: AccountCardProps) {
  return (
    <Card
      elevate
      pressStyle={{ backgroundColor: "$purple5" }}
      backgroundColor="$purple4"
      {...otherProps}
    >
      <Card.Header padded fd="row" jc="space-between">
        <H3>{account.name}</H3>
      </Card.Header>
      <YStack
        padding="$4"
        alignItems="flex-end"
        justifyContent="flex-end"
        gap="$1"
      >
        <Paragraph>Balance</Paragraph>
        <Paragraph fontSize="$6" fontWeight="bold">
          {toDollars(account.balance)}
        </Paragraph>
      </YStack>
    </Card>
  );
}
