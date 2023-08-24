import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CategoryDropdown.css';

const DatesDropdown = ({ selectedDate, dates, onDateChange }) => {
  return (
    <DropdownButton id="dates-dropdown" title={`Date: ${selectedDate}`} variant="outline-secondary">
      <Dropdown.Item onClick={() => onDateChange('All')}>All</Dropdown.Item>
      {dates.map(date => (
        <Dropdown.Item key={date} onClick={() => onDateChange(date)}>
          {date}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DatesDropdown;
