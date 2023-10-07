import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
