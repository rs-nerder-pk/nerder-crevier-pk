import React, { useMemo, useState } from "react";
import stations from "@/data/stations-en.json";
import StationMap from "./StationMap/StationMap";
import StationFilters from "./StationFilters/StationFilters";
import StationList from "./StationList/StationList";
import { useLoadScript } from "@react-google-maps/api";

export default function StationFinder() {
  const center = useMemo(() => ({ lat: 58.0447, lng: -100 }), []);
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries: libraries,
  });

  if (loadError) {
    return <div>Sorry, section is having issues</div>;
  }

  if (!isLoaded) return <div className="">Loading...</div>;
  return (
    <section>
      <StationMap stations={stations} center={center} />
      <StationFilters />
      <StationList />
    </section>
  );
}
