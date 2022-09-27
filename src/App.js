import Expenses from './compenents/Expenses/Expenses';
import NewExpense from './compenents/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: "el",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New Tv", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.97,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
