import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ({onCurrencyChange}) => {
    const {dispatch } = useContext(AppContext);

    
  const [selectedOption, setSelectedOption] = useState('$'); // Default option

  const changeCurrency = (selected) => {
    dispatch({
        type: 'CHG_CURRENCY',
        
    })

    setSelectedOption(selected);
    onCurrencyChange(selected);


  };


  const getCurrencyName = (symbol) => {
    switch (symbol) {
      case '£':
        return 'Pound';
      case '$':
        return 'Dollar';
      case '€':
        return 'Euro';
      case '₹':
        return 'Rupee';
      default:
        return 'Currency';
    }
  };

  return (
    <div className='alert alert-secondary'>
      <select
        name='hover_color'
        id='currency'
        onChange={(event) => changeCurrency(event.target.value)}
        style={{ marginLeft: '1rem', backgroundColor: '#33FF49', color: 'white' }}
        value={selectedOption} // Set the selected option
      >
        <option style={{ color: 'black' }} value="£">
          {selectedOption === '£' ? 'Currency £ Pound' : '£ Pound'}
        </option>
        <option style={{ color: 'black' }} value="$">
          {selectedOption === '$' ? 'Currency $ Dollar' : '$ Dollar'}
        </option>
        <option style={{ color: 'black' }} value="€">
          {selectedOption === '€' ? 'Currency € Euro' : '€ Euro'}
        </option>
        <option style={{ color: 'black' }} value="₹">
          {selectedOption === '₹' ? 'Currency ₹ Rupee' : '₹ Rupee'}
        </option>
      </select>
    </div>
  );
};

export default Currency;
