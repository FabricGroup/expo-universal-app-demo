import { Paragraph } from "tamagui";
import { AtmFinder } from "../../features/atm-finder/AtmFinder";
import { StandardScreen } from "../../features/common/StandardScreen";

export default function AtmFinderScreen() {
  return (
    <StandardScreen f={1}>
      <AtmFinder />
    </StandardScreen>
  );
}
