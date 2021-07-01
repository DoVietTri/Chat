import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 100

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth
  },
  list: {
    '& li': {
      padding: theme.spacing(2),
    },
    '& div.MuiListItem-root:nth-child(1)': {
      padding: theme.spacing(1),
      width: '100px',
      marginBottom: theme.spacing(5),
      justifyContent: 'center'
    },
    '& a.MuiListItem-root': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  content: {
    flexGrow: 1,
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    '& svg.MuiSvgIcon-root': {
      color: theme.palette.primary.main
    }
  }
}), { index: 1 });

export default useStyles;
