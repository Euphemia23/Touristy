import React, { useState, useEffect } from 'react';
import axios from 'axios'; // added axios to make the GET request to the API
import { useLocation } from 'react-router-dom';
import _ from "lodash";


export default function SearchResult() {
  const location = useLocation();
  const searchInput = location.state.searchInput;

  const [data, setData] = useState([]); // added state variable to store the data from the API

  // make a GET request to the API using Axios


  async function fetchData() {
    const response = await axios.get(`http://localhost:8000/attraction/search/${searchInput}`);
    // flatten the response data array using lodash
    const flattenedData = _.flattenDeep(response.data.data);
    setData(flattenedData);
    console.log(flattenedData);
  }

  useEffect(() => {
    console.log(searchInput);
    fetchData();
  }, []);


  return (
    <div>
      <h1>Search Input: {searchInput}</h1>
      {/* display the search result here */}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
