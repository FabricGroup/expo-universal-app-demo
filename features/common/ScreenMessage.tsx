import { Paragraph, YStack } from "tamagui";

export function ScreenMessage(props: React.PropsWithChildren<{ error?: boolean }>) {
  return (
    <YStack ai="center" jc="center" minHeight={"50%"}>
      <Paragraph color={props.error ? "$red11" : "$color"}>{props.children}</Paragraph>
    </YStack>
  );
}