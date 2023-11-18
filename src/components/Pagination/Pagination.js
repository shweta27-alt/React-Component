// Build a pagination component that displays a list of items, allowing users to navigate through pages.

import React, { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [mapper, setMapper] = useState({ products: [] });

  useEffect(() => {
    DataMapper();
  }, []);

  const DataMapper = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      setMapper(data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      {mapper.length > 0 ? (
        mapper.products.map((items, index) => <div>{items.brand}</div>)
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Pagination;
