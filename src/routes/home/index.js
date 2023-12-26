import { h } from "preact";

import style from "./style.css";
import { home } from "../../copy";
import * as URLS from "../../const/urls";
import Socials from "../../components/socials";

const Home = () => (
  <div class={style.home}>
    <div class={style.content}>
      <img class={style.profileImage} src={URLS.PROFILE_IMG} alt="austin" />
      <h3>{home.greeting}</h3>
      <p>
        I'm a software engineer located in New York City, currently building{" "}
        <a href="https://www.klaviyo.com/product-reviews">Klaviyo Reviews.</a>
      </p>
      <p>
        You can{" "}
        <a href={URLS.RESUME} download>
          {home.downloadResume}
        </a>{" "}
        or <a href={URLS.SOCIALS.email}>{home.contactMe}</a>
      </p>
      <p>
        New: check out my <a href="https://blog.acb.gg" target="_blank">blog!</a>
      </p>
    </div>
    <Socials />
  </div>
);

export default Home;
