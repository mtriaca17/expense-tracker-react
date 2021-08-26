import Dashboard from './Dashboard';
import './App.css';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  App: {
    height: '100%',
    width: '100%',
    paddingTop: '20px',
  },
  AppTitle: {
    color: 'white',
    '@media(max-width: 600px)': {
      fontSize: '2rem',
    },
  },
};

function App(props) {
  console.log(props.classes);
  return (
    <div className={props.classes.App}>
      <Container>
        <Typography
          className={props.classes.AppTitle}
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
        >
          Expense Tracker
        </Typography>
        <Dashboard />
      </Container>
    </div>
  );
}

export default withStyles(styles)(App);
