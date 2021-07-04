import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SidebarBody from '../../components/sidebar-body';
import Wrapper from '../../layouts/wrapper';
import AreaChat from '../home/area-chat';
import useStyles from './styles';
import { getAllFriends } from '../../redux/actions/contactAction';

const Friends = () => {
  const classes = useStyles();
  const path = useLocation();

  const dispatch = useDispatch();
  const friends = useSelector(state => state.contact.friends);

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className={classes.root} >

        <SidebarBody 
          title={"Friends"}
          path={path.pathname}
          data={friends}
        />

        <AreaChat />
      </div>
    </Wrapper>
  )
}

export default Friends;
