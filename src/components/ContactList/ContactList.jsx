import { fetchDelContacts } from 'redux/option';
import { Wrapper, List, ListItem, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export function ContactList() {
  const filterData = useSelector(selectVisibleContacts);
  // const { items: contacts } = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  // const lowCase = filterData.toLowerCase();

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(lowCase)
  // );
  return (
    <Wrapper>
      <List>
        {filterData.length > 0 ? (
          <>
            {filterData.map(contact => (
              <ListItem key={contact.id}>
                <span>{contact.name}: </span>
                <span>{contact.number}</span>
                <Button
                  type="button"
                  onClick={() => dispatch(fetchDelContacts(contact.id))}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </>
        ) : (
          <h6>По Вашему фильтру ничего не найдено...</h6>
        )}
      </List>
    </Wrapper>
  );
}
