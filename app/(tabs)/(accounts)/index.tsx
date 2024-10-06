import { Link, useNavigation } from "expo-router";
import { Button, H1, Paragraph, YStack } from "tamagui";
import { StandardScreen } from "../../../components/StandardScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAccounts } from "../../../features/accounts/useAccounts";
import { AccountCard } from "../../../features/accounts/AccountCard";
import { router } from "expo-router";
import { useEffect } from "react";

export default function AccountsHomeScreen() {
  const insets = useSafeAreaInsets();
  const { accounts } = useAccounts();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <StandardScreen pt={insets.top}>
      <H1 pt="$5">Your Accounts</H1>
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

      {/* <Link href="/account-details" asChild>
        <Button size="$4" theme="blue" style={{ textDecoration: "none" }}>
          Check Details
        </Button>
      </Link> */}
    </StandardScreen>
  );
}
