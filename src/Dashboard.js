import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '15px',
    padding: '20px',
  },
  paper: {
    padding: '10px',
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <ExpenseForm createExpense={createExpense} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
