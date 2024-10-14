# Welcome to OzBank: The expo demo app

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) and [Tamagui].

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    yarn start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Source structure
1. Application pages sit in `/app` directory. It follows the file-based routing system of Expo.
2. Features are in `/features` directory, with folders for all main features
3. `assets` contains all the images, fonts, and other assets used in the app
4. `tamagui.config.ts` contains the configuration for the tamagui components
5. `app/_layout.tsx` is the root layout.

## Demo features
This app contains a QR scanner in the Pay feature, demonstrating the use of the use of `expo-camera`. A sample QR is provided in `assets/demo_qr_code.png`.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Tamagui universal components](https://tamagui.dev): A collection of universal components supporting react-native with web
- [Zustand](https://github.com/pmndrs/zustand): A simple and fast state management for React
