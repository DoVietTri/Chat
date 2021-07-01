import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  grow: {
    flexGrow: 1
  },
}), { index: 1 });

export default useStyles;
