import { Spin } from "andtd";
import { createContext, useState } from "react";

const DEFAUL_VALUE = {
  isLoading: false,
};

const LoadingContext = createContext();

const LoadingProvider = (props) => {
    const [state, setState] = useState[DEFAUL_VALUE];
    const style = {}
  return (
    <LoadingContext.Provider value={[state, setState]}>
        <div style={style}><Spin /></div>
      
      {props.children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, LoadingContext };
