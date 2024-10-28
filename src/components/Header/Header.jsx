import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import styles from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.activeLink);
  };

  return (
    <header>
      <div>
        <nav className={styles.headerNav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
              </NavLink>
              <div className={styles.welcomeStr}>
                Welcome, {user.name || user.email}!
              </div>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <div className={styles.register}>
              <NavLink to="/register" className={buildLinkClass}>
                Register
              </NavLink>
              <NavLink to="/login" className={buildLinkClass}>
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
