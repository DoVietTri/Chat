import React from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import clsx from 'clsx';
import useStyles from './styles';

const MessageItem = () => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.messageItem, classes.messageRight)} >
      <Avatar>
        <Image />
      </Avatar>
      <Typography variant="body2" >adsasdasds</Typography>
    </Box>
  )
}

export default MessageItem;
