import React from 'react';
import Expense from './Expense';

function ExpenseList(props) {
  const output = props.expenses.map(expense => (
    <Expense key={expense.id} expense={expense} deleteExpense={props.deleteExpense} />
  ));

  return <div>{output}</div>;
}

export default ExpenseList;
