import { Spin } from "andtd";
import { createContext } from "react";

const DEFAUL_VALUE = {
  isLoading: false,
};

const LoadingContext = createContext();

const LoadingProvider = (props) => {
  return (
    <LoadingContext.Provider value={[state, setState]}>
        <div><Spin /></div>
      
      {props.children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, LoadingContext };
