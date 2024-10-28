import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import clsx from "clsx";

import styles from "./Header.module.css";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.activeLink);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

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
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <div className={styles.register}>
              <>
                <NavLink to="/register" className={buildLinkClass}>
                  Register
                </NavLink>
                <NavLink to="/login" className={buildLinkClass}>
                  Login
                </NavLink>
              </>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
