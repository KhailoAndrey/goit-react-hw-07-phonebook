import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/option';

export function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      {isLoading && <b>Загрузка...</b>}
      {error && <b>{error}</b>}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <h3>Здесь пока нет ни одного контакта...</h3>
      )}
    </div>
  );
}
