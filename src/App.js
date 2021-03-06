
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer'
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import AboutMe from './Pages/AboutMe/AboutMe';
import Checkout from './Pages/Checkout/Checkout';
import Registration from './Pages/Login/Registration/Registration';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Contact from './Pages/Home/Contact/Contact';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route  path='/aboutMe'element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact'element={<Contact></Contact>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route  path='*'element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
