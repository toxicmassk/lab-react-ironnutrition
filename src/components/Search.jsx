import { Input } from 'antd';
import React, { useState } from 'react';

const Search = (props) => {
  const { handleSearch } = props;
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    handleSearch(event.target.value);
  };
  return (
    <div>
      <label>Search</label>
      <Input type="text" value={search} onChange={handleChange} />
    </div>
  );
};

export default Search;
