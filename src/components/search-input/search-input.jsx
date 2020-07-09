import React from 'react';

// Styled Components
import { Input } from './search-input.styles';

const SearchInput = ({ handleSearch }) => {
    return <Input type='text' onChange={handleSearch} placeholder='Search' />;
};

export default SearchInput;
