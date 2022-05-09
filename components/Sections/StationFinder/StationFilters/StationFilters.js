import React from "react";

export default function StationFilters({ filters }) {
  return (
    <fieldset>
      <legend className="text-lg font-bold text-white mb-4">Filter By:</legend>
      <div className="grid grid-cols-4 gap-4 ">
        {filters.map((filter) => (
          <div key={filter.id} className="relative flex items-start ">
            <div className="mr-3 flex items-center h-5">
              <input
                id={`filter-${filter.id}`}
                name={`filter-${filter.id}`}
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="min-w-0 text-sm">
              <label
                htmlFor={`filter-${filter.id}`}
                className="font-medium text-white select-none"
              >
                {filter.value}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
