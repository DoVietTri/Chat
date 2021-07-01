import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/images/background.png';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  box: {
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: green[100],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2, 4)
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(2)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1)
  }
}));

export default useStyles;
