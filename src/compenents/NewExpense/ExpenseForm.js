import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEntiredTitle] = useState('');
    const [enteredAmount, setEntiredAmount] = useState('');
    const [enteredDate, setEntiredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEntiredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    };
    const amountChangeHandler = (event) => {
        setEntiredAmount(event.target.value);
        //     setUserInput({
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     })
        // }
    };

    const dateChangeHandler = (event) => {
        setEntiredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);
        setEntiredTitle('');
        setEntiredAmount('');
        setEntiredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min='2020-01-01' max='2022-12-31'
                        onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;