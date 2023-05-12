// react
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import axios from "axios";

import { GEO_API_URL } from "../api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.request(`${GEO_API_URL}/cities`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}
