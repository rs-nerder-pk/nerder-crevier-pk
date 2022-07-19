import React from "react";
import { useRouter } from "next/router";
import { stationTranslations, stationFilters } from "utils/station-filters";

export default function StationFilters({
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
    <>
      {stationFilters && (
        <div>
          <h2 className="text-lg font-bold text-white mb-4">
            {router.locale === "en-US" ? "Filter By:" : "Filtrer par :"}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stationFilters.default.filters.map((filter) => (
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <FilterGroup
              group={stationFilters.gas}
              isActive={isActive}
              toggleFilter={toggleFilter}
            />
            <FilterGroup
              group={stationFilters.propane}
              isActive={isActive}
              toggleFilter={toggleFilter}
            />
            <FilterGroup
              group={stationFilters.carWash}
              isActive={isActive}
              toggleFilter={toggleFilter}
            />
            <FilterGroup
              group={stationFilters.quickServeRestaurants}
              isActive={isActive}
              toggleFilter={toggleFilter}
            />
          </div>
        </div>
      )}
    </>
  );
}

const FilterSectionTitle = ({ children }) => {
  return <h3 className="text-base font-bold text-white">{children}</h3>;
};

const FilterGroup = ({ group, isActive, toggleFilter }) => {
  const { locale } = useRouter();
  const title = locale === "en-US" ? group.value : group.valueFR;
  const filters = group.filters;
  return (
    <div className="mt-8">
      <FilterSectionTitle>{title}</FilterSectionTitle>
      <ul className="grid gap-4 m-0 mt-4">
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
                {locale === "en-US"
                  ? filter.value
                  : stationTranslations(filter.value)}
              </label>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
