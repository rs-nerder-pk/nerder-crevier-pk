import React, { useMemo, useRef, useContext, useEffect } from "react";
import stations from "@/data/stations-en.json";
import filters from "@/data/filters-en.json";
import StationMap from "./Map";
import StationFilters from "./Filters";
import StationList from "./List";
import { useLoadScript } from "@react-google-maps/api";
import Place from "./Place";
import { LocationContext } from "context/locationContext";
import { useRouter } from "next/router";

export default function StationFinder() {
  const router = useRouter();
  const [location, setLocation] = useContext(LocationContext);
  const center = useMemo(
    () =>
      location && location.lat && location.lng
        ? { lat: location.lat, lng: location.lng }
        : { lat: 58.0447, lng: -100 },
    [location]
  );
  // const [userPosition, setUserPosition] = useState();

  const mapRef = useRef();
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries: libraries,
  });

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo({
        lat: location.lat,
        lng: location.lng,
      });
    }
  }, [location, mapRef]);

  if (loadError) {
    //TODO: fr
    return <div>Sorry, section is having issues</div>;
  }

  //TODO: fr
  if (!isLoaded) return <div className="">Loading...</div>;
  return (
    <section>
      <StationMap
        stations={stations}
        center={location ? location : center}
        mapRef={mapRef}
        home={location ? { lat: +location.lat, lng: +location.lng } : false}
      />
      <div className="px-5 bg-blue pb-20 -mb-20">
        <div className="container py-20 grid grid-cols-10 gap-4 mx-auto">
          <div className="col-span-10 md:col-span-4">
            <h2 className="text-2xl font-black mb-8 leading-none">
              {router.locale === "en-US" ? (
                <>
                  Find a<br />
                  Service Station
                </>
              ) : (
                <>
                  Trouvez une
                  <br />
                  station-service
                </>
              )}
            </h2>
            <div className="flex items-end mb-8">
              <span className="text-white uppercase w-full tracking-wide leading-none mr-4">
                {router.locale === "en-US"
                  ? "Crevier Petrolium"
                  : "Pétroles Crevier"}
              </span>
              <hr className="border-red border-t-4 w-full relative -top-1" />
            </div>
            <div>
              <Place
                setUserPosition={(position) => {
                  setLocation(position);
                  mapRef.current?.panTo({
                    lat: position.lat,
                    lng: position.lng,
                  });
                }}
                placeholder={
                  location && location.address ? location.address : ""
                }
              />
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 md:col-start-6">
            <StationFilters filters={filters} />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <StationList stations={stations} userPosition={location} />
      </div>
    </section>
  );
}
