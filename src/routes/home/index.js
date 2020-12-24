import { h } from 'preact';

import style from './style.css';
import { home } from '../../copy';
import * as URLS from '../../const/urls';

const ContactDropdown = () => (
	<Dropdown overlay={menu}>
		<p>{home.contactMe}</p>
	</Dropdown>
);

const Home = () => (
	<div class={style.home}>
		<div class={style.content}>
			<img class={style.profileImage} src={URLS.PROFILE_IMG} alt="austin" />
			<h3>{home.greeting}</h3>
			<p>{home.currentEmployer} {home.currentWork}</p>
			<p>You can <a href={URLS.RESUME} download>{home.downloadResume}</a>, <a href={URLS.GITHUB}>{home.viewMyWork}</a>, or <a href={URLS.SOCIALS.email}>{home.contactMe}</a></p>
		</div>
	</div>
);

export default Home;
