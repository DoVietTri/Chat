import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarBody from '../../components/sidebar-body';
import Wrapper from '../../layouts/wrapper';
import AreaChat from '../home/area-chat';
import useStyles from './styles';

const Friends = () => {
  const classes = useStyles();
  const path = useLocation();

  return (
    <Wrapper>
      <div className={classes.root} >

        <SidebarBody 
          title={"Friends"}
          path={path.pathname}
        />

        <AreaChat />
      </div>
    </Wrapper>
  )
}

export default Friends;
