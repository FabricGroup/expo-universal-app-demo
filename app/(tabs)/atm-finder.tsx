import { Paragraph } from "tamagui";
import { AtmFinder } from "../../components/features/AtmFinder";
import { StandardScreen } from "../../components/StandardScreen";

export default function AtmFinderScreen() {
  return (
    <StandardScreen f={1}>
      <Paragraph>This page will allow you to find the nearest ATM</Paragraph>
      {/* The atm finder depends on the platform */}
      <AtmFinder />
    </StandardScreen>
  );
}
