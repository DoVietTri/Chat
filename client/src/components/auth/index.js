import React from 'react';
import { Box, CssBaseline, Typography, Divider, Avatar } from '@material-ui/core';
import useStyles from './styles';
import PropTypes from 'prop-types';

const Auth = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <CssBaseline />
      <Box
        boxShadow={5}
        className={classes.box}

      >
        <Avatar
          color="primary"
          className={classes.avatar}
        >
          { props.avatar }
        </Avatar>
        <Typography
          variant="h5"
          align="center"
          className={classes.title}
        >
          { props.title }
        </Typography>
        <Divider />
        { props.children }
      </Box>
    </div>
  )
}

Auth.propTypes = {
  title: PropTypes.string
}

export default Auth;
