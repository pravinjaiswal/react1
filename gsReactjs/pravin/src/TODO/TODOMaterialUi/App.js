import React, { useState } from "react";
import ToDOLists from "./ToDOLists";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const inputevent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> TODO LIST </h1> <br />
          <input
            type="text"
            placeholder="ADD A ITEMS"
            value={inputList}
            onChange={inputevent}
          />
          <Button onClick={listOfItems} className="btn">
            <AddIcon />
          </Button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <ToDOLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
