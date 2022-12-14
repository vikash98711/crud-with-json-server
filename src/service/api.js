import axios from 'axios';


const API_URL = 'http://localhost:3002/users';


export const adduser =  async (data) => {
    try{
   return await axios.post(API_URL,data);
}catch(error){
    console.log(`Error while calling api`,error.message);
}
}

export const getUsers = async () => {
try{
    return await axios.get(API_URL);

}catch(error){
    console.log(`Error while calling getUsers api `,error.message)
}
}

export const getUser = async (data)=> {
    try{
    return await axios.get(`${API_URL}/${data}`)
    } catch(error){
      console.log('error while calling user api', error);
    }
  }

// edit api

export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    
        
    }catch(error){
        console.log(`Error while calling getUser api `,error.message)
    }
    }



// api deleteuser

export const deleteuser= async (id) =>{
    try{
        return await axios.delete(`${API_URL}/${id}`);

    }catch (error){
        console.log(`Error while calling deleteuser api`, error.message);
    }
}