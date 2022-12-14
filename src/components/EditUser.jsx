import { useState, useEffect } from 'react';

import { FormControl, FormGroup, Input, InputLabel, Typography,Button,styled} from '@mui/material';
import React from 'react';

import {useNavigate, useParams} from 'react-router-dom';
import {getUser,editUser} from '../service/api';

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


function EditUser() {
    const [user,setUser] = useState(initialValues);
const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
getUserData();
    },[])

const getUserData = async () => {
    let response = await getUser(id)
  setUser(response.data)
}




   

const onValuechange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user)

}
const adduserdeatils = async () =>{
    await editUser(user,id);
    // // // click adduser to go user
    navigate('/all');

}

  return (
  <Container>
  <Typography variant="h4">Edit User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) =>onValuechange(e)} name="name" value ={user.name}/>
    </FormControl>
    <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) =>onValuechange(e)} name="username" value ={user.username}/>
    </FormControl>
    <FormControl>
        <InputLabel>Email</InputLabel>
        <Input  onChange={(e) =>onValuechange(e)} name="email" value ={user.email}/>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e) =>onValuechange(e)} name="phone" value ={user.phone}/>
    </FormControl>
    <FormControl>
        <Button onClick={()=> adduserdeatils()} variant="contained">Add user</Button>
    </FormControl>
  </Container>


  )
}

export default EditUser;