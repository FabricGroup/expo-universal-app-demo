import { BarcodeScanningResult, Camera, CameraView } from "expo-camera";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, YStack } from "tamagui";
import { usePayStore } from "../../../hooks/usePayStore";

export default function QRCodeScanner() {
  const { setPayId } = usePayStore();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (result: Pick<BarcodeScanningResult, 'data'>) => {
    setPayId(result.data);
    router.back();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
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
