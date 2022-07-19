import React from "react";
import { useRouter } from "next/router";
import { stationTranslations } from "utils/station-filters";

export default function StationFilters({
  filters,
  activeFilterIds,
  setActiveFilterIds,
}) {
  const router = useRouter();

  const toggleFilter = (filterId) => {
    if (!filterId) {
      setActiveFilterIds([]);
      return;
    }
    setActiveFilterIds((prev) => {
      if (prev.includes(filterId)) {
        return prev.filter((id) => id !== filterId);
      } else {
        return [...prev, filterId];
      }
    });
  };

  const isActive = (filterId) => {
    if (!activeFilterIds.length && !filterId) {
      return true;
    } else {
      return activeFilterIds.includes(filterId);
    }
  };

  return (
    <fieldset>
      <legend className="text-lg font-bold text-white mb-4">
        {router.locale === "en-US" ? "Filter By:" : "Filtrer par :"}
      </legend>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        {filters.map((filter) => (
          <div key={filter.id} className="relative flex items-start ">
            <div className="mr-3 flex items-center h-5">
              <input
                id={`filter-${filter.id}`}
                name={`filter-${filter.id}`}
                type="checkbox"
                checked={isActive(filter.id)}
                onChange={() => toggleFilter(filter.id)}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="min-w-0 text-sm">
              <label
                htmlFor={`filter-${filter.id}`}
                className="font-medium text-white select-none"
              >
                {router.locale === "en-US"
                  ? filter.value
                  : stationTranslations(filter.value)}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
