import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Перевіряємо, чи авторизований користувач

  return isLoggedIn ? <Component /> : <Navigate to="/login" />; // Якщо авторизований - рендеримо компонент, інакше перенаправляємо на логін
};

export default PrivateRoute;
