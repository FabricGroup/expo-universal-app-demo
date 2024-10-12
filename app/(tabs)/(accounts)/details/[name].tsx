import { Stack, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { H4, ListItem, Paragraph, styled, YGroup } from "tamagui";
import { ScreenLoader } from "../../../../features/common/ScreenLoader";
import { StandardScreen } from "../../../../features/common/StandardScreen";
import { useAccounts } from "../../../../features/accounts/useAccounts";
import { displayDate, toDollars } from "../../../../features/utils/formats";

export default function AccountDetailsScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { accounts: allAccounts, status } = useAccounts();

  const account = useMemo(
    () => allAccounts.find((a) => a.name === name),
    [allAccounts, name]
  );

  return (
    <StandardScreen>
      <Stack.Screen options={{ title: name }} />
      {status === "pending" ? (
        <ScreenLoader />
      ) : (
        <>
          <H4>Recent transactions</H4>
          <YGroup bordered>
            <YGroup.Item>
              <ListItem bordered>
                <TableHeader flexBasis={"30%"}>
                  Date
                </TableHeader>
                <TableHeader f={1}>
                  Description
                </TableHeader>
                <TableHeader fontWeight="bold">Amount</TableHeader>
              </ListItem>
            </YGroup.Item>
            {account?.recentTransactions.map((transaction) => (
              <YGroup.Item key={transaction.id}>
                <ListItem bordered>
                  <Paragraph flexBasis={"30%"}>
                    {displayDate(transaction.date)}
                  </Paragraph>
                  <Paragraph f={1}>{transaction.description}</Paragraph>
                  <Paragraph>{toDollars(transaction.amount)}</Paragraph>
                </ListItem>
              </YGroup.Item>
            ))}
          </YGroup>
        </>
      )}
    </StandardScreen>
  );
}

const TableHeader = styled(Paragraph, {
  fontWeight: 'bold'
})