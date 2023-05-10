import { fetchDelContacts } from 'redux/option';
import { Wrapper, List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export function ContactList() {
  const filterData = useSelector(state => state.contacts.filters);
  const { items: contacts } = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const lowCase = filterData.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCase)
  );

  return (
    <Wrapper>
      <List>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              type="button"
              onClick={() => dispatch(fetchDelContacts(contact.id))}
            >
              Delete
            </button>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
