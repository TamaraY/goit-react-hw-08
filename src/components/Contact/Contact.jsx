import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import style from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={style.item}>
      <div className={style.contact}>
        <p className={style.contactText}>{contact.name}</p>
        <p className={style.contactText}>{contact.number}</p>
      </div>
      <button className={style.btn} onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
