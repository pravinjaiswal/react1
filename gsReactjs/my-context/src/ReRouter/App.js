import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const Name = () => {
    return <h1>Welcome to the Name Page</h1>;
  };
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route path="/Error" component={Error} />
      </Switch>
      {/* <About />
      <Contact /> */}
    </>
  );
};
export default App;
