import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  messageItem: {
    display: 'flex',
    alignItems: 'center',
    '& p.MuiTypography-root': {
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(1),
      maxWidth: theme.spacing(50),
      wordWrap: 'break-word'

    },
    margin: theme.spacing(1, 0)
  },
  messageLeft: {
    justifyContent: 'flex-start',
    '& p.MuiTypography-root': {
      backgroundColor: theme.palette.grey[300],
    }
  },
  messageRight: {
    justifyContent: 'flex-end',
    '& p.MuiTypography-root': {
      backgroundColor: theme.palette.primary.light,
    }
  }
}));

export default useStyles;
