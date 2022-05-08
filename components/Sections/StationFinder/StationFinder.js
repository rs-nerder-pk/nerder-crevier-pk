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
      <div className="px-5 bg-blue pb-20 -mb-20">
        <div className="container py-20 ">
          <div>
            <h2 className="text-2xl font-black mb-8 leading-none">
              Find a<br /> Service Station
            </h2>
            <div className="flex items-end">
              <span className="text-white uppercase  tracking-wide  md:text-xl leading-none mr-4">
                Crevier
              </span>
              <hr className="border-red border-t-4 w-full relative -top-1" />
            </div>
            <div>
              <StationFilters />
            </div>
          </div>
        </div>
      </div>

      <StationList />
    </section>
  );
}
