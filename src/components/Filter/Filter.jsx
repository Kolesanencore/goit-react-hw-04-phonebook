import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from '../ContactList/ContactList.styled';

const Filter = ({ onChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    const value = event.target.value;
    setFilter(value);
    onChange(value);
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
