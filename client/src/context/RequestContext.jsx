import { useState, createContext, useContext } from "react";

const RequestContext = createContext();

export const RequestContextProvider = ({children}) => {
    const [request, setRequest] = useState();

    return (
      <RequestContext.Provider value={
          {
              request,
              setRequest
          }
      }>
          {children}
      </RequestContext.Provider>
    )
}

export const Request = () => {
    return useContext(Request);
}