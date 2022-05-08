import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useCallback, useEffect, useRef, useState } from "react";

const containerStyle = {
  width: "100vw",
  height: "600px",
};

export default function StationMap({ center, stations }) {
  const map = useRef();
  const [locations, setLocations] = useState();

  const onLoad = useCallback((map) => (map.current = map), []);

  useEffect(() => {
    setLocations(stations);
  }, [stations, setLocations]);

  if (!stations) return;

  return (
    <GoogleMap
      ref={map}
      mapContainerClassName="min-h-[600px] w-full"
      center={center}
      zoom={4}
      onLoad={onLoad}
    >
      {locations && (
        <MarkerClusterer>
          {(clusterer) =>
            locations.map((location) => {
              return (
                <Marker
                  key={location.id}
                  onLoad={(marker) => {
                    console.log(marker);
                  }}
                  position={{ lat: +location.lat, lng: +location.lng }}
                  clusterer={clusterer}
                />
              );
            })
          }
        </MarkerClusterer>
      )}
      <Marker position={{ lat: 58.0447, lng: -100 }} />
    </GoogleMap>
  );
}
