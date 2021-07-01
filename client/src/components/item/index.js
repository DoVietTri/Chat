import React from 'react';
import { Typography, ListItem, Avatar, ListItemAvatar, ListItemText, Badge } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import useStyles from './styles';

const Item = (props) => {
  const classes = useStyles();

  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <Badge
            overlap="circle"
            color="secondary"
            variant="dot"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            classes={{
              badge: classes.badge
            }}
          >
            <Image />
          </Badge>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={
          <Typography className={classes.name} variant="body2" noWrap>
            { props.name }
          </Typography>}
        secondary={
          <div className={classes.content}>
            <Typography variant="body2" noWrap>
              { props.content }
            </Typography>
            <div className={classes.grow} />
            <Typography variant="caption">
              { props.time }
            </Typography>
          </div>
        } />
    </ListItem>
  )
}

export default Item;
