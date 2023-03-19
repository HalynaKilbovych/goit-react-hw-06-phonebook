import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactWrapper } from './ContactList.styled';
import { deleteContact, getContacts } from '../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactWrapper>
      <ul>
        {contacts.length ? (
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={() => handleDeleteContact(contact.id)}
            />
          ))
        ) : (
          <p>There are no contacts yet.</p>
        )}
      </ul>
    </ContactWrapper>
  );
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};