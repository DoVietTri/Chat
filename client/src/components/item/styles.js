import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  name: {
    fontWeight: theme.typography.fontWeightBold
  },
  content: {
    display: 'flex',
    '& p.MuiTypography-body2': {
      width: 200
    },
  },
  grow: {
    flexGrow: 1
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
}), { index: 1 });

export default useStyles;
