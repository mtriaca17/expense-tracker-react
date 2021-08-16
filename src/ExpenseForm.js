import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/styles';

const styles = {
  ExpenseForm: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '22px',
    gap: '20px',
    '& input': {
      width: '250px',
      height: '30px',
    },
    '& .control': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& button': {
      height: '40px',
      width: '40%',
      alignSelf: 'center',
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
        <input
          type="text"
          name="description"
          id="description"
          value={expense.description}
          onChange={handleChange}
        />
      </div>
      <div className="control">
        <label htmlFor="amount">Amount: </label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="control">
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" id="date" value={expense.date} onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default withStyles(styles)(ExpenseForm);
