import { ScrollView, YStack, YStackProps } from "tamagui";

export function StandardScreen(props: React.PropsWithChildren<YStackProps>) {
  return (
    <ScrollView>
      <YStack pt="$3" px="$3" gap="$4" {...props} />
    </ScrollView>
  );
}
