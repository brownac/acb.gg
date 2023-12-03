import { h } from "preact";
import Router from "preact-router";
import "antd/dist/reset.css";

import { PageHeader } from "@ant-design/pro-components";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import * as URLS from "../const/urls";
import Switcher from "./switcher";
import Home from "../routes/home";
import Blog from "../routes/blog";

const env = process.env.NODE_ENV;
const themes = {
  dark: URLS.DARK_THEME[env],
  light: URLS.LIGHT_THEME[env],
};

const App = () => {
  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
      <div id="app">
        <PageHeader
          className="site-page-header"
          title="Austin Brown"
          subTitle={<Switcher />}
        />
        <Router>
          <Home path="/" />
          <Blog path="/blog" />
        </Router>
      </div>
    </ThemeSwitcherProvider>
  );
};

export default App;
