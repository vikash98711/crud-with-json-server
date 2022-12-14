import { useState } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography,Button,styled} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {adduser} from '../service/api';

const Container =styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
text-align:center;
& > div {
    margin-top:20px;
}
`
 const initialValues ={
    name:'',
    username:'',
    email:'',
    phone:''
 }


function AddUsers() {
    const [user,setUser] = useState(initialValues)
    const navigate = useNavigate()


const onValuechange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user)

}
const adduserdeatils = async () =>{
    await adduser(user);
    // click adduser to go user
    navigate('/all');

}

  return (
  <Container>
  <Typography variant="h4">Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) =>onValuechange(e)} name="name"/>
    </FormControl>
    <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) =>onValuechange(e)} name="username"/>
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input  onChange={(e) =>onValuechange(e)} name="username"/>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e) =>onValuechange(e)} name="phone"/>
    </FormControl>
    <FormControl>
        <Button onClick={()=> adduserdeatils()} variant="contained">Add user</Button>
    </FormControl>
  </Container>


  )
}

export default AddUsers;