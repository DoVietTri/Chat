import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  sidebarGroup: {
    flexGrow: 1,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
    height: '100vh'
  },
  top: {
    display: 'flex',
    '& button.MuiButtonBase-root': {
      marginLeft: theme.spacing(1),
      padding: 0
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  formSearch: {
    marginTop: theme.spacing(2),
    '& input.MuiInputBase-input': {
      padding: theme.spacing(1)
    }
  },
  sidebarBody: {

  },
  list: {
    height: '82vh',
    overflowY: 'scroll',
    '& div.MuiListItem-root': {
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    marginTop: theme.spacing(1)
  },
  areaChat: {
    flexGrow: 100
  },
  chatHeader: {
    height: theme.spacing(9),
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2, 0)
  },
  chatBody: {

  },
  chatFooter: {

  }
}), { index: 1 });

export default useStyles;
