import { Link, Stack } from 'expo-router';

import { H3, Paragraph } from 'tamagui';
import { StandardScreen } from '../features/common/StandardScreen';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <StandardScreen>
        <H3>This screen doesn't exist.</H3>
        <Link href="/">
          <Paragraph>Go to home screen!</Paragraph>
        </Link>
      </StandardScreen>
    </>
  );
}
