import React from 'react';
import Wrapper from '../../layouts/wrapper';
import useStyles from './styles';
import AreaChat from './area-chat';
import SidebarBody from '../../components/sidebar-body';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const classes = useStyles();
  const path = useLocation();

  return (
    <Wrapper>
      <div className={classes.root} >
       
        <SidebarBody 
          title={"Chats"}
          path={path.pathname}
        />
        
        <AreaChat />
      </div>
    </Wrapper>
  )
}

export default Home;
