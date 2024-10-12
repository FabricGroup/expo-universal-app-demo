import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, Text, YStack } from "tamagui";
import { ScreenLoader } from "../../../features/common/ScreenLoader";
import { usePayStore } from "../../../features/pay/usePayStore";

export default function QRCodeScanner() {
  const { setPaymentDetails } = usePayStore();

  const [permission, requestPermission] = useCameraPermissions();

  const handleBarCodeScanned = (
    result: Pick<BarcodeScanningResult, "data">
  ) => {
    try {
      const paymentDetails = validatePaymentDetails(JSON.parse(result.data));
      setPaymentDetails(paymentDetails);
      router.back();
    } catch (e) {
      Alert.alert("Invalid QR Code", "Please scan a valid QR code");
      router.back();
    }
  };

  if (!permission) {
    return <ScreenLoader />;
  }
  if (!permission.granted) {
    return (
      <YStack>
        <Text >We need your permission to show the camera</Text>
        <Button onPress={requestPermission} >Request permissions</Button>
      </YStack>
    );
  }

  return (
    <YStack f={1} ai="center" jc="center" bg="$background">
      <CameraView
        facing="back"
        onBarcodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        //@ts-expect-error: expo internally uses legacy cameraview for web, so need to use these props
        barCodeScannerSettings={{
          barCodeTypes: ["qr"],
        }}
        //@ts-expect-error: expo internally uses legacy cameraview for web, so need to use these props
        onBarCodeScanned={(data) => {
          handleBarCodeScanned({ data: data.nativeEvent.data });
        }}
      />
    </YStack>
  );
}

function validatePaymentDetails(paymentDetails: any): {
  account: string;
  bsb: string;
  name?: string;
} {
  if (
    typeof paymentDetails.account === "string" &&
    typeof paymentDetails.bsb === "string" &&
    (typeof paymentDetails.name === "string" ||
      paymentDetails.name === undefined)
  ) {
    return {
      account: paymentDetails.account,
      bsb: paymentDetails.bsb,
      name: paymentDetails.name,
    };
  } else {
    throw new Error("Invalid payment details");
  }
}
