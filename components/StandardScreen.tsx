import { YStack, YStackProps } from "tamagui";

export function StandardScreen(props: React.PropsWithChildren<YStackProps>) {
  return <YStack pt="$3" px="$3" gap="$4" {...props} />;
}
