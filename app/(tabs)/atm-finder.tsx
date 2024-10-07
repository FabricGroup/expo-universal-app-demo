import { Paragraph } from "tamagui";
import { AtmFinder } from "../../components/features/AtmFinder";
import { StandardScreen } from "../../components/StandardScreen";

export default function AtmFinderScreen() {
  return (
    <StandardScreen f={1}>
      <AtmFinder />
    </StandardScreen>
  );
}
