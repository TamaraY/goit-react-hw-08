import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/slice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); // Отримуємо контакти з Redux

  useEffect(() => {
    dispatch(fetchContacts()); // Запитуємо контакти при завантаженні сторінки
  }, [dispatch]);

  return (
    <div>
      <h1>Your Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
