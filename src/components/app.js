import { h } from 'preact';

import { PageHeader } from 'antd';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

import * as URLS from '../const/urls';
import Switcher from './switcher';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const env = process.env.NODE_ENV;
const themes = {
	dark: URLS.DARK_THEME[env],
	light: URLS.LIGHT_THEME[env],
};

const App = () => {
	return (
		<ThemeSwitcherProvider
			themeMap={themes}
			defaultTheme="light"
		>
			<div id="app">
				<PageHeader
					className="site-page-header"
					title="Austin Brown"
					subTitle={<Switcher />}
				/>
				<Home />
			</div>
		</ThemeSwitcherProvider>
	);
};

export default App;
