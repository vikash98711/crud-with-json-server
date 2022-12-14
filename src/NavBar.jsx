import React from 'react';
import {AppBar,Toolbar,Typography,styled,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';



const Header = styled(AppBar)`
background:black;
`
const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;

`



function NavBar() {
  return (
  <Header position='static'>
    <Toolbar>
<Tabs to="/">Section</Tabs>
<Tabs to="All">Users</Tabs>
<Tabs to="Users">AddUsers</Tabs>

    </Toolbar>
 
  </Header>
  )
}

export default NavBar;