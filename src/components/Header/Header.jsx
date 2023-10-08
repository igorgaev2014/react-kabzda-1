import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        alt="img"
        src="https://img.freepik.com/premium-vector/minimal-3-line-logo-design-with-gradient-colors_720439-122.jpg?w=2000"
      ></img>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
