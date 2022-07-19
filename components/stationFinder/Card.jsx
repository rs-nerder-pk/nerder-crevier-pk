import classNames from "classnames";
import { useRouter } from "next/router";
import { stationTranslations } from "utils/station-filters";

export default function Card({
  location,
  minify = false,
  active = false,
  activeLocationRef,
  scrollToLocation,
}) {
  const { locale } = useRouter();

  return (
    <div
      ref={!minify && active ? activeLocationRef : null}
      className={classNames(
        " border-blue-500 py-4",
        minify ? "border-y-20" : "border-t-20",
        active && !minify ? "border-red-500" : "border-blue-500"
      )}
    >
      <h3 className="text-base font-bold text-blue">{location.title}</h3>
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
          {locale === "en-US" ? "Open in Google Map" : "Ouvrir dans Google map"}
        </a>
        <br />
        <a
          className="inline-block mt-4 text-red-500"
          href={`tel:+${location.tel}`}
        >
          {location.tel}
        </a>
      </address>
      {minify && (
        <button
          className="mt-4 text-red-500"
          onClick={() => scrollToLocation()}
        >
          Scroll to Listing
        </button>
      )}
      {location.features && !minify && (
        <ul className="grid grid-cols-2 text-sm mt-6 gap-2 ml-0 text-blue-500">
          {location.features.map((feature) => (
            <li key={feature.id} className="ml-3.5">
              {locale === "en-US"
                ? feature.value
                : stationTranslations(feature.value)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
