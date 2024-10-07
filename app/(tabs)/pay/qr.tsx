import { BarcodeScanningResult, Camera, CameraView } from "expo-camera";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Text, YStack } from "tamagui";
import { usePayStore } from "../../../hooks/usePayStore";
import { ScreenMessage } from "../../../components/ScreenMessage";
import { ScreenLoader } from "../../../components/ScreenLoader";

export default function QRCodeScanner() {
  const { setPaymentDetails } = usePayStore();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

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

  if (hasPermission === null) {
    return <ScreenLoader />;
  }
  if (hasPermission === false) {
    return <ScreenMessage error>No access to camera</ScreenMessage>;
  }

  return (
    <YStack f={1} ai="center" jc="center" bg="$background">
      <CameraView
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
