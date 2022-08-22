import "./Nav.module.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <Link to={"/main"}>Justgram</Link>
      <input placeholder="검색" />
      <div>
        <a href="{() => false}">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="1"
          />
        </a>
        <a href="{() => false}">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="2"
          />
        </a>
        <a href="{() => false}">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="3"
          />
        </a>
      </div>
    </header>
  );
}
export default Nav;
