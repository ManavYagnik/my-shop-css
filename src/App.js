
import './App.css';
 
import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from "react-router-dom";
import Cart from './components/Cart';
import Footer from './components/Footer'
import ContactUs from './components/ContactUs';
// import { useLocation } from 'react-router-dom';
// import User from './User';
// import UserList from './components/UserList';


function App() {

 
  return (
    <div className="App">


      <Header />
      <Routes>
        <Route  path='/' element={<Main />}/>
        <Route  path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<ContactUs />}/>
        {/* <Route path='/users' element={<UserList />}/> */}
      
      </Routes>
      <Footer />
     
     
       
     
    </div>
  );
}

export default App;
