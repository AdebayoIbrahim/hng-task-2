import React, { createContext } from "react";

const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  return (
    <React.Fragment>
      <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>
    </React.Fragment>
  );
};

export default MovieContext;
