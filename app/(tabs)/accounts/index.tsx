import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { H1, H5, styled, View, YStack } from "tamagui";
import { AccountCard } from "../../../features/accounts/AccountCard";
import { useAccounts } from "../../../features/accounts/useAccounts";
import { HeroScreen } from "../../../features/common/HeroScreen";
import { ScreenLoader } from "../../../features/common/ScreenLoader";
import { Image } from "tamagui";

export default function AccountsHomeScreen() {
  const { accounts, status } = useAccounts();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false, title: "Accounts" });
  }, [navigation]);

  return (
    <HeroScreen
      headerContent={<HomeHeader />}
      headerBackgroundColor="$purple10"
    >
      <H5 pt="$5">Your Accounts</H5>

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
                  pathname: "/accounts/[id]",
                  params: { id: account.id },
                })
              }
            />
          ))}
        </YStack>
      )}
    </HeroScreen>
  );
}

function HomeHeader() {
  return (
    <>
      <LogoBgPosition>
        <Image
          width={400}
          height={400}
          source={require("@/assets/images/logo-white.png")}
        />
      </LogoBgPosition>
      <H1 fontWeight="bold" themeInverse>
        OzBank
      </H1>
    </>
  );
}

const LogoBgPosition = styled(View, {
  position: "absolute",
  right: -110,
  bottom: -200,
  opacity: 0.08,
});
