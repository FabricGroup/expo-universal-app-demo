import { Link, useNavigation } from "expo-router";
import { Button, H1, Paragraph, YStack } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAccounts } from "../../../features/accounts/useAccounts";
import { AccountCard } from "../../../features/accounts/AccountCard";
import { router } from "expo-router";
import { useEffect } from "react";
import { ScreenLoader } from "../../../components/ScreenLoader";

export default function AccountsHomeScreen() {
  const insets = useSafeAreaInsets();
  const { accounts, status } = useAccounts();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false, title: 'Accounts' });
  }, [navigation]);

  return (
    <StandardScreen pt={insets.top}>
      <H1 pt="$5">Your Accounts</H1>

      {status === "pending" ? (
        <ScreenLoader />
      ) : (
        <YStack gap="$4">
          {accounts.map((account) => (
            <AccountCard
              key={account.name}
              account={account}
              onPress={() =>
                router.navigate({
                  pathname: "/(accounts)/details/[name]",
                  params: { name: account.name },
                })
              }
            />
          ))}
        </YStack>
      )}
    </StandardScreen>
  );
}
