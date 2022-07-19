import React from "react";
import { useRouter } from "next/router";

export default function StationFilters({
  filters,
  activeFilterIds,
  setActiveFilterIds,
}) {
  const router = useRouter();
  const stationTranslations = (enValue) => {
    switch (enValue) {
      case "See All":
        return "Voir Tout";
      case "With Service":
        return "Libre Service";
      case "Full Serve":
        return "Service complet";
      case "Diesel":
        return "Diesel";
      case "Cardlock-Truck Refueling":
        return "Cardlock";
      case "Gas Bar":
        return "Poste d'essence";
      case "Convenience Store":
        return "Dépanneur";
      case "Auto Repair":
        return "Réparation automobile";
      case "Open 24 Hours":
        return "Overt 24H";
      case "Family Restaurant":
        return "Restaurant familial";
      case "Automatic Bank Machine":
        return "Guichet automatique";
      case "Towing":
        return "Remorquage";
      case "Marina":
        return "Marina";
      case "Car Rental":
        return "Location de voiture";
      case "Fast-charge stations for electric vehicles":
        return "Bornes de recharge rapide pour véhicules électrique";
      case "Premium Unleaded Gasoline":
        return "Essence sans plomb premium";
      case "Super 94 Gasoline":
        return "Essense Super 94";
      case "Propane for cars":
        return "Propane pour voitures";
      case "Propane- Tank Refills or Exchange":
        return "Propane- remplissage ou échange de bonbonnes";
      case "Hand Car Wash":
        return "Lavage à la main";
      case "Automatic Car Wash":
        return "Lavage automatique";
      case "Tim Hortons":
        return "Tim Hortons";
      case "McDonalds":
        return "McDonalds";
      default:
        return enValue;
    }
  };

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
