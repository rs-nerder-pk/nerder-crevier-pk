import { createContext, useState } from "react";

export const OppositeSlugContext = createContext();

export const OppositeSlugProvider = ({ children }) => {
  const [oppositeSlug, setOppositeSlug] = useState();
  return (
    <OppositeSlugContext.Provider value={[oppositeSlug, setOppositeSlug]}>{children}</OppositeSlugContext.Provider>
  );
};
