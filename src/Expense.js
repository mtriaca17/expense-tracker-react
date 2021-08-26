import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  Expense: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderBottom: '2px solid gray',
    '&:hover': {
      borderBottom: '2px solid #6aabd2',
      transition: 'all .25s ease',
    },
    '&:hover span svg': {},
    '& span:hover svg': {
      transform: 'scale(1.3)',
      cursor: 'pointer',
      transition: 'all .25s ease',
      color: 'red',
    },
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
      <span className="deleteBtn" onClick={handleDelete}>
        <DeleteIcon />
      </span>
    </div>
  );
}

export default withStyles(styles)(Expense);
