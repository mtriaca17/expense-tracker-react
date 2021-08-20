import React from 'react';
import Expense from './Expense';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = {
  ExpenseList: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // border: '1px solid red',
    padding: '10px',
  },
  ExpenseListHeader: {
    '@media(max-width: 600px)': {
      fontSize: '1rem',
    },
  },
};

function ExpenseList(props) {
  const output = props.expenses.map(expense => (
    <Expense key={expense.id} expense={expense} deleteExpense={props.deleteExpense} />
  ));

  return (
    <div className={props.classes.ExpenseList}>
      <Typography
        className={props.classes.ExpenseListHeader}
        variant="h4"
        component="h4"
        gutterBottom
      >
        Past Expenses:
      </Typography>
      {output}
    </div>
  );
}

export default withStyles(styles)(ExpenseList);
