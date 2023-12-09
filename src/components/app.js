import { h } from "preact";
import Router from "preact-router";
import "antd/dist/reset.css";

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import * as URLS from "../const/urls";
import Home from "../routes/home";
import Blog from "../routes/blog";

const env = process.env.NODE_ENV;
const themes = {
  dark: URLS.DARK_THEME[env],
  light: URLS.LIGHT_THEME[env],
};

const App = () => {
  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
      <div id="app">
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <h1>Austin Brown</h1>
        </div>
        <Router>
          <Home path="/" />
          <Blog path="/blog" />
        </Router>
      </div>
    </ThemeSwitcherProvider>
  );
};

export default App;
