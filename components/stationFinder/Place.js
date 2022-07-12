import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useRouter } from "next/router";

export default function Place({ setUserPosition }) {
  const router = useRouter();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setUserPosition({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect} className="mb-4 text-gray-900">
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full p-2"
        placeholder={
          router.locale === "en-US"
            ? "By city or postal code"
            : "Par ville ou code postal"
        }
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }, i) => (
              <ComboboxOption
                key={place_id}
                value={description}
                className={`cursor-pointer p-2 ${
                  i % 2 ? "bg-gray-100" : "bg-gray-200"
                } `}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
