import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Region } from "react-native-maps";
import { H4, H5, Spinner, View, YStack } from "tamagui";
import { ScreenLoader } from "../common/ScreenLoader";
import { ScreenMessage } from "../common/ScreenMessage";
import { StandardScreen } from "../common/StandardScreen";

export function AtmFinder() {
  const [location, setLocation] = useState<Region | null>(null);
  const [randomPoints, setRandomPoints] = useState<Point[]>([]);
  const [noLocPermissions, setNoLocPermissions] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setNoLocPermissions(true);
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      // Generate random points within 1km radius
      const points = generateRandomPoints(currentLocation.coords, 5, 1000);
      setRandomPoints(points);
    })();
  }, []);

  if (noLocPermissions) {
    return <ScreenMessage error>No location permissions</ScreenMessage>;
  }

  if (!location) return <ScreenLoader />;

  return (
    <>
      <H4>Find our ATMs closest to your current location</H4>
      <MapView
        style={{ width: "100%", height: 500 }}
        initialRegion={location}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {randomPoints.map((point, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: point.latitude,
              longitude: point.longitude,
            }}
            title={`ATM ${index + 1}`}
          />
        ))}
      </MapView>
    </>
  );
}

type Point = {
  latitude: number;
  longitude: number;
};

const generateRandomPoints = (
  location: Location.LocationObjectCoords,
  numPoints: number,
  radius: number
): Point[] => {
  const randomPointsArray: Point[] = [];
  const r = radius / 111300; // Convert meters to degrees

  for (let i = 0; i < numPoints; i++) {
    const u = Math.random();
    const v = Math.random();
    const w = r * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const newLatitude = location.latitude + y;
    const newLongitude =
      location.longitude + x / Math.cos(location.latitude * (Math.PI / 180));

    randomPointsArray.push({
      latitude: newLatitude,
      longitude: newLongitude,
    });
  }

  return randomPointsArray;
};
