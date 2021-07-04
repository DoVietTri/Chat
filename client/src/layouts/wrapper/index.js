import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, List, ListItem, Avatar, Tooltip, CssBaseline } from '@material-ui/core';
import { ChatBubbleOutlineOutlined, PermIdentityOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import logo from '../../assets/images/logo.svg';
import { profile } from '../../redux/actions/authAction';
import io from 'socket.io-client';

const Wrapper = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.auth.profile);
  const userId = userProfile._id

  useEffect(() => {
    dispatch(profile());

    const chatSocket = io(`${process.env.REACT_APP_CHAT_URL}:${process.env.REACT_APP_CHAT_PORT}?userId=${userId}`, {
      autoConnect: false
    });
    chatSocket.open();
    global.chatSocket = chatSocket;
    
  }, [dispatch, userId]);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
      >
        <List className={classes.list} >
          <ListItem button>
            <Avatar src={logo} />
          </ListItem>

          <Tooltip
            placement="right"
            title="Chats"
          >
            <ListItem button key="Chat" component={NavLink} activeClassName={classes.active} to="/" exact={true} >
              <ChatBubbleOutlineOutlined fontSize="default" color="action" />
            </ListItem>
          </Tooltip>

          <Tooltip
            placement="right"
            title="Friends"
          >
            <ListItem button key="Friend" component={NavLink} activeClassName={classes.active} to="/friends" exact={true}>
              <PermIdentityOutlined fontSize="default" color="action" />
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
      <main className={classes.content}>
        { props.children }
      </main>
    </div>
  )
}

export default Wrapper;
