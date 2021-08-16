import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    height: '90vh',
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '15px',
    paddingTop: '25px',
    borderRadius: '10px',
    border: '1px solid dodgerblue',
  },
};

function Dashboard(props) {
  const [expenses, setExpenses] = useState([]);

  const createExpense = newExpense => {
    console.log('hello', newExpense);
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = id => {
    console.log('bye', id);
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className={props.classes.root}>
      <ExpenseForm createExpense={createExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default withStyles(styles)(Dashboard);
