import { useEffect, useState } from "react";

export default function StationList({ stations, userPosition }) {
  const [locations, setLocations] = useState();

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
      <div className="container bg-white p-8">
        {locations &&
          locations.map((location) => {
            return (
              <div key={location.id}>
                <h2>{location.id}</h2>
                <div>{location.addressLineOne}</div>
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
