import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function StationList({ stations, userPosition, resetFilters }) {
  const [locations, setLocations] = useState();
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
    <div className="px-4">
      <div className="container mx-auto bg-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {locations && (
          <div className="col-span-full flex justify-between">
            <h2 className="text-sm text-blue-500 font-normal normal-case">
              Showing {locations.length} Locations
            </h2>
            <div className="flex gap-4">
              <button
                className="text-sm text-red-500"
                onClick={() => resetFilters()}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
        {locations &&
          locations.map((location) => {
            // console.log({ location })
            return (
              <div
                key={location.id}
                className="border-t-20 border-blue-500 py-4"
              >
                <h3 className="text-base font-bold text-blue">
                  {location.title}
                </h3>
                <address className="not-italic text-blue leading-normal mt-2 text-sm">
                  {location.addressLineOne}
                  <br />
                  {location.addressLineTwo}
                  <br />
                  <a
                    href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    {locale === "fr"
                      ? "Ouvrir dans Google map"
                      : "Open in Google Map"}
                  </a>
                  <br />
                  <a
                    className="inline-block mt-4 text-red-500"
                    href={`tel:+${location.tel}`}
                  >
                    {location.tel}
                  </a>
                </address>
                {location.features && (
                  <ul className="grid grid-cols-2 text-sm mt-6 gap-2 ml-0 text-blue-500">
                    {location.features.map((feature) => (
                      <li key={feature.id} className="ml-3.5">
                        {feature.value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>
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
