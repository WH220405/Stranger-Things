import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import LoginForm from './components/pages/LoginForm';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';


import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/home" element={<Home />}  />
       <Route path="/" element={<LoginForm/>}  />
       <Route path="/posts" element={<Posts />} />
       <Route path="/profiles" element={<Profile />} />
     </Routes>
      </BrowserRouter >
    </>
  );
};

export default App;
