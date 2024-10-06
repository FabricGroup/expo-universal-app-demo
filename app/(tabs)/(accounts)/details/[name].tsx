import { Stack, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { H4, ListItem, Paragraph, XStack, YGroup } from "tamagui";
import { StandardScreen } from "../../../../components/StandardScreen";
import { useAccounts } from "../../../../features/accounts/useAccounts";
import { toDollars } from "../../../../features/utils/formats";

export default function AccountDetailsScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { accounts: allAccounts } = useAccounts();

  const account = useMemo(
    () => allAccounts.find((a) => a.name === name),
    [allAccounts, name]
  );

  return (
    <StandardScreen height={"100vh"}>
      <Stack.Screen options={{ title: name }} />
      <H4>Recent transactions</H4>

      <YGroup bordered>
        {account?.recentTransactions.map((transaction) => (
          <YGroup.Item>
            <ListItem>
              <Paragraph>{transaction.description}</Paragraph>
              <Paragraph>{toDollars(transaction.amount)}</Paragraph>
            </ListItem>
          </YGroup.Item>
        ))}
      </YGroup>
    </StandardScreen>
  );
}
