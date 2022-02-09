import React, { useContext, useReducer, createContext } from "react";

// Prepare the data layer
export const StateContext = createContext({});

// wrap our app and provide data
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
};

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);