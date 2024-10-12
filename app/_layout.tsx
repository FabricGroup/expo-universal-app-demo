import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useMemo } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider, useTheme } from "tamagui";
import { useColorScheme } from "../features/utils/useColorScheme";
import { tamaguiConfig } from "../tamagui.config";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <NavigationThemeProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaProvider>
      </NavigationThemeProvider>
    </TamaguiProvider>
  );
}

/**
 * Use Tamagui theme for setting the colors of the react
 * navigational elements including ios header nav elements
 */
function NavigationThemeProvider({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const themeColor = useMemo(() => theme.purple10.get("web"), [theme]);

  const LightTuiTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: themeColor,
      },
    }),
    []
  );

  const DarkTuiTheme = useMemo(
    () => ({
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: themeColor,
      },
    }),
    []
  );

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTuiTheme : LightTuiTheme}
    >
      {children}
    </ThemeProvider>
  );
}
