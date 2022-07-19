export const stationTranslations = (enValue) => {
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

const defaultFilters = [
  {
    id: null,
    value: "See All",
  },
  {
    id: 1,
    value: "With Service",
  },
  {
    id: 2,
    value: "Full Serve",
  },
  {
    id: 6,
    value: "Diesel",
  },
  {
    id: 10,
    value: "Gas Bar",
  },
  {
    id: 11,
    value: "Convenience Store",
  },
  {
    id: 12,
    value: "Auto Repair",
  },
  {
    id: 13,
    value: "Open 24 Hours",
  },
  {
    id: 16,
    value: "Family Restaurant",
  },
  {
    id: 20,
    value: "Automatic Bank Machine",
  },
  {
    id: 21,
    value: "Towing",
  },
  {
    id: 22,
    value: "Marina",
  },
  {
    id: 23,
    value: "Car Rental",
  },
  {
    id: 24,
    value: "Fast-charge stations for electric vehicles",
  },
];

const gasFilters = [
  {
    id: 4,
    value: "Premium Unleaded Gasoline",
  },
  {
    id: 5,
    value: "Super 94 Gasoline",
  },
];

const propaneFilters = [
  {
    id: 8,
    value: "Propane for cars",
  },
  {
    id: 9,
    value: "Propane- Tank Refills or Exchange",
  },
];

const carWashFilters = [
  {
    id: 14,
    value: "Hand Car Wash",
  },
  {
    id: 15,
    value: "Automatic Car Wash",
  },
];

const quickServeRestaurantsFilters = [
  {
    id: 17,
    value: "Tim Hortons",
  },
  {
    id: 18,
    value: "McDonalds",
  },
];

export const stationFilters = {
  default: {
    filters: defaultFilters,
    value: "",
    valueFR: "",
  },
  gas: {
    filters: gasFilters,
    value: "Gas",
    valueFR: "Essence",
  },
  propane: {
    filters: propaneFilters,
    value: "Propane",
    valueFR: "Propane",
  },
  carWash: {
    filters: carWashFilters,
    value: "Car Wash",
    valueFR: "LAVE-AUTO",
  },
  quickServeRestaurants: {
    filters: quickServeRestaurantsFilters,
    value: "Quick Serve Restaurants",
    valueFR: "RESTAURATION RAPIDE",
  },
};
