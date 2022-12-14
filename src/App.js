
import './App.css';
import AddUsers from './components/AddUsers';
import Section from './components/Section';
import Users from './components/Users';
import NavBar from './NavBar';
import  {BrowserRouter,Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
   
   <BrowserRouter>
<NavBar/>
<Routes>
 <Route path="/" element={<Section/>}/>
<Route  path="All" element= {<Users/>}/>
<Route path="Users" element={<AddUsers/>}/>
<Route path="/edit/:id" element={<EditUser/>}/>
</Routes>
   </BrowserRouter>
   
  );
}

export default App;
