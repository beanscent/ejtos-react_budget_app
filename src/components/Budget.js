import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const prevBudget = budget;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (budget) => {
        let newBudget = '';
        if (parseInt(budget) > 20000) {
            alert('Budget cannot exceed 20000');
            newBudget = prevBudget;
        } else if (budget < totalExpenses) {
            alert('The value cannot exceed remaining funds');
            newBudget = prevBudget;
        } else {
            newBudget = budget;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input required='required' step='10' type='number' id='cost' value={budget} onChange={(event) => setBudget(event.target.value)}></input></span>
        </div>
    );
};
export default Budget;