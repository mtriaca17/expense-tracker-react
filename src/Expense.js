import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  Expense: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};

function Expense(props) {
  const handleDelete = () => {
    console.log(props.expense.id);
    props.deleteExpense(props.expense.id);
  };
  console.log(props);
  return (
    <div className={props.classes.Expense}>
      <p>
        {props.expense.date} - {props.expense.description} - {props.expense.amount}
      </p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default withStyles(styles)(Expense);
