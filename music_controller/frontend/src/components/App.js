import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Routes,
} from 'react-router-dom'
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);