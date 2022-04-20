import * as React from "react";
 
import { useGoogleMaps } from "react-hook-google-maps";
 
const Result = () => {
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBKrmA-g4FVdD1MbbpzYZYBMAgYBM_kZ6U",
    {
      center: { lat: 0, lng: 0 },
      zoom: 3,
    },
  );
  console.log(map);
  console.log(google);
  return <div ref={ref} style={{ width: 1000, height: 800 }} />;
};
 
export default Result;