import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CategoryDropdown.css';

const CategoryDropdown = ({ selectedCategory, categories, onCategoryChange }) => {
  return (
    <DropdownButton id="category-dropdown" title={`Category: ${selectedCategory}`} variant="secondary">
      <Dropdown.Item onClick={() => onCategoryChange("All")}>All</Dropdown.Item>
      {Array.from(categories).map(category => (
        <Dropdown.Item key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default CategoryDropdown;
