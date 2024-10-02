import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Camera, CameraView, BarcodeScanningResult } from "expo-camera";
import { Button, Text, View, YStack, XStack } from "tamagui";
import { Alert } from "react-native";

export default function QRCodeScanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (result: BarcodeScanningResult) => {
    if (!scanned) {
      setScanned(true);
      setQrCodeData(result.data);
    }
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
      />
      {scanned && (
        <XStack position="absolute" bottom={20} space="$2">
          <Button
            size="$4"
            color="$color"
            onPress={() => setScanned(false)}
            bg="$buttonBg"
          >
            Tap to Scan Again
          </Button>
        </XStack>
      )}
      <Text
        position="absolute"
        bottom={60}
        color="$color"
        fontSize="$4"
        fontWeight="bold"
      >
        QR Code Data: {qrCodeData || "No data scanned"}
      </Text>
    </YStack>
  );
}
