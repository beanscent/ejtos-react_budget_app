import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    let text = currency === '$' ? 'Currency (' + currency + ' Dollar)' : currency === '£' ? 'Currency (' + currency + ' Pound)' : currency === '€' ? 'Currency (' + currency + ' Euro)' : 'Currency (' + currency + ' Ruppee)' ;

    const setCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event
        })
    }

    // const setCurrency = (event) => {
    //     let currency = event.target.value;

    //     dispatch({
    //         type: 'CHG_CURRENCY',
    //         payload: currency
    //     })
    // }

    return (
        // <div className='alert alert-secondary'>
        //     <select className="custom-select" id="inputGroupSelect03" onChange={setCurrency}>  
        //         <option value="$">$ Dollar</option>
        //         <option selected value="£">£ Pound</option>
        //         <option value="€">€ Euro</option>
        //         <option value="₹">₹ Ruppee</option>
        //     </select>
        // </div>
        <DropdownButton title={text} className='my-dropdown' onSelect={setCurrency}>
                <Dropdown.Item className='my-dropdown-item' eventKey='$'>$ Dollar</Dropdown.Item>
                <Dropdown.Item className='my-dropdown-item' eventKey='£'>£ Pound</Dropdown.Item>
                <Dropdown.Item className='my-dropdown-item' eventKey='€'>€ Euro</Dropdown.Item>
                <Dropdown.Item className='my-dropdown-item' eventKey='₹'>₹ Ruppee</Dropdown.Item>
        </DropdownButton>
    );
};

export default Currency;