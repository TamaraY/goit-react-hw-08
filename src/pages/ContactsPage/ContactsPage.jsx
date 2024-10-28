import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactsForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Запитуємо контакти при завантаженні сторінки
  }, [dispatch]);

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactsForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
