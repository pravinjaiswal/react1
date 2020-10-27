import React, { createContext } from "react";
import ConA from "./ConA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Pravin"}>
        <LastName.Provider value={"Singh"}>
          <ConA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};
export default App;
export { FirstName, LastName };
