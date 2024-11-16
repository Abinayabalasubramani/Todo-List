import React  from "react";

import './index.css';
import ItemsList from "./itemsList";

const Content = ({items, handleCheck, handleDelete}) => {
  

  return (
    <div>
      {(items.length) ? (
      <ItemsList
          items ={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
      ): (
        <p>Your list is Empty</p>
      )
    }
    </div>
  );
};

export default Content;
