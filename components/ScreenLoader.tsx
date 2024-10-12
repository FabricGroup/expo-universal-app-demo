import { Spinner, YStack, YStackProps } from "tamagui";

export function ScreenLoader(props: Omit<YStackProps, "children">) {
  return (
    <YStack ai="center" jc="center" height={500} {...props}>
      <Spinner color="$purple7" />
    </YStack>
  );
}
