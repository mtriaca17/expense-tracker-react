import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
  ExpenseForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: '22px',
    gap: '20px',
    // border: '1px solid blue',
    padding: '20px',
    '& input': {
      // width: '100%',
    },
    '& .control': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px',
    },
    '& .btn': {
      alignSelf: 'center',
      width: '30%',
    },
    '@media(max-width: 600px)': {
      fontSize: '1rem',

      '& .control': {
        flexDirection: 'column',
        gap: '5px',
      },

      '& .btn': {
        width: '100%',
      },
    },
  },
};

function ExpenseForm(props) {
  // const [description, setDescription] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
  const [expense, setExpense] = useState({ description: '', amount: '', date: '' });

  const handleChange = e => {
    setExpense(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newExpense = { ...expense, id: uuidv4() };

    props.createExpense(newExpense);
    setExpense({ description: '', amount: '', date: '' });
  };

  return (
    <form className={props.classes.ExpenseForm} onSubmit={handleSubmit}>
      <div className="control">
        <label htmlFor="description">Description: </label>
        {/* <input
          type="text"
          name="description"
          id="description"
          value={expense.description}
          onChange={handleChange}
        /> */}
        <TextField
          type="text"
          name="description"
          id="description"
          label="Description"
          variant="outlined"
          value={expense.description}
          onChange={handleChange}
          fullWidth={true}
          margin="dense"
        />
      </div>
      <div className="control">
        <label htmlFor="amount">Amount: </label>
        {/* <input
          type="text"
          name="amount"
          id="amount"
          value={expense.amount}
          onChange={handleChange}
        /> */}
        <TextField
          type="number"
          name="amount"
          id="amount"
          label="Amount"
          variant="outlined"
          value={expense.amount}
          onChange={handleChange}
          fullWidth={true}
          margin="dense"
        />
      </div>
      <div className="control">
        <label htmlFor="date">Date: </label>
        {/* <input type="date" name="date" id="date" value={expense.date} onChange={handleChange} /> */}
        <TextField
          type="date"
          name="date"
          variant="outlined"
          value={expense.date}
          onChange={handleChange}
          fullWidth={true}
          margin="dense"
        />
      </div>
      <Button className="btn" type="submit" variant="contained" size="large">
        Submit
      </Button>
    </form>
  );
}

export default withStyles(styles)(ExpenseForm);
