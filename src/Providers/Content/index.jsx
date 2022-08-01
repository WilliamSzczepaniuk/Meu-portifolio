import { createContext } from "react";
import { useState } from "react";
import { About } from "../../components/About";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [actualComponent, setActualComponent] = useState(About);

  const updateContent = (component) => setActualComponent(component);

  return (
    <ContentContext.Provider value={{ actualComponent, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};
