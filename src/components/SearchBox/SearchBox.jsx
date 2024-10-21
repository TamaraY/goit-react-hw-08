import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.searchWrap}>
      <label className={styles.text}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={(evt) => handleChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
