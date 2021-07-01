import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  areaChat: {
    flexGrow: 100,
  },
  chatHeader: {
    height: theme.spacing(9),
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2, 0),
    '& button.MuiButtonBase-root': {
      marginRight: theme.spacing(1)
    },
  },
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
  chatBody: {
    height: '79vh',
    overflowY: 'scroll'
  },
  chatFooter: {
    display: 'flex',
    bottom: 0,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1, 2),
    '& input.MuiInputBase-input': {
      padding: theme.spacing(1.5)
    },
    '& button.MuiButtonBase-root': {
      margin: theme.spacing(0, 1)
    }
  },
  messageList: {
    padding: theme.spacing(1),
    width: '100%'
  },
}), { index: 1 });

export default useStyles;
