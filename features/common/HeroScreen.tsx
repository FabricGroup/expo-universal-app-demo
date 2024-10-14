import type { PropsWithChildren, ReactNode } from "react";
import { GetThemeValueForKey, styled, View } from "tamagui";

const HEADER_HEIGHT = 250;

type HeroScreenProps = PropsWithChildren<{
  headerContent: ReactNode;
  headerBackgroundColor: GetThemeValueForKey<"backgroundColor">;
}>;

export function HeroScreen({
  children,
  headerContent,
  headerBackgroundColor,
}: HeroScreenProps) {
  return (
    <View f={1}>
      <Header backgroundColor={headerBackgroundColor}>{headerContent}</Header>
      <View pt="$3" px="$3" gap="$4">{children}</View>
    </View>
  );
}

const Header = styled(View, {
  position: "relative",
  height: HEADER_HEIGHT,
  overflow: "hidden",
  justifyContent: "flex-end",
  padding: "$3"
});
