import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function StationList({
  stations,
  userPosition,
  resetFilters,
  activeLocation,
  activeLocationRef,
}) {
  const [locations, setLocations] = useState([]);
  const { locale } = useRouter();

  useEffect(() => {
    if (userPosition) {
      const sortedLocations = stations
        .map((station) => {
          const distance = calculateDistance(station, userPosition);
          return {
            ...station,
            distance,
          };
        })
        .sort((a, b) => a.distance - b.distance);
      setLocations(sortedLocations);
    } else {
      setLocations(stations);
    }
  }, [stations, userPosition]);

  return (
    <div className="container mx-auto bg-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {locations && (
        <div className="col-span-full flex justify-between">
          <h2 className="text-sm text-blue-500 font-normal normal-case">
            {locale === "en-US"
              ? `Showing ${locations.length} Locations`
              : `Affichage de ${locations.length} emplacements`}
          </h2>
          <div className="flex gap-4">
            <button
              className="text-sm text-red-500"
              onClick={() => resetFilters()}
            >
              {locale === "en-US"
                ? "Reset Filters"
                : "Réinitialiser les filtres"}
            </button>
          </div>
        </div>
      )}

      {!locations.length && (
        <div className="col-span-full text-center">
          <h3 className=" normal-case  leading-snug">
            {locale === "en-US"
              ? "No Locations Found"
              : "Aucun emplacement trouvé"}
          </h3>
          <p>
            {locale === "en-US" ? "Please refine or" : "Veuillez réaffiner ou"}{" "}
            <button
              className="text-sm text-red-500"
              onClick={() => resetFilters()}
            >
              {locale === "en-US" ? "reset" : "réinitialiser"}
            </button>{" "}
            {locale === "en-US" ? "filters" : "les filtres"}
          </p>
        </div>
      )}
      {locations &&
        locations.map((location) => {
          // console.log({ location })
          return (
            <Card
              location={location}
              key={location.id}
              active={
                activeLocation ? activeLocation.id === location.id : false
              }
              activeLocationRef={activeLocationRef}
            />
          );
        })}
    </div>
  );
}

function calculateDistance(pos1, userPos) {
  var radlat1 = (Math.PI * pos1.lat) / 180;
  var radlat2 = (Math.PI * userPos.lat) / 180;
  var theta = pos1.lng - userPos.lng;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;
  return dist;
}
