import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
  },
  btnLogin: {
    marginTop: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  require: {
    color: theme.palette.error.main,
  },
  redirectRegister: {
    marginTop: theme.spacing(2)
  }
}), { index: 1 });

export default useStyles;
