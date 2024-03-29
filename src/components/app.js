import { h } from "preact";
import Router from "preact-router";
import "antd/dist/reset.css";
import "../public/dark-theme.css";

import Home from "../routes/home";

const App = () => {
  return (
    <div id="app">
      <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
        <h1>Austin Brown</h1>
      </div>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
};

export default App;
