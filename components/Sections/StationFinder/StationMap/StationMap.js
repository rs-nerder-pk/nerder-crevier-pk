import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const optionsCluster = {
  styles: [
    {
      textColor: "white",
      url: "/images/map-icons/cluster.png",
      width: 28,
      height: 40,
    },
  ],
};

const options = {
  mapId: "69aae12c6987a410",
  streetViewControl: false,
  mapTypeControl: false,
  clickableIcons: false,
};

export default function StationMap({ center, stations }) {
  const map = useRef();
  const [locations, setLocations] = useState();

  const onLoad = useCallback(
    (map) => {
      map.current = map;
      const bounds = new google.maps.LatLngBounds();
      stations.forEach((station) => {
        bounds.extend({ lat: +station.lat, lng: +station.lng });
      });
      map.current.fitBounds(bounds);
    },
    [stations]
  );

  useEffect(() => {
    setLocations(stations);
  }, [stations, setLocations]);

  if (!stations) return;

  return (
    <GoogleMap
      ref={map}
      mapContainerClassName="min-h-[500px] w-full"
      center={center}
      zoom={4}
      options={options}
      onLoad={onLoad}
    >
      {locations && (
        <MarkerClusterer options={optionsCluster}>
          {(clusterer) =>
            locations.map((location) => {
              return (
                <Marker
                  icon={"/images/map-icons/pin.svg"}
                  key={location.id}
                  position={{ lat: +location.lat, lng: +location.lng }}
                  clusterer={clusterer}
                  onClick={() => {
                    console.log(location.id);
                  }}
                />
              );
            })
          }
        </MarkerClusterer>
      )}
    </GoogleMap>
  );
}
