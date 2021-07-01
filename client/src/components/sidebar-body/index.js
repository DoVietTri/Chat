import React from 'react';
import { Typography, Tooltip, Button, TextField, List, Box } from '@material-ui/core';
import { PeopleOutlineOutlined, AddCircleOutlineOutlined, PersonAddOutlined } from '@material-ui/icons';
import Item from '../item';
import useStyles from './styles';

const SidebarBody = (props) => {
  const classes = useStyles();
  const { title, path } = props;
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

          <Item
            name={"Do Viet Tri"}
            content={"Tri ne, how are you ?"}
            time={"03:41 PM"}
          />
          <Item
            name={"Do Viet Tri"}
            content={"Tri ne, how are you ?"}
            time={"03:41 PM"}
          />
          <Item
            name={"Do Viet Tri"}
            content={"Tri ne, how are you ?"}
            time={"03:41 PM"}
          />
          <Item
            name={"Do Viet Tri"}
            content={"Tri ne, how are you ?"}
            time={"03:41 PM"}
          />

        </List>
      </div>
    </Box>
  )
}

export default SidebarBody;
