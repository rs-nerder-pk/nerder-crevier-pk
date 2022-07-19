import {
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card";

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

export default function StationMap({
  center,
  stations,
  mapRef,
  home = false,
  activeLocation,
  setActiveLocation,
  scrollToActiveLocation,
}) {
  const [locations, setLocations] = useState();

  const onLoad = useCallback(
    (map) => {
      // if (false) {
      mapRef.current = map;
      const bounds = new google.maps.LatLngBounds();
      console.log({ ...home });
      if (home) {
        bounds.extend({ ...home });
      }
      stations.forEach((station) => {
        bounds.extend({ lat: +station.lat, lng: +station.lng });
      });
      mapRef.current.fitBounds(bounds);
      // }
    },
    [stations, mapRef]
  );

  useEffect(() => {
    setLocations(stations);
  }, [stations, setLocations]);

  if (!stations) return;

  return (
    <GoogleMap
      ref={mapRef}
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
                    console.log("setting active location", location);
                    setActiveLocation(location);
                  }}
                ></Marker>
              );
            })
          }
        </MarkerClusterer>
      )}
      {activeLocation && (
        <InfoWindow
          position={{ lat: +activeLocation.lat, lng: +activeLocation.lng }}
          onCloseClick={() => {
            console.log("close");
            setActiveLocation(null);
          }}
        >
          <Card
            location={activeLocation}
            minify={true}
            scrollToLocation={() => {
              scrollToActiveLocation();
            }}
          />
        </InfoWindow>
      )}

      {home && (
        <Marker
          icon={"/images/map-icons/pin-home.svg"}
          position={{ lat: +home.lat, lng: +home.lng }}
        />
      )}
    </GoogleMap>
  );
}
