import React from 'react';
import { Typography, Tooltip, Button, TextField, List, Box } from '@material-ui/core';
import { PeopleOutlineOutlined, AddCircleOutlineOutlined, PersonAddOutlined } from '@material-ui/icons';
import Item from '../item';
import useStyles from './styles';

const SidebarBody = (props) => {
  const classes = useStyles();
  const { title, path, data } = props;


  const showDataUser = (data) => {
    return data.map(user => {
      return (
        <Item
          key={user._id}
          name={user.username}
          content={user.email}
        />
      )
    })
  }

  // const showDataMessage = (data) => {
  //   return data.map(message => {
  //     return (
  //       <Item
  //         key={message._id}
  //         name={message.username}
  //       />
  //     )
  //   })
  // }

  return (
    <Box
      className={classes.sidebarGroup}
    >
      <div className={classes.top} >
        <Typography
          variant="h5"
          className={classes.title}
        >
          {title}
        </Typography>
        <div className={classes.grow} />
        {path === '/' ?
          (<><Tooltip
            title="Add group"
          >
            <Button
              variant="outlined"
              size="small"
            >
              <PeopleOutlineOutlined />
            </Button>
          </Tooltip>
            <Tooltip
              title="New chat"
            >
              <Button
                variant="outlined"
                size="small"
              >
                <AddCircleOutlineOutlined />
              </Button>
            </Tooltip></>) : ''}
        {path === '/friends' ?
          (<Tooltip
            title="Add friend"
          >
            <Button
              variant="outlined"
              size="small"
            >
              <PersonAddOutlined />
            </Button>
          </Tooltip>) : ''}
      </div>

      <form className={classes.formSearch} >
        <TextField
          variant="outlined"
          fullWidth
          placeholder={`Search ${title}...`}
        />
      </form>

      <div className={classes.sidebarBody}>
        <List className={classes.list} >
          {path === '/friends' ? showDataUser(data) : ''}
        </List>
      </div>
    </Box>
  )
}

export default SidebarBody;
