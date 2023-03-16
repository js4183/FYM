import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Schedule from "./pages/Schedule";
import Mypage from "./pages/Mypage";
import Map from "./pages/Map";
import Intro from "./pages/Intro"
import Footer from "./components/Footer";
import Sign from "./components/Sign";
import Login from "./components/Login";

function App() {

  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Intro/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/chat" element={<Chat/>}/>
              <Route path="/map" element={<Map/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/sign" element={<Sign/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;