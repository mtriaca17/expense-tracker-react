import React from 'react';
import Expense from './Expense';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  // table: {
  //   minWidth: 650,
  // },
  ExpenseList: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    backgroundColor: '#d9e4ec',
    boxShadow: '0 3px 15px 2px rgba(255,255,255,0.51)',
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
