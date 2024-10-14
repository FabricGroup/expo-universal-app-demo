import { Paragraph } from "tamagui";
import { AtmFinder } from "../../../features/atm-finder/AtmFinder";
import { StandardScreen } from "../../../features/common/StandardScreen";
import { Stack } from "expo-router";

export default function AtmFinderScreen() {
  return (
    <StandardScreen f={1}>
      <Stack.Screen  options={{ title: "ATM Finder" }} />
      <AtmFinder />
    </StandardScreen>
  );
}
