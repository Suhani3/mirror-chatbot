import React from "react";
import Chatbot from "react-chatbot-kit";
import "./Styles/App.css";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./mirror-chatbot.jpg" alt="logo"/>
        <h3>MIRROR BOT</h3>
        <p>When a user sends a message in the chat view, the same message will be echoed back which will be shown as the response message from the mirror chatbot in the chat window.</p>
      </header>
      <div className="mirror-chatbot">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
      </div>
      <footer className="App-footer">
        <small>inFeedo Assessment</small>
        <small>By Suhani</small>
      </footer>
    </div>
  );
}

export default App;
