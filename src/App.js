import logo from './logo.svg';

import Login from './components/login/login'
import Signup from './components/signup/signup'
import Profile from './components/profile/profile'
import Users from './components/users/users'
import Feed from './components/feed/feed'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">    
      
      <Routes >

    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>}  />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/users" element={<Users/>} />
     <Route path="/feed" element={<Feed/>} />

</Routes>

    </div>

    // <Login></Login>
  //  <Signup></Signup>
    // <Profile></Profile>
   // <Users></Users>
   // <Feed></Feed>
  );
}

export default App;
