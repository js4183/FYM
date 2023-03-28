import React, {useEffect, useState} from 'react';
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
import MyEdit from "./components/MyEdit";
import UserDelete from "./components/UserDelete";
import MeetDetail from "./components/MeetDetail";
import MeetCreate from "./components/MeetCreate";
import BoardPage from "./pages/BoardPage";
import ChatPage from "./pages/ChatPage";
import WriteBoard from "./components/Writeboard";
import BoardDetail from "./components/BoardDetail";
import BoardWrite from "./pages/BoardWrite";
import BoardEdit from "./components/BoardEdit";
import BoardList from "./pages/BoardList";

function App() {
    //socket 연결시 소켓 정보 저장
    const [socket, setSocket] = useState();

    useEffect(()=>{
        console.log(socket)
        socket && connect();
    },[])

    //socket 연결할때 실행할 함수
    function connect() {
        let ws = new WebSocket("ws://localhost:8080/socket")
        setSocket(ws)
        ws.onopen = () => {
            console.log("websocket: connected")
            // ws.send("sending message from client-server")
        }
        ws.onclose = function (event) {
            console.log('Info: connection closed.');
            // setTimeout( function(){connect()}, 1000)
        };
        ws.onerror = function (event) { console.log('Info: connection closed.'); };
        setSocket(ws);
    }

    return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Intro/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/chat" element={<Chat socket={socket}/>}/>
              <Route path="/chatpage" element={<ChatPage socket={socket}/>}/>
              <Route path="/map" element={<Map/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/sign" element={<Sign/>}/>
              <Route path="/login" element={<Login connect={connect} socket={socket}/>}/>
              <Route path="/myedit" element={<MyEdit/>}/>
              <Route path="/userdelete" element={<UserDelete/>}/>
              <Route path="/create" element={<MeetCreate/>}/>
              <Route path="/detail/:mt_idx" element={<MeetDetail/>}/>
              <Route path="/boardpage" element={<BoardPage/>}/>
              <Route path="/board" element={<BoardWrite/>}/>
              <Route path="/board/list" element={<BoardList/>}/>
              <Route path="/board/edit" element={<BoardEdit/>}/>
              <Route path="/board/write" element={<WriteBoard/>}/>
              <Route path="/board/free" element={<BoardDetail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;