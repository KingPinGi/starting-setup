import './ExpenseItem.css';
import React from 'react';
import './ExpenseDate.js';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js';

const ExpenseItem = (props) => {
    //function clickHandler()
    console.log('ExpenseItem evaluated by react');

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem; 