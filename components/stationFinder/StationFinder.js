import React, { useMemo, useState, useRef } from "react";
import stations from "@/data/stations-en.json";
import filters from "@/data/filters-en.json";
import StationMap from "./Map";
import StationFilters from "./Filters";
import StationList from "./List";
import { useLoadScript } from "@react-google-maps/api";
import Place from "./Place";

export default function StationFinder() {
  const center = useMemo(() => ({ lat: 58.0447, lng: -100 }), []);
  const [userPosition, setUserPosition] = useState();
  const mapRef = useRef();
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
      <StationMap stations={stations} center={center} mapRef={mapRef} />
      <div className="px-5 bg-blue pb-20 -mb-20">
        <div className="container py-20 grid md:grid-cols- gap-8">
          <div>
            <h2 className="text-2xl font-black mb-8 leading-none">
              Find a<br /> Service Station
            </h2>
            <div className="flex items-end mb-8">
              <span className="text-white uppercase  tracking-wide   leading-none mr-4">
                Crevier
              </span>
              <hr className="border-red border-t-4 w-full relative -top-1" />
            </div>
            <div>
              <Place
                setUserPosition={(position) => {
                  setUserPosition(position);
                  mapRef.current?.panTo(position);
                }}
              />
            </div>
          </div>
          <div>
            <StationFilters filters={filters} />
          </div>
        </div>
      </div>
      <StationList stations={stations} userPosition={userPosition} />
    </section>
  );
}
